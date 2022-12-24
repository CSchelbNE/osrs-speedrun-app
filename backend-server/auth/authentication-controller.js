import {signJWTToken} from "./token-operations.js";
import {verifyToken} from "./auth-middleware.js";
import * as dao from "./authentication-dao.js";
const authenticationController = (app) => {

    const login = async (req,res) => {
        const body = req.body;
        console.log(body);
    }

    const createNewUser = async (req,res) => {
        const {username, password, email} = req.body;
        dao.createNewUser({username,password, email}).then((result) => {
            console.log(result)
            const token = signJWTToken(email);
            res.cookie("token", token, {httpOnly: true});
            res.json(result);
        }).catch((err) => {
            console.log(err.message);
            res.statusMessage = err.message;
            return res.status(400)
        })
    }
    // Verify token functions as middleware, calling next() passes the stack back to login func.
    app.post("/api/users/create", createNewUser);
    app.post("/api/users/login",verifyToken,login);

}

export default authenticationController;