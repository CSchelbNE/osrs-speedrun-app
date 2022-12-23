import jwt from "jsonwebtoken"
export const signJWTToken = (username) => {
    return jwt.sign({name:username}, process.env.TOKEN_SECRET);
}