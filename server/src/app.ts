import express from "express";
import database from "./config/database";
import config from "./config";

class App {
  private app: express.Application;
  private database: database;

  constructor() {
    this.app = express();
    this.database = database.getInstance();

    this.initializeMiddleware();
  }

  private initializeMiddleware(): void {
    this.app.use(express.json());
  }

  public async start(): Promise<void> {
    try {
      await database.getInstance().connect();
      console.log("Database connection established");

      this.app.listen(config.port, () => {
        console.log(`Server is running on port ${config.port}`);
      });
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }
}

export default new App();
