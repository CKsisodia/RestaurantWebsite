import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiUserService } from "../services/apiUserServices";

export const signUpUserAction = createAsyncThunk(
  "signUpUserAction",
  async (credentials) => {
    const response = await apiUserService.signUp(credentials);
    return response;
  }
);

export const logInUserAction = createAsyncThunk(
  "logInUserAction",
  async (credentials,thunkApi) => {
    const response = await apiUserService.logIn(credentials);
    // setTimeout(() => {
    //   thunkApi.dispatch(getUserDataAction());
    // }, 1000);
    return response;
  }
);

export const forgotPasswordAction = createAsyncThunk(
  "forgotPasswordAction",
  async (credentials) => {
    const response = await apiUserService.forgotPassword(credentials);
    return response;
  }
);

export const getUserDataAction = createAsyncThunk(
  "getUserDataAction",
  async () => {
    console.log("1")
    const response = await apiUserService.getUserData();
    return response.users[0];
  }
);

export const updateUserProfileAction = createAsyncThunk(
  "updateUserProfileAction",
  async (credentials) => {
    console.log("2", credentials);
    const response = await apiUserService.updateUserProfile(credentials);
    console.log("5", response);
    return response;
  }
);
