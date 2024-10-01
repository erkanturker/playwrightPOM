const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/LoginPage");

/*
The first show them regular way with two test
The second show them Login Method

and show login method not capable
create update login method with paramatehrezi


//show the repetive code and introduce describe

beforeEach

*/

test("Admin Should Login Normal", async ({ page }) => {
  await page.goto("https://comattfrontend.onrender.com/");
  await page.locator("#formBasicUsername").fill("admin");
  await page.locator("#formBasicPassword").fill("12345");
  await page.locator('text="Login"').click();
  //page.locator("h1").waitFor({ state: "visible" });
  await expect(page.locator("h1")).toHaveText("Dashboard");
});

test("Teacher Should Login Normal", async ({ page }) => {
  await page.goto("https://comattfrontend.onrender.com/");
  await page.locator("#formBasicUsername").fill("sbrown");
  await page.locator("#formBasicPassword").fill("12345");
  await page.locator('text="Login"').click();
  //page.locator("h1").waitFor({ state: "visible" });
  await expect(page.locator("h1")).toHaveText("Dashboard");
});

test("POM Admin Should login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.loginAdmin();

  expect(await loginPage.getTitleText()).toBe("Dashboard");
});

test("POM Teacher Should login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.loginByTeacher();

  expect(await loginPage.getTitleText()).toBe("Dashboard");
});

test.describe("Login Page", { tag: ["@smoke"] }, () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
  });

  test("POM Admin Should login", async () => {
    await loginPage.loginByAdmin();

    expect(await loginPage.getTitleText()).toBe("Dashboard");
  });

  test("POM Teacher Should login", async () => {
    await loginPage.loginByTeacher();

    expect(await loginPage.getTitleText()).toBe("Dashboard");
  });
});

function countFrequency(word) {
  const myMap = new Map();

  for (let index = 0; index < word.length; index++) {
    myMap.set(word[index], (myMap.get(word[index]) || 0) + 1);
  }
  console.log(myMap);

  for (const key of myMap.values()) {
    if (key > 1) return true;
  }

  return false;
}

test("is the array has duplicate ", () => {
  const array = "abc1231";

  console.log(countFrequency(array));
});
