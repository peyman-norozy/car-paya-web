import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeaderLogo() {
  const router = useRouter();
  return (
    <div>
      <Image
        src="/assets/icons/Logo.svg"
        alt="site logo"
        className="w-[75px] h-[65px] cursor-pointer"
        width={75}
        height={65}
        onClick={() => router.push("/")}
      />
    </div>
  );
}
