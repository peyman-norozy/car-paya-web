import React, { useRef } from "react";
import Image from "next/image";

const BatteryFaqCard = ({ title, description }) => {
  const descriptionRef = useRef();
  const [accordionHeightState, setAccordionHeightState] = React.useState(false);
  const accordionClickHandler = () => {
    console.log(descriptionRef.current.scrollHeight);
    setAccordionHeightState((prev) => !prev);
  };
  return (
    <li
      className={`bg-[#E7E7E7] p-4 flex flex-col ${accordionHeightState ? "gap-4" : "gap-0"} rounded-[8px] overflow-y-hidden transition-all duration-500`}
    >
      <div
        className={
          "flex items-center justify-between text-[20px] font-semibold cursor-pointer"
        }
        onClick={accordionClickHandler}
      >
        <span> {title}</span>
        <Image
          src={"/assets/icons/arrow-up.svg"}
          className={`${accordionHeightState ? "rotate-0" : "rotate-180"} transition-all duration-500`}
          alt={"arrow"}
          width={36}
          height={36}
        />
      </div>
      <p
        className={"leading-8 transition-all duration-500 overflow-hidden"}
        ref={descriptionRef}
        style={
          accordionHeightState
            ? { height: descriptionRef.current.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        {description}
      </p>
    </li>
  );
};

export default BatteryFaqCard;
