import {createSlice} from "@reduxjs/toolkit";
import {postPostThunk, getPostsByWorkIDThunk, getPostsByUserIDThunk, deletePostThunk} from "./post-thunks";

const initialState = {
    posts: [],
    user_posts: [],
    error: null
}

const postsReducer = createSlice({
    name: 'posts',
    initialState: initialState,
    extraReducers: {
        [postPostThunk.fulfilled]: (state, action) => {
            // state.posts.push(action.payload);
        },
        [postPostThunk.pending]: (state, action) => {
            state.error = null;
        },
        [postPostThunk.rejected]: (state, action) => {
            state.error = "You must be logged in to create a discussion post"
        },
        [getPostsByWorkIDThunk.fulfilled]: (state, action) => {
            state.posts = action.payload;
            console.log(state.posts)
        },
        [getPostsByUserIDThunk.fulfilled]: (state, action) => {
            state.user_posts = action.payload;
        },
        [deletePostThunk.fulfilled]: (state, action) => {
            state.posts = state.posts.filter(post => post._id !== action.payload);
        },
    }
})

export default postsReducer.reducer;