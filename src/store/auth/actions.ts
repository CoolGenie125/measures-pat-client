import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerAPI, loginAPI } from "../api/auth";
import { createBrowserHistory } from "history";
import { LoginResponse } from "config/ResponseContant";
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
      console.log("response result : ", response);
      if (response.data === LoginResponse.NoExist) {
        const result = {
          status: false,
          err: "This email doesn't exist now.",
        };
        return result;
      } else if (response.data === LoginResponse.NoMatch) {
        const result = {
          status: false,
          err: "Password is not correct.",
        };
        return result;
      } else if (response.data === LoginResponse.Success) {
        localStorage.setItem("jwtToken", response.data);
        const result = {
          status: true,
          err: "",
        };
        return result;
      }
    } catch (error: any) {
      return console.log(error);
    }
  }
);

export const registerUser = async (params: FormData) => {
  try {
    console.log("register  params : ", params);
    // const response = await registerAPI(params);
    // return response.data;
  } catch (error: any) {
    return console.log("response error", error);
  }
};
