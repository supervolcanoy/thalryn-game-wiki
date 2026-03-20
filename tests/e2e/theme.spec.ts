import { expect, test } from "@playwright/test";

test("defaults to dark mode on fresh load (dark system preference)", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");
  const theme = await page.locator("html").getAttribute("data-theme");
  expect(theme).toBe("dark");
});

test("toggle switches to light mode", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");
  const toggle = page.getByRole("button", { name: /switch to light mode/i });
  await expect(toggle).toBeVisible();
  await toggle.click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
});

test("theme persists in localStorage", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");
  await page.getByRole("button", { name: /switch to light mode/i }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  const stored = await page.evaluate(() => localStorage.getItem("theme"));
  expect(stored).toBe("light");
});

test("theme persists across full page reload", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");
  await page.getByRole("button", { name: /switch to light mode/i }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
});

test("theme persists across navigation", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");
  await page.getByRole("button", { name: /switch to light mode/i }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.getByRole("link", { name: "Search" }).first().click();
  await page.waitForURL("/search");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
});

test("toggle cycles back to dark mode", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");
  await page.getByRole("button", { name: /switch to light mode/i }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.getByRole("button", { name: /switch to dark mode/i }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});

test("respects prefers-color-scheme light when no stored preference", async ({
  browser
}) => {
  const context = await browser.newContext({
    colorScheme: "light"
  });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await context.close();
});
