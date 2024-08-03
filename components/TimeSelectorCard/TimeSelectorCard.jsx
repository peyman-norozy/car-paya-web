"use client";

import moment from "jalali-moment";
import React, { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
const TimeSelectorCard = (props) => {
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref);
  const [accordionHeight, setAccordionHeight] = useState(0);

  console.log(props.data);
  const clickAccordionHandler = () => {
    if (accordionHeight) {
      setAccordionHeight(0);
    } else {
      setAccordionHeight(ref.current.scrollHeight);
    }
  };

  useEffect(() => {
    moment.locale("fa");
    const updateHeight = () => {
      if (window.innerWidth >= 1024) {
        // lg breakpoint
        setAccordionHeight(48); // Set the height for large screens
      } else if (window.innerWidth < 1024) {
        // md breakpoint
        setAccordionHeight(0); // Set the height for medium screens
      }
    };

    // Initial calculation
    updateHeight();

    // Update height on window resize
    window.addEventListener("resize", updateHeight);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <li
      className={`bg-[#5C5C5C] lg:h-[72px] h-fit rounded-[8px] flex lg:flex-row flex-col justify-between lg:items-center p-4 transition-all duration-500 ${accordionHeight ? "gap-8" : "gap-0"}`}
    >
      <div
        className={"flex justify-between lg:cursor-default cursor-pointer"}
        onClick={clickAccordionHandler}
      >
        <div className={"flex flex-col text-[#FEFEFE] w-[78px] items-center"}>
          <span className={"text-[16px] font-bold"}>
            {moment(Number(props.data.day) * 1000).format("l")}
          </span>
          <span className={"text-[12px] text-center"}>
            {moment(Number(props.data.day) * 1000).format("dddd")}
          </span>
        </div>
        <div className={" lg:hidden flex justify-center items-center"}>
          <i
            className={`cc-arrow-up text-white text-[24px] transition-all duration-500 ${accordionHeight ? "" : "rotate-[-180deg]"}`}
          />
        </div>
      </div>

      <ul
        {...events}
        ref={ref}
        className={`flex gap-6 lg:overflow-x-scroll overflow-y-hidden select-none lg:flex-nowrap flex-wrap transition-all duration-500`}
        style={{ height: `${accordionHeight}px` }}
      >
        {props.data.hour.map((item) => (
          <li
            key={item.id}
            className={`${item.status === "ACTIVE" ? (props.selectedTime === item.id ? "bg-[#F66B34] text-[#FEFEFE] cursor-pointer" : "bg-[#FEFEFE] text-[#0E0E0E] cursor-pointer") : "bg-[#B0B0B0] text-[#5D697A] cursor-none"} flex gap-1 py-2 px-4 rounded-[8px] select-none`}
            onClick={() => {
              props.setSelectedTime(item.id);
            }}
          >
            <span className="flex items-center">
              {item.start_time}:00 - {item.end_time}:00
            </span>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default TimeSelectorCard;
