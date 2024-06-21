"use client";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/store/loginCheckerSlice";
import { useEffect } from "react";
import { deleteCookie, getCookie } from "cookies-next";

const ProtectedRoute = ({ children }) => {
  const loginResult = useSelector((item) => item.loginChecker);
  console.log(loginResult);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    if (getCookie("Authorization")) {
      dispatch(loginUser()).then((res) => console.log(res));
    }
  }, []);

  if (!getCookie("Authorization")) {
    return children;
  }

  if (loginResult.error) {
    deleteCookie("Authorization");
    return children;
  }

  if (loginResult.user === null) {
    return <div style={{ width: "100%", height: "600px" }}>... loading</div>;
  }
  if (loginResult.user === null && loginResult.error === null) {
    return <div style={{ width: "100%", height: "600px" }}>... loading</div>;
  }
  if (loginResult.user.status === "success") {
    router.push("/panel");
  }
};

export default ProtectedRoute;
