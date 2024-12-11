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
  const dispatch = useDispatch();

  useEffect(() => {
    // کد فقط در سمت کلاینت اجرا می‌شود
    if (typeof window !== "undefined") {
      if (getCookie("Authorization")) {
        dispatch(loginUser()).then((res) => console.log(res));
      } else {
        dispatch(setLoginState(true));
        nProgress.start();
        router.push("/login");
        deleteCookie("Authorization");
      }
    }
  }, [dispatch, router]);

  if (loginResult.user === null && loginResult.error === null) {
    return <div style={{ width: "100%", height: "600px" }}>... loading</div>;
  }

  if (loginResult.error) {
    if (typeof window !== "undefined") {
      dispatch(setLoginState(true));
      deleteCookie("Authorization");
      nProgress.start();
      router.push("/login");
    }
    return null;
  }

  if (loginResult.user && loginResult.user.status === "success") {
    return children;
  }

  return null; // پیشگیری از رندر شدن بدون کنترل
};

export default PrivateRoute;
