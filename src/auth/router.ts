import { Router } from 'express';

export const authRouter = Router();

authRouter.get("/ping", (_req, res) => {
    res.send("test");
})

authRouter.post("/login", () => {

})