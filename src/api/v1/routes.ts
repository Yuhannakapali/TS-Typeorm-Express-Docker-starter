import express from "express";
import { authRouter } from "../../auth/router";


export const v1Router = express.Router();

v1Router.get("/ping", (_req: express.Request, res: express.Response) => {
    res.json({ status: "ok" })
})

v1Router.use("/auth", authRouter);