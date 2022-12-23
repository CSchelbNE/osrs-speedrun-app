import {useRef} from "react";
import {createUser} from "../services/user-services";
import useAuthContext from "./auth-context-hook";

const SignupScreen = () => {
    const {setAuth} = useAuthContext();
    const username = useRef();
    const password = useRef();
    const handelSignup = () => {
        createUser({username: username.current.value, password: password.current.value}).then((res) => {
            setAuth(res.data);
        });
    }
    return (
        <div>
            Signup
            <input ref={username} placeholder={"Input your username..."}/>
            <input ref={password} placeholder={"Input your password..."}/>
            <button onClick={handelSignup}>Submit</button>
        </div>
    )
}

export default SignupScreen