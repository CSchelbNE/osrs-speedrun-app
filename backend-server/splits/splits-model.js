import mongoose from "mongoose";
import splitsSchema from "./splits-schema.js"
const calculateCollectionByMonth = () => {
    const d = new Date();
    return "splits-"+d.getMonth()+"/"+d.getFullYear();
}

const SplitsModel = mongoose.model(calculateCollectionByMonth(), splitsSchema);
