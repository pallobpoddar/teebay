import express from "express";
import config from "./config";
import cors from "cors";
import helmet from "helmet";
import logger from "./utils/logger";
import prisma from "./config/prismaClient";
import http from "http";
import { ApolloServer } from "@apollo/server";
import typeDefs from "./modules/graphql/typeDefs";
import resolvers from "./modules/graphql/resolvers";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";

interface MyContext {
  token?: String;
}

class App {
  private app: express.Application;
  private httpServer: http.Server;
  private apolloServer: ApolloServer;

  constructor() {
    this.app = express();
    this.httpServer = http.createServer(this.app);
    this.apolloServer = new ApolloServer<MyContext>({
      typeDefs,
      resolvers,
      plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer: this.httpServer }),
      ],
    });

    this.initializeMiddleware();
  }

  private async initializeMiddleware(): Promise<void> {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.json());
    await this.apolloServer.start();
    this.app.use(
      "/graphql",
      expressMiddleware(this.apolloServer, {
        context: async ({ req }) => ({ token: req.headers.token }),
      })
    );
  }

  public async start(): Promise<void> {
    try {
      await prisma.$connect();
      logger.info("Database connection established");

      this.httpServer.listen(config.port, () => {
        logger.info(`Server is running on port ${config.port}`);
      });
    } catch (error) {
      logger.error(error);
      process.exit(1);
    }
  }
}

export default new App();
