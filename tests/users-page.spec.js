const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/LoginPage");
const UsersPage = require("../pages/UsersPage");
const DbHelper = require("../helpers/DbHelper");

test.describe.serial("Users Page", { tag: ["@regression"] }, () => {
  let loginPage;
  let usersPage;
  const dbHelper = new DbHelper();

  let user = {
    username: "testuser",
    password: "12345",
    firstName: "testFirstname",
    lastName: "firtLastname",
    email: "test@gmail.com",
    role: "Teacher",
  };
  test.beforeAll(async () => {
    await dbHelper.connect();
  });

  test.afterAll(async () => {
    await dbHelper.disconnect();
  });

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    usersPage = new UsersPage(page);
    await loginPage.loginByAdmin();
  });

  test("admin verify in userpage", async () => {
    await usersPage.clickLinkByPartialText("Users");
    const actualTitleText = await usersPage.getTitleText();
    expect(actualTitleText).toBe("Users");
  });

  test("admin can create user", async () => {
    await usersPage.clickLinkByPartialText("Users");

    await usersPage.fillCreateUserForm(user);

    const alertText = await usersPage.alertTitleLocator.textContent();
    await usersPage.alertTitleLocator.screenshot({
      path: "test-results/title.png",
    });

    expect(alertText).toBe("Success");

    const { username: actualUsername } = await dbHelper.getUserByUsername(
      user.username
    );
    expect(actualUsername).toBe(user.username);
  });

  test("remove user", async ({ page }) => {
    await usersPage.clickLinkByPartialText("Users");

    const deleteButton = await page
      .locator("tr", { hasText: "testuser" })
      .locator("button.btn-danger");

    // Click the Delete button
    await deleteButton.click();
    const alertText = await usersPage.alertTitleLocator.textContent();
    await usersPage.alertTitleLocator.screenshot({
      path: "test-results/title.png",
    });
    expect(alertText).toBe("Info");
  });
});
