import puppeteer from "puppeteer";
import chromium from "chrome-aws-lambda";

export async function bot() {
    const browser = await chromium.puppeteer.launch({
        args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
        headless: true,
        ignoreHTTPSErrors: true,
    });
    const page = await browser.newPage();
    await page.goto("https://www.youtube.com/", { waituntil: "networkidle2" });
    console.log("everything is ok");
    await browser.close();
}
