import Image from "next/image";
import TabsCard from "@/components/cards/TabsCard";

const UserTabsCard = (props) => {
  const exitClickHandler = () => {
    props.setLogoutModalState(true);
  };

  return (
    <ul className="flex flex-col gap-1 w-full">
      <li
        className={
          "font-light text-14 px-6 flex items-center justify-between mx-2"
        }
      >
        <div className="flex items-center gap-4 py-2">
          <Image
            src={"/assets/icons/Vector.svg"}
            alt={"vector icon"}
            width={20}
            height={20}
          />
          <span>کیف پول</span>
        </div>
        <span>۰ تومان</span>
      </li>
      {props.data.map((item, index) => (
        <TabsCard key={item.id + index} item={item} />
      ))}
      <li
        className="flex items-center gap-4 font-light text-14 cursor-pointer hover:bg-[#EFF2FF] rounded-10 px-6 py-4 mx-2 mb-4"
        onClick={exitClickHandler}
      >
        <Image
          src={"/assets/icons/login.svg"}
          alt={"logout icon"}
          width={20}
          height={20}
        />
        <span>خروج</span>
      </li>
    </ul>
  );
};

export default UserTabsCard;
