import express from "express";

export const v1Router = express.Router();

v1Router.use("/", (_req, res) => {
    res.json({ status: "ok" })
})
