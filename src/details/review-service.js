import axios from "axios";

const REVIEW_API_BASE = "http://localhost:4000/api/reviews";
const BOOK_REVIEWS_API_BASE = "http://localhost:4000/api/books";
const credentialAPI = axios.create({withCredentials: true});

export const postReview = async (review) => {
    const response = await credentialAPI.post(`${REVIEW_API_BASE}`, review);
    console.log(response);
    return response.data;
}

export const getReviewsByWorkID = async (workID) => {
    const response = await axios.get(`${BOOK_REVIEWS_API_BASE}/${workID}/reviews`);
    console.log(response);
    return response.data;
}