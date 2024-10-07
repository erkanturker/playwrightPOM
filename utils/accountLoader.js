const fs = require("fs");

function loadAccountCredentials() {
  const env = process.env.ENV;
  const rawAccountData = fs.readFileSync("./auth/accounts.json");
  const accountData = JSON.parse(rawAccountData);
  return accountData[env];
}

module.exports = { loadAccountCredentials };

