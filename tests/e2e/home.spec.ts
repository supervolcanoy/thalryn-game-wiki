import { expect, test } from "@playwright/test";

test("home page renders hero and top navigation", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Welcome to ThalrynWiki" })
  ).toBeVisible();

  await expect(page.getByRole("link", { name: /THALRYN.*WIKI/ })).toBeVisible();
  await expect(
    page.locator(".wiki-header-nav").getByRole("link", { name: "Search" })
  ).toBeVisible();
  await expect(
    page.locator(".wiki-header-nav").getByRole("link", { name: "Categories" })
  ).toBeVisible();
  await expect(
    page.locator(".wiki-header-nav").getByRole("link", { name: "Tags" })
  ).toBeVisible();
});

test("home page lists wiki article cards", async ({ page }) => {
  await page.goto("/");
  const cards = page.locator("article.wiki-card");
  await expect(cards.first()).toBeVisible();
  expect(await cards.count()).toBeGreaterThan(0);
});
