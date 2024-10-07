const { test, expect } = require("../fixtures/usePageObjects");

test(
  "admin dashboard test",
  { tag: ["@fixture"] },
  async ({ loginByAdmin }) => {
    // You are already logged in as admin
    expect(await loginByAdmin.getTitleText()).toBe("Dashboard");
    // Perform admin-related assertions
  }
);

test("teacher dashboard test", async ({ loginByTeacher }) => {
  // You are already logged in as teacher
  expect(await loginByAdmin.getTitleText()).toBe("Dashboard");
  // Perform teacher-related assertions
});


