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
            console.log("register fulfilled")
            state.currentUser = action.payload;
            console.log(state.currentUser)

        },
        [registerThunk.pending]: (state, action) => {
            state.error = null;
        },
        [registerThunk.rejected]: (state, action) => {
            state.error = "Error: This user already exists, try again";
        },
        [loginThunk.fulfilled]: (state, action) => {

        },
        [logoutThunk.fulfilled]: (state, action) => {

        },
        [profileThunk.fulfilled]: (state, action) => {

        },
    }
})

export default userReducer.reducer;