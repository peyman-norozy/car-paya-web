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
  periodicServiceBasketLength: 0,
  vehicleVerificationBasketLength: {},
  LoginModalState: false,
  DeleteModalState: false,
  DeleteModalId: "",
  renderUserAddrressState:false,
  areaModalState:false
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
    setBatteriesBasketLength(state, action) {},
    setPeriodicServiceBasketLength(state, action) {
      state.periodicServiceBasketLength = action.payload;
    },
    setVehicleVerificationBasketLength(state, action) {
      state.vehicleVerificationBasketLength = action.payload;
    },
    setLoginModal(state, action) {
      state.LoginModalState = action.payload;
    },
    setDeleteModal(state, action) {
      state.DeleteModalState = action.payload;
    },
    setDeleteModalId(state, action) {
      state.DeleteModalId = action.payload;
    },
    renderUserAddrress(state) {
      state.renderUserAddrressState = !state.renderUserAddrressState;
    },
    setAreaeModalState(state, action) {
      state.areaModalState = action.payload;
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
  setPeriodicServiceBasketLength,
  setVehicleVerificationBasketLength,
  setLoginModal,
  setDeleteModal,
  setDeleteModalId,
  renderUserAddrress,
  setAreaeModalState
} = todoSlice.actions;
export default todoSlice;
