import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div
      className={"bg-[#FFd83B] w-full flex justify-center items-center p-20"}
    >
      <Image
        src={"/assets/images/not-found.png"}
        alt={"not found"}
        width={794}
        height={399}
      />
    </div>
  );
}
