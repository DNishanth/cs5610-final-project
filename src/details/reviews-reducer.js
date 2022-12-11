import {createSlice} from "@reduxjs/toolkit";
import {postReviewThunk, getReviewsByWorkIDThunk} from "./review-thunks";

const initialState = {
    reviews: []
}

const reviewsReducer = createSlice({
    name: 'reviews',
    initialState: initialState,
    extraReducers: {
        [postReviewThunk.fulfilled]: (state, action) => {
            state.reviews.push(action.payload);
        },
        [getReviewsByWorkIDThunk.fulfilled]: (state, action) => {
            state.reviews = action.payload;
        }
    }
})

export default reviewsReducer.reducer;