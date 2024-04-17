import React from "react";
import Image from "next/image";
import Link from "next/link";

const PeriodicServiceTabCard = (props) => {
  const clickTabHandler = (props) => {};
  const { src, alt, height, width, title, onClick, isClicked, index, href } =
      props;
  return (
    <li className={"min-w-[200px]"}>
      <Link
          href={href}
          onClick={onClick}
          className={`w-full flex flex-col items-center justify-center rounded-10 border shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] h-[110px] ${
              isClicked === index ? "border-RED_500" : "border-[#dedede]"
          }`}
      >
        <Image src={src} alt={alt} height={height} width={width} />
        <p
            className={`text-12 text-center ${
                isClicked === index ? "text-RED_500" : "text-text_gray"
            }`}
        >
          {title}
        </p>
      </Link>
    </li>
  );
};

export default React.memo(PeriodicServiceTabCard);
