import { expect, test } from "@playwright/test";

test("tab navigation highlights active tab and routes correctly", async ({ page }) => {
  await page.goto("/characters");
  await expect(page.getByRole("heading", { name: "Characters / NPCs" })).toBeVisible();
  await expect(page.locator('.wiki-tab[href="/characters"]')).toHaveClass(/wiki-tab-active/);

  await page.getByRole("link", { name: "Lore / World" }).click();
  await expect(page).toHaveURL(/\/lore$/);
  await expect(page.getByRole("heading", { name: "Lore / World" })).toBeVisible();
  await expect(page.locator('.wiki-tab[href="/lore"]')).toHaveClass(/wiki-tab-active/);

  await page.getByRole("link", { name: "Items / Equipment" }).click();
  await expect(page).toHaveURL(/\/items$/);
  await expect(page.getByRole("heading", { name: "Items / Equipment" })).toBeVisible();
  await expect(page.locator('.wiki-tab[href="/items"]')).toHaveClass(/wiki-tab-active/);
  await expect(page.locator(".wiki-side-title").nth(1)).toHaveText("Items / Equipment");
});

test("home does not force-highlight a domain tab", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".wiki-tab-active")).toHaveCount(0);
});

test("tab content corresponds to tab domain", async ({ page }) => {
  await page.goto("/characters");
  await expect(page.getByRole("heading", { name: "Characters / NPCs" })).toBeVisible();
  const characterTags = await page.locator(".wiki-card-tag").allTextContents();
  expect(characterTags.length).toBeGreaterThan(0);
  expect(characterTags.every((tag) => ["Characters / NPCs", "Bestiary"].includes(tag))).toBeTruthy();

  await page.goto("/items");
  await expect(page.getByRole("heading", { name: "Items / Equipment" })).toBeVisible();
  const itemTags = await page.locator(".wiki-card-tag").allTextContents();
  expect(itemTags.length).toBeGreaterThan(0);
  expect(itemTags.every((tag) => tag === "Items / Equipment")).toBeTruthy();
});

test("lore navigation contains canonical soul sirens entry", async ({ page }) => {
  await page.goto("/lore");
  await expect(page.locator(".wiki-side-box").nth(1).getByRole("link", { name: "Soul Sirens" })).toBeVisible();
});

test("soul sirens article highlights characters tab", async ({ page }) => {
  await page.goto("/wiki/soul-sirens");
  await expect(page.getByRole("heading", { name: "Soul Sirens" })).toBeVisible();
  await expect(page.locator('.wiki-tab[href="/characters"]')).toHaveClass(/wiki-tab-active/);
});
