import {signJWTToken} from "./token-operations.js";
import {verifyToken} from "./auth-middleware.js";
const authenticationController = (app) => {

    const login = async (req,res) => {
        const body = req.body;
        console.log("LOGGED IN");
    }

    const createNewUser = async (req,res) => {
        const {username} = req.body;
        const token = signJWTToken(username);
        res.json(token);
    }
    // Verify token functions as middleware, calling next() passes the stack back to login func.
    app.post("/api/users/create", createNewUser);
    app.post("/api/users/login",verifyToken,login);

}

export default authenticationController;