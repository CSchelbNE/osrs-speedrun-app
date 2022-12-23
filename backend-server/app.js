import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import AuthenticationController from "./auth/authentication-controller.js";

// Get a jwt secret using crypto lib
// const key = (crypto.randomBytes(64).toString());
const app = express()
dotenv.config();

const DB_CON_STR = "mongodb://localhost:27017";
mongoose.set("strictQuery", false);
mongoose.connect(DB_CON_STR).then(() => {
    console.log("DB Connection Successful");
        }).catch(err => {
    console.log("Connection failed\n Experienced Error"+err.toString());
});
app.use(express.json())
app.use(cors())
AuthenticationController(app);
app.listen(2000);