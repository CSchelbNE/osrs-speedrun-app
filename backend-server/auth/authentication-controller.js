import {signJWTToken} from "./token-operations.js";
import {verifyToken} from "./auth-middleware.js";
import * as dao from "./authentication-dao.js";
const authenticationController = (app) => {

    const login = async (req,res) => {
        const {username, password} = req.body;
        console.log(username)
        console.log(password)
        await dao.loginWithCredentials({username, password}).then((result) => {
            const token = signJWTToken(username);
            res.cookie("token", token, {httpOnly: true});
            res.json(result);
        }).catch((err) => {
            res.statusMessage = err.message;
            return res.sendStatus(400)
        })

    }

    const createNewUser = async (req,res) => {
        const {username, password, email} = req.body;
        await dao.createNewUser({username,password, email}).then((result) => {
            console.log(result)
            const token = signJWTToken(username);
            res.cookie("token", token, {httpOnly: true});
            res.json(result);
        }).catch((err) => {
            console.log(err.message);
            res.statusMessage = err.message;
            res.sendStatus(400)
        })
    }

    const jwtTokenLogin = async (req,res) => {
        const {username} = req;
        await dao.loginWithJWT(username).then((result) => {
            res.json(result);
        })

    }
    // Verify token functions as middleware, calling next() passes the stack back to login func.
    app.post("/api/users/create", createNewUser);
    app.post("/api/users/login", login);
    app.post("/api/users/jwt-auth", verifyToken, jwtTokenLogin)

}

export default authenticationController;