import React from "react";
import Input from "../Input";
import Image from "next/image";
import Button from "../Button";

const MagComments = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-[22px]">دیدگاهتان را بنویسید</h3>
        <div>star rating</div>
      </div>
      <textarea className="mt-[1.5rem] min-h-[9rem] max-h-[9rem] rounded-[0.5rem] border border-[#B0B0B0] w-full"></textarea>
      <div className="flex items-center gap-[2rem] mt-[2rem]">
        <div className="flex items-center gap-[1.5rem] w-[80%]">
          <div className="relative flex items-center w-full h-[3rem] border border-[#B0B0B0] rounded-[0.5rem]">
            <p className="absolute top-[-12px] right-[4%] px-[0.25rem] bg-white text-[#454545] text-14">
              نام کاربری
            </p>
            <Image
              src="/assets/icons/user-edit.png"
              alt=""
              width={18}
              height={18}
              className="mr-[10px] ml-[5px]"
            />
            <Input
              className="outline-none pr-[5px] border-r-[2px] border-r-[#B0B0B0]"
              type="text"
              placeholder="مثال : ایمان"
            />
          </div>
          <div className="relative flex items-center w-full h-[3rem] border border-[#B0B0B0] rounded-[0.5rem]">
            <p className="absolute top-[-12px] right-[4%] px-[0.25rem] bg-white text-[#454545] text-14">
              ایمیل
            </p>
            <Image
              src="/assets/icons/user-edit.png"
              alt=""
              width={18}
              height={18}
              className="mr-[10px] ml-[5px]"
            />
            <Input
              className="outline-none pr-[5px] border-r-[2px] border-r-[#B0B0B0]"
              type="text"
              placeholder="مثال : iman@gmail.com"
            />
          </div>
        </div>
        <Button class_name="bg-BLUE_600 text-white h-[3rem] rounded-[0.5rem] font-bold text-center w-[20%]">
          ثبت دیدگاه
        </Button>
      </div>
    </div>
  );
};

export default MagComments;
