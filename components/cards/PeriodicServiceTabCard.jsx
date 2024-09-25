import React from "react";
import Image from "next/image";
import Link from "next/link";

const PeriodicServiceTabCard = (props) => {
  const clickTabHandler = (props) => {};
  const { src, alt, height, width, title, onClick, isClicked, id, href } =
    props;
  return (
    <li className={"min-w-[200px]"}>
      <Link
        href={href}
        onClick={onClick}
        className={`w-full p-3 flex flex-col items-center justify-center rounded-lg ${
          isClicked === href ? "bg-[#B0B0B0]" : "bg-white"
        }`}
      >
        <Image
          src={src}
          alt={alt}
          height={height}
          width={width}
          className={"w-[86px] h-[80px]"}
        />
        <p className={`text-14 text-center text-[#0E0E0E]`}>{title}</p>
      </Link>
    </li>
  );
};

export default React.memo(PeriodicServiceTabCard);
