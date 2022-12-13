import {createSlice} from "@reduxjs/toolkit";
import {loginThunk, logoutThunk, profileThunk, registerThunk} from "./user-thunks";

const initialState = {
    currentUser: null,
    error: null
}

const userReducer = createSlice({
    name: 'users',
    initialState: initialState,
    extraReducers: {
        [registerThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
        },
        [registerThunk.pending]: (state, action) => {
            state.error = null;
        },
        [registerThunk.rejected]: (state, action) => {
            state.error = "Error: This user already exists, try again";
        },
        [loginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
        },
        [loginThunk.pending]: (state, action) => {
            state.error = null;
        },
        [loginThunk.rejected]: (state, action) => {
            state.error = "Error: This user does not exist, try again or register for an account";
        },
        [logoutThunk.fulfilled]: (state, action) => {
            state.currentUser = null;
        },
        [profileThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
        },
    }
})

export default userReducer.reducer;