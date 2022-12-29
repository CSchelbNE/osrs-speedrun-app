import mongoose from "mongoose";
import userSchema from "./authenthication-schema.js";

export const UserModel =
    mongoose.model("User",userSchema, "users");