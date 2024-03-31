import Link from "next/link";
import { Fragment } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { API_PATHS } from "@/configs/routes.config";
import {useDispatch} from "react-redux";
import {setLoginState} from "@/store/todoSlice";

const UserPanelAttribute = (props) => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch()
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
        dispatch(setLoginState(true));
        router.push("/");
      });
  };

  return (
    <Fragment>
      <Link
        href={"/profile"}
        className={`cursor-pointer hover:bg-[#0004] ${
          firstPath === "profile" ? "bg-[#0004]" : ""
        } flex items-center h-[40px] px-2`}
      >
        پنل کاربری
      </Link>
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
