import {createAsyncThunk} from "@reduxjs/toolkit";
import {createUser, jwtLogin, login} from "./user-services";



export const createNewUserThunk = createAsyncThunk(
    "users/login", async (user) => {
        return await createUser(user)
    }
)

export const loginThunk = createAsyncThunk(
    "users/login", async (credentials) => {
        return await login(credentials)
    }
)

export const jwtLoginThunk = createAsyncThunk(
    "users/jwtLogin", async () => {
        return await jwtLogin()
    }
)


