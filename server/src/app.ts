import express from "express";
import database from "./config/database";
import config from "./config";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import pinoHttp from "pino-http";
import logger from "./utils/logger";

class App {
  private app: express.Application;
  private database: database;

  constructor() {
    this.app = express();
    this.database = database.getInstance();

    this.initializeMiddleware();
  }

  private initializeMiddleware(): void {
    this.app.use(cors({ origin: "http://localhost:5173", credentials: true }));
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(cookieParser());
    this.app.use(pinoHttp());
  }

  public async start(): Promise<void> {
    try {
      await database.getInstance().connect();
      logger.info("Database connection established");

      this.app.listen(config.port, () => {
        logger.info(`Server is running on port ${config.port}`);
      });
    } catch (error) {
      logger.error(error);
      process.exit(1);
    }
  }
}

export default new App();
