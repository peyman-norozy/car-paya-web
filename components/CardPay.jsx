import Image from "next/image";
import wallet from "../public/assets/icons/Wallet 1.svg";

const CardPay = () => {
  return (
    <div className="cursor-pointer">
      <Image
        src={wallet}
        alt="shoping icon"
        // className="size868:w-[20px] w-[14px]"
        width={30}
        height={30}
      />
    </div>
  );
};

export default CardPay;
