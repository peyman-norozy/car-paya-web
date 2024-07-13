"use client"
import React from "react";
import Image from "next/image";

const HowWorks = (props) => {
  return (
    <div className="flex size1000:flex-row flex-col items-center gap-16 mt-24">
      {!props.removeImage&&<section>
        <Image
          src={"/assets/images/car-service-repair.png"}
          alt={"how works"}
          width={1000}
          height={595.05}
          className={"w-[529px] h-[695.05px]"}
        />
      </section>}
      <section className="flex-1 size1000:px-0 pl-[20px] pr-[30px]">
        <h1 className="text-[#2C5D83] text-24 my-10">
          کار چک می چگونه کار می کند؟
        </h1>
        <ul className="flex flex-col h-[calc(100%-120px)] gap-8 justify-between w-full border-r-2 pr-8">
          {props.data.map((item, index) => (
            <li
              key={index}
              className="flex items-center size1000:gap-0 gap-4 justify-between size1000:pl-10 pl-0"
            >
              <div className="relative flex-1">
                <span className="inline-block bg-[#F6F6F6] px-4 py-2 absolute right-[-53px] top-[-10px]">
                  {index + 1}
                </span>
                <span className="">{item.title}</span>
                <p className="font-light text-14 mt-2">{item.description}</p>
              </div>
              <div className="w-[70px] h-[70px]">
                <Image
                  src={item.img}
                  alt={"icon"}
                  width={70}
                  height={70}
                  className="w-full h-full"
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default HowWorks;
