import express from "express";
import "dotenv/config";

import App from "./services/App";
import dbConnection from "./services/Database";
import { port } from "./config";

const StartServer = async () => {
  const app = express();

  await dbConnection();

  await App(app);

  app.listen(port, () => {
    console.log(`Listening to port 8000 ${port}`);
  });
};

StartServer();
