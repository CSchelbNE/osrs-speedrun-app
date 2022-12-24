import jwt from "jsonwebtoken";
export const verifyToken = (req,res,next) => {
    // const header = req.headers.authorization;
    // const token = header && header.split(' ')[1]
    const {token} = req.cookies;
    // const token = req.cookie.token;
    // http 401= unauthorized
    if (!token) return res.sendStatus(401)
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(user);
        req.user = user;
        next();
    })
}