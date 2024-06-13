import passport from 'passport';
import { Strategy as GoogleStrategy, VerifyCallback } from 'passport-google-oauth2';
import { User } from '../models/user-model.js';

passport.serializeUser((user:any, done) => {
    done(null, user.id)
});

passport.deserializeUser((id:string, done) => {
    User.findById(id).then((user:any)=>{
        done(null, user.id)
    })
});

passport.use(
    new GoogleStrategy(
        {
            clientID:     process.env.GOOGLE_AUTH_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_AUTH_SECRET!,
            callbackURL:  `http://localhost:${process.env.PORT}/auth/google/redirect`,
            passReqToCallback   : true
        },
        (   req: any,
            accessToken: string,
            refreshToken: string,
            profile: any,
            done: VerifyCallback
        ) => {
            User.findOne({googleId: profile.id}).then((currentUser)=>{
                console.log("test")
                if(currentUser){
                    console.log("user is: ", currentUser)
                    done(null, currentUser)
                }
                else{
                    new User({
                        username:profile["displayName"],
                        googleId:profile["id"]
                    })
                    .save().then((newUser)=>{
                        console.log("User Created:" + newUser)
                        done(null, currentUser)
                    })
                }
            }).catch(err=>{
                console.log("error: ", err)
            }
            )
        }
    )
);
