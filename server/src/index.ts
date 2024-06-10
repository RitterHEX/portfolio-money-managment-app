import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv"
import { setUpRouters } from "./routes.js";


dotenv.config();

const app: Express = express();
app.use(express.json())

setUpRouters(app)

app.listen(process.env.PORT, ()=>{
    console.log("Running on ", process.env.PORT)
})