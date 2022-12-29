import mongoose from "mongoose";

const calculateCollectionByMonth = () => {
    const d = new Date();
    return "splits-"+d.getMonth()+"/"+d.getFullYear();
}
const splitsSchema = mongoose.Schema(
    {
        contentType: {type: String, required: true},
        userId: {type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "User"}
        splits: {type: mongoose.Schema.Types.Mixed}
    }, {collection: calculateCollectionByMonth()}
)

export default splitsSchema;
