import React from "react";
import Image from "next/image";

const PeriodicServiceTabCard = (props) => {
  const clickTabHandler = () => {};

  return (
    <li
      className={`flex flex-col items-center flex-1 rounded-5 ${
        // router.query.peridictTab === props.item.tabQuery
        //   ? "shadow-[0_0_6px_0_rgba(0,0,0,1)]"
        //   :
        "shadow-[0_0_6px_0_rgba(177,177,177,1)]"
      } py-4 px-1 cursor-pointer self-stretch`}
      onClick={() => clickTabHandler()}
    >
      <div>
        <Image src={props.item.icon} alt={"icon"} width={50} height={50} />
      </div>
      <span className={"text-12 text-center"}>{props.item.title}</span>
    </li>
  );
};

export default React.memo(PeriodicServiceTabCard);
