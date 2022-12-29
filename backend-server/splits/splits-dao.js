import {SplitsModel} from "./splits-model.js"

export const createSplitsDocument = async (splits) => {
    return await SplitsModel.create(splits);
}