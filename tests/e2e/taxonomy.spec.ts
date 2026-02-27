import { expect, test } from "@playwright/test";

test("categories page lists categories and links to detail", async ({ page }) => {
  await page.goto("/categories");
  await expect(page.getByRole("heading", { name: "Categories" })).toBeVisible();

  const firstCategory = page.locator(".wiki-card-link").first();
  await expect(firstCategory).toBeVisible();
  const categoryHref = await firstCategory.getAttribute("href");
  await page.goto(categoryHref ?? "/categories");

  await expect(page).toHaveURL(/\/categories\/.+/);
  await expect(page.locator(".wiki-card-link").first()).toBeVisible();
});

test("tags page lists tags and links to detail", async ({ page }) => {
  await page.goto("/tags");
  await expect(page.getByRole("heading", { name: "Tags" })).toBeVisible();

  const firstTag = page.locator(".wiki-card-link").first();
  await expect(firstTag).toBeVisible();
  const tagHref = await firstTag.getAttribute("href");
  await page.goto(tagHref ?? "/tags");

  await expect(page).toHaveURL(/\/tags\/.+/);
  await expect(page.locator(".wiki-card-link").first()).toBeVisible();
});
