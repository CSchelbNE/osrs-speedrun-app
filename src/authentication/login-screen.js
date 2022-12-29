import {useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import {loginThunk} from "../services/user-thunk";

const LoginScreen = () => {
    const dispatch = useDispatch();
    const username = useRef();
    const password = useRef();
    const handelSignup = () => {
        dispatch(loginThunk({username: username.current.value, password: password.current.value}))
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
