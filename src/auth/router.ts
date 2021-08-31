import { Router } from 'express';
import { register } from './auth.controller';

export const authRouter = Router();

authRouter.get("/ping", (_req, res) => {
    res.send("test");
})

authRouter.post("/login", () => {

})

authRouter.post("/register", register)