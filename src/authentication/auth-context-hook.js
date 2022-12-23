import AuthContext from "./auth-context-provider";
import {useContext} from "react";

const useAuthContext = () => {
    return useContext(AuthContext);
}

export default useAuthContext;