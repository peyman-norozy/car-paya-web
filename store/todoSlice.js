"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginOtpData: {},
    windowInnerWidth: 0,
    loginState: true,
    triangleState: false,
    modalState: false,
    recordModalCreateState: false,
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
        setRecordModalState(state, action) {
            state.modalState = action.payload;
        },
        setRecordModalCreateState(state, action) {
            state.recordModalCreateState = action.payload;
        },
    },
});

export const {
    getLoginOtpData,
    getWindowInnerWidth,
    setLoginState,
    setTriangleState,
    setRecordModalState,
    setRecordModalCreateState
} = todoSlice.actions
export default todoSlice;



