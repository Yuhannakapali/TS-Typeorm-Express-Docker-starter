import express from "express";
import { authRouter } from "../../auth/router";


export const v1Router = express.Router();

v1Router.use("/", (_req, res) => {
    res.json({ status: "ok" })
})

v1Router.use("/auth", authRouter);