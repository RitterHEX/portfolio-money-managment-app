import { authRouter } from "./auth/authRoute.js";
import { Express } from "express";

export const setUpRouters = (app: Express) => {
    app.use("/auth", authRouter)
}