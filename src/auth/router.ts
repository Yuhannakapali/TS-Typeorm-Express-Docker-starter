import express from 'express';
// import {}

export const authRouter = express.Router();

authRouter.get("/ping", (_req, res) => {
    res.send("test");
})

authRouter.post("/login", () => {

})