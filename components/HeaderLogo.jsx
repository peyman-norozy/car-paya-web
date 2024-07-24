import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "@/public/assets/images/logoFarsi.png"
export default function HeaderLogo() {
  const router = useRouter();
  return (
    <div>
      <Image
        src={logo}
        alt="site logo"
        className="w-[120px] h-[40px] cursor-pointer"
        width={121}
        height={40}
        onClick={() => router.push("/")}
      />
    </div>
  );
}
