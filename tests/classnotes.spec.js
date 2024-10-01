const { test } = require("@playwright/test");
const fs = require("fs");

/*

Day 4 

show BASEURL option in use














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
