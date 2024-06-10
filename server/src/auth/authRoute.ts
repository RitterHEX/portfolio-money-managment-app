import express, { Router, Request, Response } from "express";
import { postUsername } from "./authService.js";


export const authRouter: Router = express.Router();

authRouter.get('/', (req:Request, res: Response)=>{
    console.log("test")
    res.send("t")
})

authRouter.post('/username', postUsername)