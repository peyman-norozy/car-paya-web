import Button from "@/components/Button";
import { useCallback, useRef } from "react";
import useClickOutside from "@/hook/useClickOutside";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import axios from "axios";
import { API_PATHS } from "@/configs/routes.config";
import nProgress from "nprogress";

const LogoutModal = (props) => {
  const exitModalRef = useRef();
  const close = useCallback(() => props.setLogoutModalState(false), []);
  useClickOutside(exitModalRef, close);
  const router = useRouter();

  const exitLogin = () => {
    axios
      .post(
        process.env.BASE_API + "/admin" + API_PATHS.LOGOUT,
        {},
        {
          headers: {
            Authorization: "Bearer " + getCookie("Authorization"),
          },
        },
      )
      .then(() => {
        deleteCookie("Authorization");
        // dispatch(setLoginState(true));
        nProgress.start();
        router.push("/");
      });
  };

  const exitModal = () => {
    props.setLogoutModalState(false);
  };

  return (
    <div className="bg-[#0005] fixed top-0 right-0 w-full h-full z-[99999]">
      <div
        className={`fixed overflow-hidden size525:w-[500px] size360:w-[300px] w-[240px] size525:h-[200px] h-[150px] bg-white z-[10000] inset-0 m-auto rounded-[10px] flex flex-col justify-between border-t-4 border-t-[#d54a00] size525:text-14 text-12`}
        ref={exitModalRef}
      >
        <p className="mr-4 mt-6">از خروج خود اطمینان دارید؟</p>
        <div className="bg-[#eee] border-2 border-t-[#0002] h-[50px] flex items-center justify-end size300:gap-8 gap-4">
          <Button
            type={"button"}
            class_name="bg-[#d94801] border border-[#a84515] text-white w-[100px] h-[34px] rounded-5"
            on_click={exitLogin}
          >
            بله
          </Button>
          <Button
            type={"button"}
            class_name="bg-[#ffffff] border border-[#a7a7a7] text-[#595959] size300:ml-8 ml-2 w-[100px] h-[34px] rounded-5"
            on_click={exitModal}
          >
            خیر
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
