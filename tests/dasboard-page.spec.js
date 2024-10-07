const { test } = require("@playwright/test");
const { waitForSpecificResponse } = require("../utils/api");

const LoginPage = require("../pages/LoginPage");
const Dashboard = require("../pages/DashboardPage");

test("dashboard  Test", { tag: ["@dashboard"] }, async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new Dashboard(page);
  await loginPage.loginByAdmin();

  await waitForSpecificResponse(page, "users");
  await waitForSpecificResponse(page, "students");

  const text = await dashboardPage.teachersStatCardLocator.textContent();
  const text2 = await dashboardPage.studentsStatCardLocator.textContent();

  console.log(text);
  console.log(text2);
});

test("Mock dashboard  Test", { tag: ["@mock"] }, async ({ page }) => {
  const mockUsersData = [
    {
      username: "admin",
      firstName: "admin",
      lastName: "test",
      email: "admin@gmail.com",
      role: "admin",
    },
    {
      username: "jsmith",
      firstName: "John",
      lastName: "Smith",
      email: "jsmith@example.com",
      role: "teacher",
    },
    {
      username: "ejohnson",
      firstName: "Emily",
      lastName: "Johnson",
      email: "ejohnson@example.com",
      role: "teacher",
    },
  ];

  await page.route(`${process.env.API_URL}/users`, async (route) => {
    route.fulfill({
      status: 200,
      body: JSON.stringify(mockUsersData),
    });
  });

  const loginPage = new LoginPage(page);
  const dashboardPage = new Dashboard(page);
  await loginPage.loginByAdmin();

  await waitForSpecificResponse(page, "users");
  //await waitForSpecificResponse(page, "students");

  const text = await dashboardPage.teachersStatCardLocator.textContent();
  //const text2 = await dashboardPage.studentsStatCardLocator.textContent();

  console.log(text);
  //console.log(text2);
});
