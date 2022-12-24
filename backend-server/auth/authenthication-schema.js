import mongoose from "mongoose";
import crypto from "crypto";
import pkg from 'validator';
const {isEmail} = pkg;
const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            validate: [isEmail, "invalid email"]
        },
        username: {
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        salt: {
            type: String
        }
    }, {collection: "users"}
)


export default userSchema;
