import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const pagesToScan = ["/", "/characters", "/lore", "/items", "/search"];

for (const route of pagesToScan) {
  test(`a11y critical scan: ${route}`, async ({ page }) => {
    await page.goto(route);
    const results = await new AxeBuilder({ page }).analyze();
    const criticalViolations = results.violations.filter(
      (violation) => violation.impact === "critical"
    );
    expect(criticalViolations).toEqual([]);
  });
}

for (const route of pagesToScan) {
  test(`a11y critical scan (light mode): ${route}`, async ({ page }) => {
    await page.goto(route);
    await page.evaluate(() => {
      document.documentElement.setAttribute("data-theme", "light");
    });
    // Allow repaint after theme switch
    await page.waitForTimeout(100);
    const results = await new AxeBuilder({ page }).analyze();
    const criticalViolations = results.violations.filter(
      (violation) => violation.impact === "critical"
    );
    expect(criticalViolations).toEqual([]);
  });
}
