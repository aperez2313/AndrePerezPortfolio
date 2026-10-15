import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import { fileURLToPath } from 'url';
import path from 'path';
const here = path.dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
for (const d of ['a','b','c','d']) {
  for (const [name, w] of [['desktop',1280],['phone',375]]) {
    const page = await browser.newPage({ viewport: { width: w, height: 900 }, deviceScaleFactor: 1 });
    await page.goto('file://' + path.join(here, `direction-${d}.html`));
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(800);
    await page.screenshot({ path: path.join(here, 'shots', `direction-${d}-${name}.png`), fullPage: true });
    await page.close();
  }
}
await browser.close();
console.log('done');
