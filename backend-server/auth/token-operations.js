import jwt from "jsonwebtoken"
export const signJWTToken = (username) => {
    return jwt.sign({username}, process.env.TOKEN_SECRET, {expiresIn:"3200s"});
}