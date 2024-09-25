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
      className={`bg-white p-4 flex flex-col ${accordionHeightState ? "gap-4" : "gap-0"} rounded-[8px] overflow-y-hidden transition-all duration-500 shadow-[0_0_4px_0_rgba(152,152,152,0.4)]`}
    >
      <div
        className={
          "flex items-center justify-between text-[14px] font-semibold cursor-pointer"
        }
        onClick={accordionClickHandler}
      >
        <div className={"flex items-center gap-[6px]"}>
          <Image
            src={"/assets/icons/QuestionMark.svg"}
            alt={"question mark icon"}
            width={38}
            height={45}
          />
          <span> {title}</span>
        </div>
        <Image
          src={"/assets/icons/arrow-up.svg"}
          className={`${accordionHeightState ? "rotate-0" : "rotate-180"} transition-all duration-500 lg:w-[36px] w-[26px]`}
          alt={"arrow"}
          width={36}
          height={36}
        />
      </div>
      <p
        className={
          "leading-8 transition-all duration-500 overflow-hidden lg:text-14 text-12"
        }
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
