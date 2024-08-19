"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { deleteCookie, getCookie } from "cookies-next";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/store/loginCheckerSlice";
import { setLoginState } from "@/store/todoSlice";
import nProgress from "nprogress";

const PrivateRoute = ({ children }) => {
  const loginResult = useSelector((item) => item.loginChecker);
  const router = useRouter();
  console.log(loginResult);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(getCookie("Authorization"));
    if (getCookie("Authorization")) {
      dispatch(loginUser()).then((res) => console.log(res));
    }
  }, []);

  if (!getCookie("Authorization")) {
    dispatch(setLoginState(true));
    nProgress.start();
    router.push("/login");
    deleteCookie("Authorization");
    return;
  }

  if (loginResult.user === null && loginResult.error === null) {
    return <div style={{ width: "100%", height: "600px" }}>... loading</div>;
  }

  if (loginResult.error) {
    dispatch(setLoginState(true));
    deleteCookie("Authorization");
    nProgress.start();
    router.push("/login");
  }
  if (loginResult.user && loginResult.user.status === "success") {
    return children;
  }
};

export default PrivateRoute;
