import {useRef} from "react";
import {login} from "../services/user-services";

const LoginScreen = () => {
    const username = useRef();
    const password = useRef();
    const handelSignup = () => {
        login({username: username.current.value, password: password.current.value}).then(()=>{})
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
