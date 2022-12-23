import mongoose from "mongoose";
import userSchema from "./authenthication-schema.js";

const userModel = mongoose.model("user",userSchema, "users");
export default userModel;