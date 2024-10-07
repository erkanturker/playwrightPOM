const { loadAccountCredentials } = require("../utils/accountLoader");
const BasePage = require("./BasePage");

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInputLocator = this.page.locator("#formBasicUsername");
    this.passwordInputLocator = this.page.locator("#formBasicPassword");
    this.submitButtonLocator = this.page.locator('text="Login"');
    this.accounts = loadAccountCredentials();
  }

  async loginAdmin() {
    await this.page.goto("https://comattfrontend.onrender.com/");
    await this.usernameInputLocator.fill("admin");
    await this.passwordInputLocator.fill("12345");
    await this.submitButtonLocator.click();
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
