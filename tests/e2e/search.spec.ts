import { expect, test, type Page } from "@playwright/test";

function collectPageErrors(page: Page) {
  const errors: string[] = [];
  page.on("pageerror", (error) => {
    errors.push(error.message);
  });
  return errors;
}

test("search page loads with input", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await page.goto("/search");
  await expect(page.getByRole("heading", { name: "Search" })).toBeVisible();
  await expect(
    page.getByPlaceholder("Search The Hazard, Soul Sirens, crafting, deep undergrounds...")
  ).toBeVisible();
  expect(pageErrors).toEqual([]);
});

test("search returns article results for a common term", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await page.goto("/search");
  const input = page.getByPlaceholder(
    "Search The Hazard, Soul Sirens, crafting, deep undergrounds..."
  );

  await input.fill("hazard");
  await expect(page.locator(".wiki-card-link").first()).toBeVisible();
  expect(pageErrors).toEqual([]);
});

test("search shows empty state when no results match", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await page.goto("/search");
  const input = page.getByPlaceholder(
    "Search The Hazard, Soul Sirens, crafting, deep undergrounds..."
  );

  await input.fill("qzjxkqzjxkqzjxk");
  await expect(page.getByText("No results found.")).toBeVisible();
  expect(pageErrors).toEqual([]);
});
