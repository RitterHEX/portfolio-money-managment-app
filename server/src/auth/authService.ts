import { Request, Response } from "express";

import passport from "passport";

const postGoogleAuth = passport.authenticate('google', {
    scope: ['profile']
});

const getGoogleAuthRedirect = (req: Request<{}, {}, {}>, res: Response) => {
    res.status(301).send('redirected')
}

const postLogin = (req: Request<{}, {}, {}>, res: Response) => {
    res.send(200)
}

const postLogout = (req: Request<{}, {}, {}>, res: Response) => {
    res.send(200)
}

export {
    postGoogleAuth,
    postLogin,
    postLogout,
    getGoogleAuthRedirect
}