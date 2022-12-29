import { createSlice } from "@reduxjs/toolkit";
import {jwtLoginThunk, loginThunk} from "../services/user-thunk";

const usersReducer = createSlice({
    name: 'users',
    initialState: {
        currentUser: null
    },
    reducers: {
    },
    extraReducers: {
        [loginThunk.fulfilled]:
            (state, {payload}) =>{
                state.currentUser = payload;
            },
         [jwtLoginThunk.fulfilled]:
            (state, {payload}) =>{
                state.currentUser = payload;
            },
    }
});

export default usersReducer.reducer