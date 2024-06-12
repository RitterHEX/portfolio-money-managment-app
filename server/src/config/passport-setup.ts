import passport from 'passport';
import { Strategy as GoogleStrategy, VerifyCallback } from 'passport-google-oauth2';

passport.use(
    new GoogleStrategy(
        {
            clientID:     process.env.GOOGLE_AUTH_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_AUTH_SECRET!,
            callbackURL:  `http://localhost:${process.env.PORT}/auth/google/redirect`,
            passReqToCallback   : true
        },
        (accessToken : string, refreshToken: string, profile: any, done: VerifyCallback)=>{
            console.log("passport callback function fired")
            console.log("profile",profile)
        }
    )
);
