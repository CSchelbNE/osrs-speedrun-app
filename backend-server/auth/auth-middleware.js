import jwt from "jsonwebtoken";
export const verifyToken = (req,res,next) => {
    console.log(req.headers);
    const header = req.headers.authorization;
    const token = header && header.split(' ')[1]
    // http 401= unauthorized
    if (!token) return res.sendStatus(401)
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) {
            console.log(err);
            return;
        }
        req.user = user;
        next();
    })
}