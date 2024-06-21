"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import PhoneNumberLogin from "@/components/login/PhoneNumberLogin";
import RegisterUserLogin from "@/components/login/RegisterUserLogin";
import OtpUsersLogin from "@/components/login/OtpUsersLogin";
import EnterPasswordLogin from "@/components/login/EnterPasswordLogin";
// import ProtectedRoute from "@/routes/protected-route";
const ProtectedRoute = dynamic(() => import("@/routes/protected-route"), {
  ssr: false,
});
export default function Login() {
  const [loginState, setLoginState] = useState("phone_number");
  useEffect(() => {
    console.log("peyman");
  }, []);

  return (
    <ProtectedRoute>
      <div className={"size1000:mt-44 mt-0"}>
        {(() => {
          switch (loginState) {
            case "phone_number":
              return <PhoneNumberLogin setLoginState={setLoginState} />;
            case "register_user":
              return <RegisterUserLogin setLoginState={setLoginState} />;
            case "otp_number":
              return (
                <div className="flex items-center w-full">
                  <OtpUsersLogin setLoginState={setLoginState} />
                </div>
              );
            case "user_passwordNumber":
              return (
                <div className="flex items-center justify-end w-full">
                  {<EnterPasswordLogin setLoginState={setLoginState} />}
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
