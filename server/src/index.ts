import express, { Express, Request, Response } from "express";
import dotenv from "dotenv"

dotenv.config();

const app: Express = express();
    // "dev": "npx tsx ./src/index.ts",

app.get("/", (req: Request, res: Response) => {
    res.send("hello")
})

app.listen(process.env.PORT, ()=>{
    console.log("Running on ", process.env.PORT)
})