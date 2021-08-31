import { Router } from "express";
import { authRouter } from "../../auth/router";


export const v1Router = Router();

v1Router.get("/ping", (_req, res) => {
    res.json({ status: "ok" })
})

v1Router.use("/auth", authRouter);