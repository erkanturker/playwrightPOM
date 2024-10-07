const { test } = require("@playwright/test");
const fs = require("fs");

/*

day 7
keep contiune fixture
.github/workflows/ playwright.yml

github action

create folder 

day 6 keep contonie mock api 

letst make the following utils and wait

  async function waitForSpecificResponse(page, endpoint, method = "GET") {
  return await page.waitForResponse(
    (response) =>
      response.url() === `${process.env.API_URL}${endpoint}` &&
      response.request().method() === method
  );
}

module.exports = { waitForSpecificResponse };


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

  await page.route(`${process.env.BASEURL}/users`, async (route) => {
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

show basic fixure


import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);
});

const { test, expect, chromium } = require('@playwright/test');

test('basic test without page fixture', async () => {
  // Launch browser
  const browser = await chromium.launch();
  
  // Create a new browser context
  const context = await browser.newContext();
  
  // Create a new page
  const page = await context.newPage();
  
  // Navigate to the URL
  await page.goto('https://playwright.dev/');

  // Assert the page title
  await expect(page).toHaveTitle(/Playwright/);

  // Close the browser after the test
  await browser.close();
});

show login fixture

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

  //after create userspage

    usersPage: async ({ page }, use) => {
    const usersPage = new UsersPage(page);
    await use(usersPage);
  },

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



we can combine all the acction

 navitagateUsersPage: async ({ page, loginByAdmin }, use) => {
    const usersPage = new UsersPage(page);

    // Ensure that we are logged in as admin before navigating
    await loginByAdmin; // Call the loginByAdmin fixture

    // Navigate to Users page automatically when fixture is used
    await usersPage.clickLinkByPartialText("Users");
    await use(usersPage); // Pass the usersPage instance
  },

  // admin-user-tests.js
const { test, expect } = require("../fixtures/usePageObjects");

test("Dashbard Verify",{tag:["@navigateUsers"]}, async ({ navitagateUsersPage }) => {
  const actualTitleText = await navitagateUsersPage.getTitleText();
  expect(actualTitleText).toBe("Users");
});










day 5 complete day 4 code 

---mocking api

create Test to show
how our test is flaky without waiting it

test("dashboard mock Test", { tag: ["@dashboard"] }, async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new Dashboard(page);
  await loginPage.loginByAdmin();

  
  const text = await dashboardPage.teachersStatCardLocator.textContent();
  const text2 = await dashboardPage.studentsStatCardLocator.textContent();

  console.log(text);
  console.log(text2);
});

lets make that in utils show the following and make that one in utils

  // Wait for the response from the specific endpoint
  const response = await page.waitForResponse(
    (response) =>
      response.url() === "https://comatt.onrender.com/users" &&
      response.request().method() === "GET"
  );

  const response1 = await page.waitForResponse(
    (response) =>
      response.url() === "https://comatt.onrender.com/students" &&
      response.request().method() === "GET"
  );

  letst make the following utils and wait

  async function waitForSpecificResponse(page, endpoint, method = "GET") {
  return await page.waitForResponse(
    (response) =>
      response.url() === `${process.env.API_URL}${endpoint}` &&
      response.request().method() === method
  );
}

module.exports = { waitForSpecificResponse };


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



Day 4 

show BASEURL option in use

lets add our project to git
git init
git add .
git commit -m "Initial commit"

Create a Git repository on GitHub (or any other Git hosting platform)
Go to your GitHub account.
Create a new repository, and copy the repository URL (e.g., https://github.com/username/repo.git).
5. Add the remote repository
Now, link your local repository to the remote one:


git remote add origin https://github.com/erkanturker/playwrightPOM.git
git branch -M main
git push -u origin main


Create Users Page
verify title and demo the code duplication

 this.titleLocator = this.page.locator("h1");

   async getTitleText() {
    await this.titleLocator.waitFor({ state: "visible" });
    return await this.titleLocator.textContent();
  }

    test("admin verify in userpage", async () => {
    await usersPage.clickLinkByPartialText("Users");
    const actualTitleText = await usersPage.getTitleText();
    expect(actualTitleText).toBe("Users");
  });


create base page

class BasePage {
  constructor(page) {
    this.page = page;
    this.titleLocator = this.page.locator("h1");
  }

  async getTitleText() {
    await this.titleLocator.waitFor({ state: "visible" });
    return await this.titleLocator.textContent();
  }
}

class LoginPage extends BasePage {
  constructor(page) {
    super(page);


class Users Page extends BasePage {
  constructor(page) {
    super(page);




remove common ones to others


create Users 

delete users


install pg










install  npm install dotenv --save-dev
create env folder -> add .env.local .env.development
asign base url

dotenv.config({ path: `./env/env.${process.env.ENV}` });

test("should read env variables", { tag: ["@OMG"] }, async () => {
  console.log(process.env.URL);
});

change env variables $env:ENV="local" PC or export ENV="local"

ENV=development npx playwright test --grep=@OMG


//create auth/folder ad accounts

const fs = require("fs");

test("should read accounts username", { tag: ["@OMG"] }, async () => {
  const rawData = fs.readFileSync("./auth/accounts.json");
  const accounts = JSON.parse(rawData);
  console.log(accounts[process.env.ENV].admin);
});

//lets make loadAccount info function in utils/accountLoader.js

const fs = require("fs");

function loadAccountCredentials() {
  const env = process.env.ENV;
  const rawAccountData = fs.readFileSync("./auth/accounts.json");
  const accountData = JSON.parse(rawAccountData);
  return accountData[env];
}



module.exports = { loadAccountCredentials };


after that apply to login screen


class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInputLocator = this.page.locator("#formBasicUsername");
    this.passwordInputLocator = this.page.locator("#formBasicPassword");
    this.submitButtonLocator = this.page.locator('text="Login"');
    this.titleLocator = this.page.locator("h1");
    this.accounts = loadAccountCredentials();
  }

  async loginByAdmin() {
    const { username, password } = this.accounts.admin;
    this.login(username, password);
  }



*/

test("should read env variables", { tag: ["@OMG"] }, async () => {
  console.log(process.env.URL);
});

test("should read accounts username", { tag: ["@OMG"] }, async () => {
  const rawData = fs.readFileSync("./auth/accounts.json");
  const accounts = JSON.parse(rawData);
  console.log(accounts[process.env.ENV].admin);
});
