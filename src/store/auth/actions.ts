import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerAPI, loginAPI } from "../api/auth";
import { createBrowserHistory } from "history";
export const browserHistory = createBrowserHistory();

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("jwtToken");
  return true;
});

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data: FormData) => {
    try {
      const response = await loginAPI(data);
      if (!response.data.Success) {
        return response.data;
      } else {
        localStorage.setItem("jwtToken", response.data.JwtToken);
        return response.data;
      }
    } catch (error: any) {
      return console.log(error);
    }
  }
);

export const registerUser = async (params: FormData) => {
  try {
    const response = await registerAPI(params);
    return response.data;
  } catch (error: any) {
    return console.log("response error", error);
  }
};
