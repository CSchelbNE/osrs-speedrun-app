import mongoose from "mongoose";
const userSchema = mongoose.Schema(
    {
        username: String,
        password: String
    }, {collection: "users"}
)

export default userSchema;
