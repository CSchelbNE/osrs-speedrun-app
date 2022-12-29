import mongoose from "mongoose";
import pkg from 'validator';
const {isEmail} = pkg;
const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
            validate: [isEmail, "invalid email"]
        },
        username: {
            type: String,
            unique: true,
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
