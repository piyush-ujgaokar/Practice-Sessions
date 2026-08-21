import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../config/axiosInstance";
import { toast } from "react-toastify";

export const loginUserAction = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      console.log("Thunk Action Triggered");

      const res = await axiosInstance.post("/auth/login", credentials);
      localStorage.setItem("accessToken", res.data.accessToken);
      toast.success("User Login Successfully");
      return res.data;
    } catch (err) {
      toast.error("Login Failed");
      return thunkApi.rejectWithValue("Login Failed");
    }
  },
);

export const hydrateUserAction = createAsyncThunk(
  "auth/hydrate",
  async (_, thunkApi) => {
    let token = localStorage.getItem("accessToken");
    try {
      let res = await axiosInstance.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
        toast.error("Unauthorized User")
      return thunkApi.rejectWithValue("Unauthorized User")
    }
  },
);
