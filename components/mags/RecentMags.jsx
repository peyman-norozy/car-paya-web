import Image from "next/image";
import React from "react";
import ax from "@/public/assets/images/design-8.png";

const RecentMags = () => {
  return (
    <div className="grid grid-cols-4 gap-[12px]">
      <div className="col-span-2 row-start-1 row-end-3 place-self-stretch h-[520px] rounded-10 overflow-hidden relative">
        <Image src={ax} alt="" width={664} height={520} className="h-full w-full" />
        <div className="flex items-end justify-between h-full p-[1.5rem] absolute bottom-0 w-full bg-[linear-gradient(180deg,_#00000010,_#000000)]">
          <div>
            <span className="text-20 text-white font-bold">
              بیمه شخص ثالث خودرو چیست؟
            </span>
            <p className="text-12 text-white mt-[0.75rem] ">11/11/1379</p>
          </div>
          <div className="bg-white text-12 rounded-5 px-[1rem] py-[0.25rem] border border-black h-max">
            بیمه
          </div>
        </div>
      </div>
      <div className="col-span-2 rounded-10 overflow-hidden relative">
        <Image src={ax} alt="" width={664} height={382} className="h-full w-full" />
        <div className="flex items-end justify-between h-full p-[1.5rem] absolute bottom-0 w-full bg-[linear-gradient(180deg,_#00000010,_#000000)]">
          <div>
            <span className="text-20 text-white font-bold">
              بیمه شخص ثالث خودرو چیست؟
            </span>
            <p className="text-12 text-white mt-[0.75rem] ">11/11/1379</p>
          </div>
          <div className="bg-white text-12 rounded-5 px-[1rem] py-[0.25rem] border border-black h-max">
            بیمه
          </div>
        </div>
      </div>
      <div className="rounded-10 overflow-hidden relative">
        <Image src={ax} alt="" width={664} height={382} className="h-full w-full" />
        <div className="flex flex-col justify-end h-full gap-[0.25rem] p-[1.5rem] absolute bottom-0 w-full bg-[linear-gradient(180deg,_#00000010,_#000000)]">
        <span className="text-14 line-clamp-2 break-words text-white font-bold">
        بیمه شخص ثالث خودرو چیست و چرا باید خودرو ما بیمه داشته باشد؟
            </span>
          <div className="w-full flex items-center justify-between">
            
            <p className="text-12 text-white mt-[0.75rem] ">11/11/1379</p>
            <div className="bg-white text-12 rounded-5 px-[1rem] py-[0.25rem] border border-black h-max">
            بیمه
          </div>
          </div>
          
        </div>
      </div>
      <div className="rounded-10 overflow-hidden relative">
        <Image src={ax} alt="" width={664} height={382} className="h-full w-full" />
        <div className="flex flex-col justify-end h-full gap-[0.25rem] p-[1.5rem] absolute bottom-0 w-full bg-[linear-gradient(180deg,_#00000010,_#000000)]">
        <span className="text-14 line-clamp-2 break-words text-white font-bold">
        بیمه شخص ثالث خودرو چیست و چرا باید خودرو ما بیمه داشته باشد؟
            </span>
          <div className="w-full flex items-center justify-between">
            
            <p className="text-12 text-white mt-[0.75rem] ">11/11/1379</p>
            <div className="bg-white text-12 rounded-5 px-[1rem] py-[0.25rem] border border-black h-max">
            بیمه
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default RecentMags;
