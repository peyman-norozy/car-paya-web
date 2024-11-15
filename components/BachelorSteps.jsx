import React, { useEffect, useState } from "react";
import Image from "next/image";

const bachelorData = [
  {
    title: "انتخاب وسیله نقلیه",
    description: "انتخاب وسیله خودرو برای کارشناسی",
    icon: "/assets/icons/bachelorSteps/car-vector.svg",
    iconAnimation: "/assets/icons/bachelorSteps/car-vector(1).svg",
    width: 32,
    height: 22,
  },
  {
    title: "انتخاب کارشناسی مورد نیاز",
    description: "انتخاب کارشناس برای خودرو شما",
    icon: "/assets/icons/bachelorSteps/search-vector.svg",
    iconAnimation: "/assets/icons/bachelorSteps/search-vector(1).svg",
    width: 29,
    height: 29,
  },
  {
    title: "انتخاب مکان و زمان دریافت خدمات",
    description: "انتخاب زمان و مکان انتخابی شما در کارپایا",
    icon: "/assets/icons/bachelorSteps/time-vector.svg",
    iconAnimation: "/assets/icons/bachelorSteps/time-vector(1).svg",
    width: 25,
    height: 32,
  },
  {
    title: "دریافت خدمات",
    description: "دریافت خدمات کارشناسی کارپایا در محل و زمان انتخابی شما",
    icon: "/assets/icons/bachelorSteps/tick-vector.svg",
    iconAnimation: "/assets/icons/bachelorSteps/tick-vector(1).svg",
    width: 27,
    height: 27,
  },
];
const ImageArray = [
  { image: "/assets/images/car-selection.png" },
  { image: "/assets/images/car-inspection.png" },
  { image: "/assets/images/car-selection.png" },
  { image: "/assets/images/car-inspection.png" },
];

const BachelorSteps = () => {
  const [bachloreNumber, setBachloreNumber] = useState(1);
  const [visitedSteps, setVisitedSteps] = useState([]);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (bachloreNumber < 4) {
        setBachloreNumber((prevCount) => prevCount + 1);
        setVisitedSteps((prevSteps) =>
          !prevSteps.includes(bachloreNumber)
            ? [...prevSteps, bachloreNumber]
            : prevSteps
        );
      } else if (bachloreNumber >= 4) {
        setBachloreNumber(1);
        setVisitedSteps([]);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [bachloreNumber]);

  useEffect(() => {
    // شروع انیمیشن برای تصویر جدید با کمی تأخیر
    setAnimated(false);
    const timeout = setTimeout(() => setAnimated(true), 2000);
    return () => clearTimeout(timeout);
  }, [bachloreNumber]);

  return (
    <div className="py-[48px] px-[25px] mt-[40px] max-w-[1294px] shadow-sm rounded-8 overflow-hidden">
      <p className="lg:hidden block text-16 font-medium mb-[44px]">
        مراحل ثبت سرویس دوره ای
        <span className="text-[#1C74D1]"> کار </span>
        <span className="text-[#F66B34]"> پایا </span>
      </p>
      <section className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-[144px] max-w-[1294px]">
        <ul>
          {bachelorData.map((item, index) => (
            <li
              key={item.title}
              className="transition-all duration-500 pb-[60px] flex gap-4 relative"
            >
              <p className="flex items-center gap-[11px] z-10">
                <span
                  className={`flex justify-center items-center transition-all duration-500 ${bachloreNumber === index + 1 ||
                    visitedSteps.includes(index + 1)
                    ? "bg-[#3C81D4]"
                    : "bg-[#F6FCFF]"
                    } w-[45px] h-[45px] shadow-custom1 rounded-10 overflow-hidden`}
                >
                  <Image
                    src={
                      bachloreNumber === index + 1 ||
                        visitedSteps.includes(index + 1)
                        ? item.iconAnimation
                        : item.icon
                    }
                    alt="icons"
                    width={item.width}
                    height={item.height}
                  />
                </span>
              </p>
              <div>
                <span className="text-[#000000] text-14 font-medium">
                  {item.title}
                </span>
                <p className="text-[#6D6D6D] text-14 font-medium">
                  {item.description}
                </p>
              </div>
              <span
                className={`inline-block w-[2px] h-full absolute right-5 z-0 ${index !== bachelorData.length - 1
                  ? bachloreNumber === index + 1 ||
                    visitedSteps.includes(index + 1)
                    ? "bg-gradient-to-b from-[#167DFA] to-[#C9C9C9]"
                    : "bg-[#C9C9C9]"
                  : ""
                  }`}
                style={{
                  maskImage:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 0%)",
                  maskSize: "2px 8px",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 0%)",
                  WebkitMaskSize: "2px 8px",
                }}
              ></span>
            </li>
          ))}
        </ul>
        <ul>
          {ImageArray.map((item, index) => (
            <li key={item.image}>
              {bachloreNumber === index + 1 && (
                <Image
                  src={item.image}
                  alt="mobile"
                  width={238}
                  height={401}
                  className={`transition-all duration-500 ${bachloreNumber === index + 1 ? "block" : "hidden"} m-auto ${animated ? "opacity-80" : "opacity-100"
                    }`}
                />
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default BachelorSteps;
