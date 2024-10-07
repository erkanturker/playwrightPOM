const { Client } = require("pg");

class DbHelper {
  constructor() {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error("DATABASE_URL environment variable is not defined");
    }

    this.client = new Client({ connectionString });
  }
  async connect() {
    await this.client.connect();
    console.log("Database connected");
  }

  async disconnect() {
    await this.client.end();
  }

  async getUserByUsername(username) {
    const result = await this.client.query(
      `SELECT username FROM users WHERE username =$1`,
      [username]
    );
    return result.rows[0];
  }
}

module.exports = DbHelper;
