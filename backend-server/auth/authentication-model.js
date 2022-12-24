import mongoose from "mongoose";
import userSchema from "./authenthication-schema.js";

export const UserModel = mongoose.model("user",userSchema, "users");