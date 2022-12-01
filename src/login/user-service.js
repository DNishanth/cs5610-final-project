import axios from "axios";

// const API_BASE = process.env.API_BASE;
const API_BASE = "http://localhost:4000/api";

export const registerUser = async (user) => {
    const response = await axios.post(`${API_BASE}/register`, user);
    console.log("register useerv service");
    console.log(user);
    return response.data;
}

export const loginUser = async (user) => {
    const response = await axios.post(`${API_BASE}/login`, user);
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