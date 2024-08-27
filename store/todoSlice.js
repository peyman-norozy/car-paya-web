"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginOtpData: {},
  windowInnerWidth: 0,
  loginState: true,
  selectVehicle: {},
  carYear: [],
  verificationLogin: false,
  vehicleData: [],
  batteriesData: {},
  showHeader: true,
  renderInvoice: true,
  cityModalState: false,
  carSelectToastState: false,
  renderSetCarState: false,
  batteriesBasketLength: 0,
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
    setVerificationLogin(state, action) {
      state.verificationLogin = action.payload;
    },
    setVehicleData(state, action) {
      state.vehicleData = action.payload;
    },
    setBatteriesData(state, action) {
      state.batteriesData = action.payload;
    },
    setShowHeader(state, action) {
      state.showHeader = action.payload;
    },
    renderInvoice(state) {
      state.renderInvoice = !state.renderInvoice;
    },
    setCityModalState(state, action) {
      state.cityModalState = action.payload;
    },
    setCarSelectToastHandler(state, action) {
      state.carSelectToastState = action.payload;
    },
    renderSetCar(state) {
      state.renderSetCarState = !state.renderSetCarState;
    },
    setBatteriesBasketLength(state, action) {
      state.batteriesBasketLength = action.payload;
    },
  },
});

export const {
  getLoginOtpData,
  getWindowInnerWidth,
  setLoginState,
  setSelectCarBrand,
  setSelectCarModel,
  setSelectCarTip,
  setCarYear,
  setVerificationLogin,
  setVehicleData,
  setBatteriesData,
  setShowHeader,
  renderInvoice,
  setCityModalState,
  setCarSelectToastHandler,
  renderSetCar,
  setBatteriesBasketLength,
} = todoSlice.actions;
export default todoSlice;
