const { loadAccountCredentials } = require("../utils/accountLoader");

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInputLocator = this.page.locator("#formBasicUsername");
    this.passwordInputLocator = this.page.locator("#formBasicPassword");
    this.submitButtonLocator = this.page.locator('text="Login"');
    this.titleLocator = this.page.locator("h1");
    this.accounts = loadAccountCredentials();
  }

  async loginAdmin() {
    await this.page.goto("https://comattfrontend.onrender.com/");
    await this.usernameInputLocator.fill("admin");
    await this.passwordInputLocator.fill("12345");
    await this.submitButtonLocator.click();
  }

  async getTitleText() {
    await this.titleLocator.waitFor({ state: "visible" });
    return await this.titleLocator.textContent();
  }

  async login(username, password) {
    await this.page.goto("https://comattfrontend.onrender.com/");
    await this.usernameInputLocator.fill(username);
    await this.passwordInputLocator.fill(password);
    await this.submitButtonLocator.click();
  }

  async loginByAdmin() {
    const { username, password } = this.accounts.admin;
    this.login(username, password);
  }

  async loginByTeacher() {
    const { username, password } = this.accounts.teacher;
    this.login(username, password);
  }
}

module.exports = LoginPage;
