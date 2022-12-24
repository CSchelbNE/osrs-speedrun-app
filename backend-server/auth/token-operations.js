import jwt from "jsonwebtoken"
export const signJWTToken = (email) => {
    return jwt.sign({email}, process.env.TOKEN_SECRET, {expiresIn:"3200s"});
}