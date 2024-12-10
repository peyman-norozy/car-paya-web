"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import PhoneNumberLogin from "@/components/login/PhoneNumberLogin";
import RegisterUserLogin from "@/components/login/RegisterUserLogin";
import OtpUsersLogin from "@/components/login/OtpUsersLogin";
import EnterPasswordLogin from "@/components/login/EnterPasswordLogin";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { getCookies } from "cookies-next";
// import ProtectedRoute from "@/routes/protected-route";
const ProtectedRoute = dynamic(() => import("@/routes/protected-route"), {
  ssr: false,
});
export default function Login(props) {
  const [loginState, setLoginState] = useState("phone_number");
  const [phoneNumber, setPhoneNumber] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    axios
      .get(process.env.BASE_API + "/web/checkAuth", {
        headers: {
          Authorization: "Bearer " + getCookies("Authorization").Authorization,
        },
      })
      .then(() => {
        router.push(searchParams.get("url") || "/panel/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ProtectedRoute>
      <div className={"my-20 mx-4"}>
        {(() => {
          switch (loginState) {
            case "phone_number":
              return (
                <PhoneNumberLogin
                  setLoginState={setLoginState}
                  setPhoneNumber={setPhoneNumber}
                />
              );
            case "register_user":
              return <RegisterUserLogin setLoginState={setLoginState} />;
            case "otp_number":
              return (
                <div className="flex items-center w-full">
                  <OtpUsersLogin
                    setLoginState={setLoginState}
                    phoneNumber={phoneNumber}
                  />
                </div>
              );
            case "user_passwordNumber":
              return (
                <div className="flex items-center justify-end w-full">
                  {
                    <EnterPasswordLogin
                      setLoginState={setLoginState}
                      searchParams={props.searchParams}
                    />
                  }
                </div>
              );
            default:
              return "foo";
          }
        })()}
      </div>
    </ProtectedRoute>
  );
}
