import app from "./app";

const startServer = async () => {
  try {
    await app.start();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();
