import {createAsyncThunk} from "@reduxjs/toolkit";
import {registerUser, loginUser, logoutUser, getProfile} from "./user-service";

export const registerThunk = createAsyncThunk('registerUser',
    (user) => registerUser(user));

export const loginThunk = createAsyncThunk('loginUser',
    (userCred) => loginUser(userCred));

export const logoutThunk = createAsyncThunk('logoutUser',
    () => logoutUser());

export const profileThunk = createAsyncThunk('getProfile',
    () => getProfile());