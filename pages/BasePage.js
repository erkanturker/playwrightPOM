class BasePage {
  constructor(page) {
    this.page = page;
    this.titleLocator = this.page.locator("h1");
  }

  async getTitleText() {
    await this.titleLocator.waitFor({ state: "visible" });
    return await this.titleLocator.textContent();
  }

  async fillText(value, locator) {
    await locator.waitFor({ state: "visible" });
    await locator.fill(value);
  }

  async clickLinkByPartialText(partialText) {
    const link = this.page.locator("div.nav>a", {
      hasText: `${partialText}`,
    });
    await link.click();
  }
}

module.exports = BasePage;
