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
