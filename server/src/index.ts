import "dotenv/config";
import express, { Express, Request, Response, NextFunction } from "express";
import { setUpRouters } from "./routes.js";
import './config/passport-setup.ts';

const app: Express = express();

app.use(express.json())

setUpRouters(app)

app.listen(process.env.PORT, ()=>{
    console.log("Running on ", process.env.PORT)
})