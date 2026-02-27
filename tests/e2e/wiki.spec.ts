import { expect, test } from "@playwright/test";

test("can open an article from the home page", async ({ page }) => {
  await page.goto("/");

  const firstArticleLink = page.locator("article.wiki-card h3 a").first();
  const title = (await firstArticleLink.textContent())?.trim() ?? "";
  await firstArticleLink.click();

  await expect(page).toHaveURL(/\/wiki\//);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(title);
});

test("article page exposes category and tag links", async ({ page }) => {
  await page.goto("/");
  await page.locator("article.wiki-card h3 a").first().click();

  await expect(page.locator('a[href^="/categories/"]').first()).toBeVisible();
  await expect(page.locator('a[href^="/tags/"]').first()).toBeVisible();
});
