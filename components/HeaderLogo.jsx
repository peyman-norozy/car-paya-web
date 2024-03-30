import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeaderLogo() {
  const router = useRouter();
  return (
    <div>
      <Image
        src="/assets/icons/Image-1.svg"
        alt="site logo"
        className="size868:w-[227px] w-[140px] cursor-pointer"
        width={227}
        height={44}
        onClick={() => router.push("/")}
      />
    </div>
  );
}
