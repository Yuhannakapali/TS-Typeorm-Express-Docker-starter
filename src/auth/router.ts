import express from 'express';

export const authRouter = express.Router();

authRouter.get("/ping", (_req, res) => {
    res.send("test");
})