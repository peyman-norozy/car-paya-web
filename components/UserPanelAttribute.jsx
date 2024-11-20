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
        }
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
        nProgress.start();
        router.push("/panel/profile");
      })
      .catch((err) => {
        dispatch(setLoginModal(true));
      });
  };

  return (
    <ul className={"flex flex-col"}>
      {/*href={"/panel"}*/}

      <li
        onClick={panelClickHandler}
        className={`cursor-pointer border-b flex items-center gap-2 py-[10px]`}
      >
        <span
          className={`flex w-full items-center hover:bg-[#FDE7DE] gap-1 py-2 pr-2 rounded-8 ${firstPath === "panel" ? "bg-[#FDE7DE]" : ""}`}
        >
          <i className={"cc-user text-24"} />
          <span className={"text-[#0F0F0F] font-medium text-14"}>
            پنل کاربری
          </span>
        </span>
      </li>
      <li
        className="cursor-pointer flex items-center gap-2 py-[10px]"
        onClick={exitLogin}
      >
        <span
          className={
            "flex w-full items-center hover:bg-[#FDE7DE] gap-1 py-2 pr-2 rounded-8"
          }
        >
          <i className={"cc-undo text-24"} />
          <span className={"text-[#0F0F0F] font-medium text-14"}>خروج</span>
        </span>
      </li>
    </ul>
  );
};

export default UserPanelAttribute;
