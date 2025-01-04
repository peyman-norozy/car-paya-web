import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "@/public/assets/icons/carpayalogo.png";
import nProgress from "nprogress";
export default function HeaderLogo() {
  const router = useRouter();
  return (
    <div>
      <Image
        src={logo}
        alt="site logo"
        className="w-[30px] cursor-pointer"
        width={40}
        height={40}
        onClick={() => {
          nProgress.start();
          router.push("/");
        }}
      />
    </div>
  );
}
