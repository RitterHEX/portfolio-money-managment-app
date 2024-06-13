import mongoose, { Schema } from 'mongoose';

const userScehma = new Schema({
    username: String,
    googleId: String,
})

export const User = mongoose.model('user', userScehma)