"use client";

import React, { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
const fakeTimeData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const TimeSelectorCard = () => {
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref);
  const [accordionHeight, setAccordionHeight] = useState(0);

  const clickAccordionHandler = () => {
    console.log(ref.current.scrollHeight);
    if (accordionHeight) {
      setAccordionHeight(0);
    } else {
      setAccordionHeight(ref.current.scrollHeight);
    }
  };

  useEffect(() => {
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
        <div className={"flex flex-col text-[#FEFEFE] w-[78px]"}>
          <span className={"text-[16px]"}>۱۴۰۳/۰۱/۰۱</span>
          <span className={"text-[12px] text-center"}>سه شنبه</span>
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
        {fakeTimeData.map((item, i) => (
          <li
            key={i}
            className={
              "bg-[#FEFEFE]  flex gap-1 py-2 px-4 rounded-[8px] select-none"
            }
          >
            <span>10:00</span>
            <span>-</span>
            <span>12:00</span>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default TimeSelectorCard;
