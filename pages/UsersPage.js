const BasePage = require("./BasePage");

class UsersPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInputLocator = this.page.locator("#username");
    this.passwordInputLocator = this.page.locator("#password");
    this.firstNameInputLocator = this.page.locator("#firstName");
    this.lastNameInputLocator = this.page.locator("#lastName");
    this.emailInputLocator = this.page.locator("#email");
    this.roleDropDownLocator = this.page.locator("#role");
    this.submitButtonLocator = this.page.locator(
      "button[data-testid='submit']"
    );
    this.alertTitleLocator = this.page.locator("div.alert-heading");
  }

  async fillCreateUserForm(user) {
    const { username, password, firstName, lastName, email, role } = user;

    await this.fillText(username, this.usernameInputLocator);
    await this.fillText(password, this.passwordInputLocator);
    await this.fillText(firstName, this.firstNameInputLocator);
    await this.fillText(lastName, this.lastNameInputLocator);
    await this.fillText(email, this.emailInputLocator);
    await this.roleDropDownLocator.selectOption({ label: `${role}` });
    await this.submitButtonLocator.click();
  }


}
module.exports = UsersPage;
