import axios from "axios";
const BACKEND_API_STRING = "http://localhost:2000/api/users/"

const instance = axios.create(
    {withCredentials: true}
)



export const createUser = async (user) => {
    const result = await instance.post(BACKEND_API_STRING+"create", user).catch(({response}) => {
        console.log(response.statusText);
        return response.status;
    })
    return result.data;
}

export const login = async (credentials) => {
    const result = await instance.post(BACKEND_API_STRING+"login", credentials).catch(
        ({response}) => {
            console.log(response);
            return response.status;
        }
    )
    return result.data;
}

export const jwtLogin = async () => {
    const result = await instance.post(BACKEND_API_STRING+"jwt-auth").catch((err) => {
        console.log("JWT AUTH ERROR");
    })
    return result.data
}