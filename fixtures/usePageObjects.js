import UsersPage from "../pages/UsersPage";

const { test: base, expect } = require("@playwright/test");
const LoginPage = require("../pages/LoginPage");

const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  loginByAdmin: async ({ loginPage }, use) => {
    // Log in as admin
    await loginPage.loginAdmin();
    await use(loginPage);
  },

  loginByTeacher: async ({ loginPage }, use) => {
    // Log in as teacher
    await loginPage.loginTeacher();
    await use(loginPage);
  },

  usersPage: async ({ page }, use) => {
    const usersPage = new UsersPage(page);
    await use(usersPage);
  },
  navitagateUsersPage: async ({ page, loginByAdmin }, use) => {
    const usersPage = new UsersPage(page);

    // Ensure that we are logged in as admin before navigating
    await loginByAdmin; // Call the loginByAdmin fixture

    // Navigate to Users page automatically when fixture is used
    await usersPage.clickLinkByPartialText("Users");
    await use(usersPage); // Pass the usersPage instance
  },
});

export { expect } from "@playwright/test";

module.exports = { test, expect };
