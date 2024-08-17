import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "@/public/assets/images/logoFarsi.png";
import nProgress from "nprogress";
export default function HeaderLogo() {
  const router = useRouter();
  return (
    <div>
      <Image
        src={logo}
        alt="site logo"
        className="h-[40px] w-auto cursor-pointer"
        width={45}
        height={36}
        onClick={() => {
          nProgress.start();
          router.push("/");
        }}
      />
    </div>
  );
}
