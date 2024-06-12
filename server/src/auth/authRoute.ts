import express, { Router, Request, Response } from "express";
import { postGoogleAuth, postLogin, postLogout,getGoogleAuthRedirect } from "./authService.js";
import passport from "passport";


export const authRouter: Router = express.Router();


authRouter.get('/google', postGoogleAuth)
authRouter.get('/google/redirect', passport.authenticate('google'), getGoogleAuthRedirect)
authRouter.get('/login', postLogin)
authRouter.get('/logout', postLogout)