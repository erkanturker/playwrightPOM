// admin-user-tests.js
const { test, expect } = require("../fixtures/usePageObjects");

test.beforeEach(async ({ loginByAdmin, usersPage }) => {
  // Perform admin login and navigate to Users page
  await usersPage.clickLinkByPartialText("Users");
});

test(
  "admin can verify Users page",
  { tag: ["@navigateUsers"] },
  async ({ usersPage }) => {
    // Verify that the Users Page title is displayed correctly
    const actualTitleText = await usersPage.getTitleText();
    expect(actualTitleText).toBe("Users");
  }
);
