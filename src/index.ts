import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { dbCreateConnection } from "./database";
import { logStream, logger } from "../config/winston.config"
import { getConfig } from "./config"
import { apiRouter } from "./api/routes";

// Todo  use compression for performance boost. 
// ! https://expressjs.com/en/advanced/best-practice-performance.html


const app = express();
app.use(cors());
app.use(helmet());

try {
  app.use(morgan(getConfig("logs.env"), { stream: logStream }));
} catch (err) {
  logger.error(`${err.message}`);
}

app.use(morgan("combined"));
app.get("/", (_req, res) => {
  res.json({ status: "ok", message: "ready to rock and roll." })
})
app.get("/ping", (_req: express.Request, res: express.Response) => {
  res.json("pong");
});


app.use(`/api`, apiRouter);

app.use("/*", (_req, res) => {
  logger.error("No route found");
  return res.status(404).json({
    error: "no route found",
  });
});
app.use((err: any, _req: any, res: any) => {
  logger.error(`${err.message}`);
  return res.status(err.status || 500).json({
    error: err.message,
  });
});

const port = getConfig("port");
app.listen(port, () => {
  logger.info(`server started 'http://localhost:${port}'`);
});

(async () => {
  await dbCreateConnection();
})();
