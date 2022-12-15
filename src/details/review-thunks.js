import {createAsyncThunk} from "@reduxjs/toolkit";
import {postReview, getReviewsByWorkID, getReviewsByUserID} from "./review-service";

export const postReviewThunk = createAsyncThunk('postReview',
    async (review) => await postReview(review));

export const getReviewsByWorkIDThunk = createAsyncThunk('getReviewsByWorkID',
    async (workID) => await getReviewsByWorkID(workID));

export const getReviewsByUserIDThunk = createAsyncThunk('getReviewsByUserID',
    async (userID) => await getReviewsByUserID(userID));