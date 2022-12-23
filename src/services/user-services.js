import axios from "axios";
const BACKEND_API_STRING = "http://localhost:2000/api/users/"


export const createUser = async (user) => {
    const result = await axios.post(BACKEND_API_STRING+"create", user);
    document.cookie = `token=${result.data}`
    return result;
}

export const login = async ({username, password, token}) => {
    const config = {
        headers: {
            Authorization : "Bearer " + token
        }
    }
    const result = await axios.post(BACKEND_API_STRING+"login", {username: username, password:password}, config)
    return result.data;
}