import { Request, Response } from "express";

import passport from "passport";
import LocalStrategy from "passport-local"

const postUsername = (req: Request, res: Response) => {
    res.send("success")
}

export {
    postUsername
}