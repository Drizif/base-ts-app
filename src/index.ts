import express from "express";
import env from "./config/env";
import Routes from "./routes/index.routes";
import { dbConnection } from "./database/connection";

const { port, tz } = env.server;

dbConnection(tz);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(Routes);
app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
