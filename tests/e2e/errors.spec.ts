import { expect, test } from "@playwright/test";

test("unknown route shows a not found page", async ({ page }) => {
  await page.goto("/this-route-does-not-exist");
  await expect(page.getByText(/not found|could not be found/i)).toBeVisible();
});
