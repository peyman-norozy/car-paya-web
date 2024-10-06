import Link from "next/link";
import { INTERNAL_PATHS } from "@/configs/routes.config";
import Image from "next/image";
import user from "@/public/assets/images/magUser.png";
import { setLoginModal } from "@/store/todoSlice";
import { useDispatch } from "react-redux";

const LoginLink = () => {
  const dispatch = useDispatch();

  const loginModalHandler = () => {
    dispatch(setLoginModal(true));
  };

  return (
    // href={INTERNAL_PATHS.LOGIN}
    <button className="cursor-pointer" onClick={loginModalHandler}>
      <Image
        className="rounded-full size-10"
        alt={"user icon"}
        src={user}
        width={40}
        height={40}
      />
    </button>
  );
};

export default LoginLink;
