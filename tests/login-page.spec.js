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
