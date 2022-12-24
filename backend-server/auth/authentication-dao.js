import {UserModel} from "./authentication-model.js";
import crypto from "crypto";

function UserException(message) {
    this.message = message;
    this.name = 'UserException';
}

const createHashedPassword = (password) => {
    const salt = crypto.randomBytes(16).toString('hex');
    // password to be hashed, salt, iterations, key len, the msg digest
    const hashedPassword = crypto.pbkdf2Sync(password, salt, 1024, 64,
        "sha512").toString("hex")
    return {hashedPassword, salt};
}

const verifyUserPassword = (password) => {
    const hashedPassword = crypto.pbkdf2Sync(password, this.salt, 1024, 64,
        "sha512").toString("hex");
    return this.password === hashedPassword;
}
export const createNewUser = async (credentials) => {
    const {username, password, email} = credentials;
    const result = await UserModel.findOne({email: email});
    console.log("createNewUser filter results: "+result);

    if (!result){
        const {hashedPassword, salt} = createHashedPassword(password);
        const newUser = {password: hashedPassword, salt: salt, username: username, email: email};
        return await UserModel.create(newUser);
    } else {
        throw new UserException("User's email already exists");
    }
}