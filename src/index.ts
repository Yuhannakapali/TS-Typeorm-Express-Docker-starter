import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import fs from "fs";
import { dbCreateConnection } from "./typeorm";

const app = express();
app.use(cors());
app.use(helmet());

try {
  const accessLogStream = fs.createWriteStream(path.join(__dirname, "../log/access.log"), {
    flags: "a",
  });
  app.use(morgan("combined", { stream: accessLogStream }));
} catch (err) {
  console.log(err);
}

app.use(morgan("combined"));

app.get("/ping", (_req: any, res: any) => {
  res.send("pong");
});

app.listen(3000, () => {
  console.log("Serer started");
});

(async () => {
  await dbCreateConnection();
})();
