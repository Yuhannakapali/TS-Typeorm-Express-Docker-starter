import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import fs from "fs";
import { dbCreateConnection } from "./database";
import { getConfig } from "./config"

const app = express();
app.use(cors());
app.use(helmet());

try {
  const accessLogStream = fs.createWriteStream(path.join(__dirname, "../log/access.log"), {
    flags: "a",
  });
  app.use(morgan("combined", { stream: accessLogStream }));
} catch (err) {
  console.log("error writing the logs", err);
}

app.use(morgan("combined"));
app.get("/", (_req, res) => {
  res.json({ status: "ok", message: "ready to rock and roll." })
})
app.get("/ping", (_req: any, res: any) => {
  res.send("pong");
});


// app.use();

const port = getConfig("port");
app.listen(port, () => {
  console.log(`server started 'http://localhost:${port}'`);
});

(async () => {
  await dbCreateConnection();
})();
