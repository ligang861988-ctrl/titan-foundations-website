/* Render preview screenshots of the site with Playwright.
 *
 * Usage:
 *   node scripts/preview.js
 *
 * Outputs:
 *   _preview_en.png   full-page screenshot (English)
 *   _preview_zh.png   full-page screenshot (Chinese, after toggling language)
 * and prints a short QA report (console errors, image loads, i18n applied).
 */

const path = require("path");
const fs = require("fs");

const PLAYWRIGHT = "C:/Users/administered/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright";
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";

const ROOT = path.resolve(__dirname, "..");
const URL = "file:///" + path.join(ROOT, "index.html").replace(/\\/g, "/");

async function launchBrowser(playwright) {
  try {
    return await playwright.chromium.launch({ headless: true });
  } catch (err) {
    const exe = fs.existsSync(CHROME) ? CHROME : EDGE;
    return await playwright.chromium.launch({ headless: true, executablePath: exe });
  }
}

(async () => {
  const playwright = require(PLAYWRIGHT);
  const browser = await launchBrowser(playwright);
  const results = [];

  try {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    await context.addInitScript(() => localStorage.setItem("titan-lang", "en"));
    const page = await context.newPage();

    const consoleErrors = [];
    const pageErrors = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    });
    page.on("pageerror", (err) => pageErrors.push(String(err)));

    await page.goto(URL, { waitUntil: "load" });
    await page.waitForTimeout(1200);

    // --- English QA ---
    const enTitle = await page.title();
    const h1 = await page.locator("h1").innerText();
    const heroImgLoaded = await page.locator(".hero-bg").evaluate((img) => img.complete && img.naturalWidth > 0);

    // Scroll through the whole page so lazy images and scroll-reveal elements activate.
    const totalHeight = await page.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y < totalHeight; y += 500) {
      await page.evaluate((_y) => window.scrollTo(0, _y), y);
      await page.waitForTimeout(120);
    }
    await page.waitForTimeout(800);

    const imgs = await page.$$eval("img", (els) => els.map((i) => ({ src: i.getAttribute("src"), ok: i.complete && i.naturalWidth > 0 })));
    const failedImgs = imgs.filter((i) => !i.ok);
    const revealCount = await page.locator(".reveal.visible").count();
    const revealTotal = await page.locator(".reveal").count();

    await page.screenshot({ path: path.join(ROOT, "_preview_en.png"), fullPage: true });

    // --- switch to Chinese ---
    await page.click("#langToggle");
    await page.waitForTimeout(300);
    const zhTitle = await page.title();
    const zhH1 = await page.locator("h1").innerText();
    const toggleLabel = await page.locator("#langToggle").innerText();
    await page.screenshot({ path: path.join(ROOT, "_preview_zh.png"), fullPage: true });

    // --- mobile viewport check ---
    const mobile = await context.newPage();
    await mobile.setViewportSize({ width: 390, height: 844 });
    await mobile.goto(URL, { waitUntil: "load" });
    await mobile.waitForTimeout(800);
    await mobile.screenshot({ path: path.join(ROOT, "_preview_mobile.png"), fullPage: true });
    await mobile.close();

    results.push(`title (EN): ${enTitle}`);
    results.push(`h1 (EN): ${h1.split("\n").join(" / ")}`);
    results.push(`hero image loaded: ${heroImgLoaded}`);
    results.push(`reveal elements made visible: ${revealCount}`);
    results.push(`broken images: ${failedImgs.length ? failedImgs.map((i) => i.src).join(", ") : "none"}`);
    results.push(`console errors: ${consoleErrors.length ? consoleErrors.join(" | ") : "none"}`);
    results.push(`page errors: ${pageErrors.length ? pageErrors.join(" | ") : "none"}`);
    results.push(`title (ZH): ${zhTitle}`);
    results.push(`h1 (ZH): ${zhH1.split("\n").join(" / ")}`);
    results.push(`lang toggle now shows: ${toggleLabel}`);

    await browser.close();
  } catch (err) {
    results.push(`FATAL: ${err.message}`);
    try { await browser.close(); } catch (e) { /* ignore */ }
  }

  console.log(results.join("\n"));
})().catch((err) => {
  console.error("FATAL:", err);
  process.exit(1);
});
