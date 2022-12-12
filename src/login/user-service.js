import axios from "axios";

// const API_BASE = process.env.API_BASE;
const API_BASE = "http://localhost:4000/api";
const credentialAPI = axios.create({withCredentials: true});

export const registerUser = async (user) => {
    const response = await credentialAPI.post(`${API_BASE}/register`, user);
    return response.data;
}

export const loginUser = async (userCred) => {
    const response = await axios.post(`${API_BASE}/login`, userCred);
    return response.data;
}

export const logoutUser = async (user) => {
    const response = await axios.post(`${API_BASE}/login`, user);
    return response.data;
}

export const getProfile = async () => {
    const response = await axios.get(`${API_BASE}/profile`);
    return response.data;
}