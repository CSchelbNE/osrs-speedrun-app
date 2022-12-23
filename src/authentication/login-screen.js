import {useRef} from "react";
import {login} from "../services/user-services";
import useAuthContext from "./auth-context-hook";

const LoginScreen = () => {
    const username = useRef();
    const password = useRef();
    const {auth} = useAuthContext();
    const handelSignup = () => {
        console.log(auth);
        login({username: username.current.value, password: password.current.value, token: auth}).then((res) => {
        });
    }
    return (
        <div>
            login
            <input ref={username} placeholder={"Input your username..."}/>
            <input ref={password} placeholder={"Input your password..."}/>
            <button onClick={handelSignup}>Submit</button>
        </div>
    )
}

export default LoginScreen;
