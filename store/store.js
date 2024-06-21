"use client";

import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import loginChecker from "@/store/loginCheckerSlice";
const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    loginChecker: loginChecker.reducer,
  },
});

export default store;
