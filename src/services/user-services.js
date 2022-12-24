import axios from "axios";
const BACKEND_API_STRING = "http://localhost:2000/api/users/"

const instance = axios.create(
    {withCredentials: true}
)


export const createUser = async (user) => {
    const result = await instance.post(BACKEND_API_STRING+"create", user).catch((err) => {})
    return result;
}

export const login = async ({username, password}) => {
    const result = await instance.post(BACKEND_API_STRING+"login", {username: username, password:password})
    return result.data;
}