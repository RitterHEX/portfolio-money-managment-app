import "dotenv/config";
import express, { Express, Request, Response, NextFunction } from "express";
import { setUpRouters } from "./routes.js";
import mongoose from "mongoose";
import './config/passport-setup.ts';
import cookieSession from 'cookie-session';
import passport from "passport";

const app: Express = express();

app.use(express.json())
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys:[process.env.COOKIE_SECRET!]
}))

app.use(passport.initialize());
app.use(passport.session())

mongoose.connect(process.env.MONGODB_URI!)
console.log("connected to mongo")

setUpRouters(app)

app.listen(process.env.PORT, ()=>{
    console.log("Running on ", process.env.PORT)
})