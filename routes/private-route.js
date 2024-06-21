"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { deleteCookie, getCookie } from "cookies-next";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/store/loginCheckerSlice";

const PrivateRoute = ({ children }) => {
  const loginResult = useSelector((item) => item.loginChecker);
  const router = useRouter();
  console.log(loginResult);
  const dispatch = useDispatch();

  useEffect(() => {
    if (getCookie("Authorization")) {
      dispatch(loginUser()).then((res) => console.log(res));
    }
  }, []);

  if (!getCookie("Authorization")) {
    router.push("/login");
    return;
  }

  if (loginResult.user === null && loginResult.error === null) {
    return <div style={{ width: "100%", height: "600px" }}>... loading</div>;
  }

  // if(loginResult.error && loginResult.loading === false && loginResult.user === null){
  //     deleteCookie("Authorization")
  //     router.push("/login")
  //     return
  // }

  // if(loginResult.user === null){
  //     return(
  //         <div>... loading</div>
  //     )
  // }

  if (loginResult.error) {
    deleteCookie("Authorization");
    router.push("/login");
  }
  if (loginResult.user && loginResult.user.status === "success") {
    return children;
  }
};

export default PrivateRoute;
