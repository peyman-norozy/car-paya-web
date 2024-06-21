"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { getCookie } from "cookies-next";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import { API_PATHS } from "@/configs/routes.config";

let initialState = {
  loading: false,
  user: null,
  error: null,
  auth: false,
};
export const loginUser = createAsyncThunk(
  "user/getOtp",
  async (userCredentials, { rejectWithValue }) => {
    try {
      initialState = {
        loading: false,
        user: null,
        error: null,
        auth: false,
      };
      console.log(getCookie("Authorization"));
      const response = await fetch(
        process.env.BASE_API + "/user-panel" + API_PATHS.COUPONS,
        {
          method: "GET",
          cache: "no-store",
          next: { revalidate: 1600 },
          headers: {
            Authorization:
              "Bearer " +
              (getCookie("Authorization") === undefined
                ? ""
                : getCookie("Authorization")),
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      );
      console.log(response);
      const data = await response.json();
      console.log(data);
      if (data.status && data.status === "success") {
        return data;
      } else {
        return rejectWithValue("error");
      }
    } catch (error) {
      return rejectWithValue("error");
    }
  },
);

const loginChecker = createSlice({
  name: "login_checker",
  initialState,
  reducers: {
    cleanErrorState(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.auth = false;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.auth = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.auth = false;
        state.error = action.payload;
      });
  },
});

export const loginCheckerActions = loginChecker.actions;
export default loginChecker;
