import {createSlice} from "@reduxjs/toolkit";
import {followUserThunk, getFollowersByUserIDThunk, getFollowingByUserIDThunk} from "./follows-thunks";

const initialState = {
    followers: [],
    following: [],
}

const followsReducer = createSlice({
    name: 'follows',
    initialState: initialState,
    extraReducers: {
        [followUserThunk.fulfilled]: (state, action) => {
            // state.reviews.push(action.payload);
        },
        [getFollowersByUserIDThunk.fulfilled]: (state, action) => {
            state.followers = action.payload;
            console.log("Setting followers in reducer")
            console.log(state.followers)
            // console.log(state.followers)
        },
        [getFollowingByUserIDThunk.fulfilled]: (state, action) => {
            state.following = action.payload;
            console.log("Setting followed in reducer")
            console.log(state.following)
        }
    }
})

export default followsReducer.reducer;