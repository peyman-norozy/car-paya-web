import Image from "next/image";
import basket from "../public/assets/icons/Bag 1.svg";

const BasketLink = () => {
  return (
    <div className="cursor-pointer">
      <Image
        src={basket}
        alt="shoping icon"
        // className="size868:w-[20px] w-[14px]"
        width={30}
        height={30}
      />
    </div>
  );
};

export default BasketLink;
