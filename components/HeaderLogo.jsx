import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "@/public/assets/images/carpaya.png";
import nProgress from "nprogress";
export default function HeaderLogo() {
  const router = useRouter();
  return (
    <div>
      <Image
        src={logo}
        alt="site logo"
        className="h-[18px] w-auto cursor-pointer"
        width={80}
        height={18}
        onClick={() => {
          nProgress.start();
          router.push("/");
        }}
      />
    </div>
  );
}
