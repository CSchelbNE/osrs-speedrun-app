import {useRef} from "react";
import {createUser} from "../services/user-services";

const SignupScreen = () => {
    const username = useRef();
    const password = useRef();
    const handelSignup = () => {
        createUser({username: username.current.value, password: password.current.value, email: "Chris.schelb@hotmail.com"}).then((res) => {
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