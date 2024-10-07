const BasePage = require("./BasePage");

class Dashboard extends BasePage {
  constructor(page) {
    super(page);
    this.teachersStatCardLocator = this.page
      .locator(".flex-column")
      .filter({ hasText: "Teachers" });
    this.studentsStatCardLocator = this.page
      .locator(".flex-column.col-6")
      .filter({ hasText: "Students" });
  }
}

module.exports = Dashboard;
