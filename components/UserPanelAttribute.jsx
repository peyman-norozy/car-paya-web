import Link from "next/link";
import { Fragment } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";
import { deleteCookie, getCookie, getCookies } from "cookies-next";
import { useRouter } from "next/navigation";
import { API_PATHS } from "@/configs/routes.config";
import { useDispatch } from "react-redux";
import {
  setBatteriesData,
  setLoginModal,
  setLoginState,
} from "@/store/todoSlice";
import nProgress from "nprogress";
import { error } from "@/utils/function-utils";

const UserPanelAttribute = (props) => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const firstPath = pathname !== null && pathname.split("/")[1];

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
        localStorage.removeItem("profileData");
        dispatch(setLoginState(true));
        nProgress.start();
        router.push("/");
      });
  };

  const panelClickHandler = () => {
    axios
      .get(process.env.BASE_API + "/web/checkAuth", {
        headers: {
          Authorization: "Bearer " + getCookies("Authorization").Authorization,
        },
      })
      .then(async () => {
        router.push("/panel");
      })
      .catch((err) => {
        dispatch(setLoginModal(true));
      });
  };

  return (
    <Fragment>
      {/*href={"/panel"}*/}

      <button
        onClick={panelClickHandler}
        className={`cursor-pointer hover:bg-[#0004] ${
          firstPath === "panel" ? "bg-[#0004]" : ""
        } flex items-center h-[40px] px-2`}
      >
        پنل کاربری
      </button>
      <span
        className="cursor-pointer hover:bg-[#0004] flex items-center h-[40px] px-2"
        onClick={exitLogin}
      >
        خروج
      </span>
    </Fragment>
  );
};

export default UserPanelAttribute;
