import Link from "next/link";
import { INTERNAL_PATHS } from "@/configs/routes.config";
import Image from "next/image";
import user from "@/public/assets/images/magUser.png"


const LoginLink = () => {
  return (
    <Link href={INTERNAL_PATHS.LOGIN} className="cursor-pointer">
      <Image className="rounded-full size-10" src={user} width={40} height={40}/>
    </Link>
  );
};

export default LoginLink;
