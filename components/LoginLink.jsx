import Link from "next/link";
import { INTERNAL_PATHS } from "@/configs/routes.config";
import Image from "next/image";
import user from "../public/assets/icons/user-1.svg";

const LoginLink = () => {
  return (
    <Link
      href={INTERNAL_PATHS.LOGIN}
      className="bg-red_user cursor-pointer px-2 py-2 rounded-lg"
    >
      <Image
        src={user}
        alt="user icon"
        className="size868:w-[20px] w-[14px]"
        width={20}
        height={20}
      />
    </Link>
  );
};

export default LoginLink;
