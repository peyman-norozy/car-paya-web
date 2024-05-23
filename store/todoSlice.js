"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginOtpData: {},
  windowInnerWidth: 0,
  loginState: true,
  triangleState: false,
  selectVehicle: {},
  carYear: [],
  verificationLogin: false,
  tipId: 0,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    getLoginOtpData(state, action) {
      state.loginOtpData = action.payload;
    },
    getWindowInnerWidth(state, action) {
      state.windowInnerWidth = action.payload;
    },
    setLoginState(state, action) {
      state.loginState = action.payload;
    },
    setTriangleState(state, action) {
      state.triangleState = action.payload;
    },
    setSelectCarBrand(state, action) {
      state.selectVehicle.carBrand = action.payload;
    },
    setSelectCarModel(state, action) {
      state.selectVehicle.carModel = action.payload;
    },
    setSelectCarTip(state, action) {
      state.selectVehicle.carTip = action.payload;
    },
    setCarYear(state, action) {
      state.carYear = action.payload;
    },
    setTipId(state, action) {
      state.tipId = action.payload;
    },
    setVerificationLogin(state, action) {
      state.verificationLogin = action.payload;
    },
  },
});

export const {
  getLoginOtpData,
  getWindowInnerWidth,
  setLoginState,
  setTriangleState,
  setSelectCarBrand,
  setSelectCarModel,
  setSelectCarTip,
  setCarYear,
  setTipId,
  setVerificationLogin,
} = todoSlice.actions;
export default todoSlice;
