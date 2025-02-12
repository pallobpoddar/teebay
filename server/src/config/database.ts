import { Pool } from "pg";
import config from "./index";

class Database {
  private static instance: Pool;

  private constructor() {}

  public static getInstance(): Pool {
    if (!Database.instance) {
      Database.instance = new Pool({
        connectionString: config.databaseUri,
      });
    }

    return Database.instance;
  }
}

export default Database;
