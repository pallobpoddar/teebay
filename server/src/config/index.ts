import dotenv from "dotenv";

class Config {
  public readonly port: number;
  public readonly databaseUri: string;

  constructor() {
    dotenv.config();
    this.port = Number(process.env.PORT) || 3000;
    this.databaseUri = process.env.DATABASE_URI || "";
  }
}

export default new Config();
