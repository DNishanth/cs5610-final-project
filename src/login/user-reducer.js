import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentUser: null
}

const userReducer = createSlice({
    name: 'users',
    initialState: initialState,
    extraReducers: {
        [registerThunk.fulfilled]: (state, action) => {

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