import {createSlice} from "@reduxjs/toolkit";
import {postReviewThunk, getReviewsByWorkIDThunk} from "./review-thunks";

const initialState = {
    reviews: [],
    error: null
}

const reviewsReducer = createSlice({
    name: 'reviews',
    initialState: initialState,
    extraReducers: {
        [postReviewThunk.fulfilled]: (state, action) => {
            state.reviews.push(action.payload);
        },
        [postReviewThunk.pending]: (state, action) => {
            state.error = null;
        },
        [postReviewThunk.rejected]: (state, action) => {
            state.error = "You must be logged in to post a review"
        },
        [getReviewsByWorkIDThunk.fulfilled]: (state, action) => {
            state.reviews = action.payload;
        }
    }
})

export default reviewsReducer.reducer;