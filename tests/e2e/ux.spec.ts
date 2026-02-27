import { expect, test } from "@playwright/test";

test("featured cards are fully clickable", async ({ page }) => {
  await page.goto("/");
  const firstCard = page.getByTestId("featured-card-link").first();
  await expect(firstCard).toBeVisible();
  await firstCard.click();
  await expect(page).toHaveURL(/\/wiki\/.+/);
});

test("primary card links support keyboard activation", async ({ page }) => {
  await page.goto("/characters");
  const firstCardLink = page.locator(".wiki-card-link").first();
  await expect(firstCardLink).toBeVisible();
  await firstCardLink.press("Enter");
  await expect(page).toHaveURL(/\/wiki\/.+/);
});

test("header and tab navigation meet minimum tap target height", async ({ page }) => {
  await page.goto("/");
  const headerLinkHeight = await page
    .locator(".wiki-header-nav-link")
    .first()
    .evaluate((el) => el.getBoundingClientRect().height);
  const tabLinkHeight = await page
    .locator(".wiki-tab")
    .first()
    .evaluate((el) => el.getBoundingClientRect().height);

  expect(headerLinkHeight).toBeGreaterThanOrEqual(36);
  expect(tabLinkHeight).toBeGreaterThanOrEqual(36);
});

test("domain card grids show avatars and use placeholder fallback", async ({ page }) => {
  await page.goto("/characters");
  await expect(page.locator(".wiki-card-thumb").first()).toBeVisible();

  await page.goto("/items");
  const ultraBombAvatar = page.getByTestId("item-avatar-ultra-bomb");
  await expect(ultraBombAvatar).toBeVisible();
  await expect(ultraBombAvatar).toHaveAttribute(
    "src",
    /\/images\/placeholders\/wiki-doc-placeholder\.svg/
  );
});

test("creature collection pages show multiple specific avatars", async ({ page }) => {
  await page.goto("/wiki/creatures-surface");
  await expect(page.getByRole("heading", { name: "Known Entities" })).toBeVisible();
  await expect(page.getByRole("img", { name: "Corrupted Bear" })).toBeVisible();
  await expect(page.getByRole("img", { name: "Blind Bloodhound" })).toBeVisible();
  await expect(page.getByRole("img", { name: "Shadow Eagle" })).toBeVisible();
});

test("character entity cards navigate to dedicated character pages", async ({ page }) => {
  await page.goto("/characters");
  await page
    .locator(".wiki-card-grid")
    .getByRole("link", { name: /Mutated Fox/i })
    .first()
    .click();
  await expect(page).toHaveURL(/\/wiki\/mutated-fox/);
  await expect(page.getByRole("heading", { name: "Mutated Fox" })).toBeVisible();
});

test("documentation-style pages do not force avatar fallback images", async ({ page }) => {
  await page.goto("/wiki/audio-and-visual-style");
  await expect(page.getByRole("heading", { name: "Audio and Visual Style" })).toBeVisible();
  await expect(page.locator(".wiki-article-layout img")).toHaveCount(0);
});
