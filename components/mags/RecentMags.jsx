import Image from "next/image";
import React from "react";
import ax from "@/public/assets/images/design-8.png";

const RecentMags = () => {
  return (
    <div className="grid grid-cols-2 h-[566px] gap-[12px] mt-[1.5rem]">
      <div className="row-start-1 row-end-3 place-self-stretch  rounded-10 overflow-hidden relative">
        <Image src={ax} alt="" width={664} height={520} className="h-full w-full" />
        <div className="flex items-end justify-between  p-[1.5rem] absolute bottom-0 w-full bg-[linear-gradient(180deg,_#3F445F20,_#2B3048)]">
          <div>
            <span className="text-20 line-clamp-1 text-white font-bold">
              بیمه شخص ثالث خودرو چیست؟
            </span>
          </div>
        </div>
      </div>
      <div className="rounded-10 overflow-hidden relative">
        <Image src={ax} alt="" width={664} height={382} className="h-full w-full" />
        <div className="flex items-end justify-between p-[1.5rem] absolute bottom-0 w-full bg-[linear-gradient(180deg,_#3F445F20,_#2B3048)]">
          <div>
            <span className="text-20 line-clamp-1 text-white font-bold">
              بیمه شخص ثالث خودرو چیست؟
            </span>
          </div>
        
        </div>
      </div>
      <div className="rounded-10 overflow-hidden relative">
        <Image src={ax} alt="" width={664} height={382} className="h-full w-full" />
        <div className="flex flex-col justify-end gap-[0.25rem] p-[1.5rem] absolute bottom-0 w-full bg-[linear-gradient(180deg,_#3F445F20,_#2B3048)]">
        <span className="text-14 line-clamp-1 break-words text-white font-bold">
        بیمه شخص ثالث خودرو چیست و چرا باید خودرو ما بیمه داشته باشد؟
            </span>
        
          
        </div>
      </div>
      
    </div>
  );
};

export default RecentMags;
