import Image from "next/image";
import TabsCard from "@/components/cards/TabsCard";
import { useEffect } from "react";
import { getData } from "@/utils/api-function-utils";
import { API_PATHS } from "@/configs/routes.config";

const UserTabsCard = (props) => {
  const exitClickHandler = () => {
    props.setLogoutModalState(true);
  };

  return (
    <ul className="flex flex-col gap-1 w-full">
      <li
        className={
          "font-light text-14 px-6 flex items-center justify-between mx-2 text-[#FEFEFE]"
        }
      >
        <span>کیف پول</span>
        <span>۰ تومان</span>
      </li>
      {props.data.map((item, index) => (
        <TabsCard key={item.id + index} item={item} />
      ))}
      <li
        className="flex items-center gap-4 font-light text-14 cursor-pointer hover:bg-[#EFF2FF4f] rounded-10 px-6 py-4 mx-2 mb-4"
        onClick={exitClickHandler}
      >
        <Image
          src={"/assets/icons/login.svg"}
          alt={"logout icon"}
          width={20}
          height={20}
        />
        <span className="text-[#FEFEFE]">خروج</span>
      </li>
    </ul>
  );
};

export default UserTabsCard;
