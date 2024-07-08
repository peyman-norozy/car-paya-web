import React from "react";
import user from "@/public/assets/images/magUser.png";
import like from '@/public/assets/images/like.png'
import dislike from '@/public/assets/images/dislike.png'
import undo from '@/public/assets/images/undo.png'
import Image from "next/image";

const MagShowCommentsCard = () => {
  return (
    <div className="rounded-[0.5rem] p-[1rem] flex flex-col shadow-[0_0_4px_0_rgba(231_229_229_0.25)]">
      <div className="flex items-center gap-[1rem] justify-center">
        <Image src={user} alt="" width={48} height={48} />
        <div className="flex items-center justify-between w-full">
          <span className="text-[#354597]">name</span>
          <div className="flex items-center gap-[1rem] text-[#A5A0A0] text-[14px]">
            <span>۱۴:۳۱</span>
            <span>۱۴۰۲/۱۰/۱۰</span>
          </div>
        </div>
      </div>
      <div className="w-[88%] m-auto text-[#303030]">
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>
        <div className="flex items-start gap-[0.5rem] mt-[1rem]">
        <Image src={undo} alt="" width={24} height={24} />
            <p className="text-14">پاسخ : لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>
        </div>
      </div>
      <div className="flex items-center gap-[2rem] self-end mt-[1rem]">
        <div className="flex items-center gap-[0.5rem] text-[#5EB35C]">
            <span>10</span>
            <Image src={like} alt="" width={24} height={24} />
        </div>
        <div className="flex items-center gap-[0.5rem] text-[#E73C33]">
            <span>1</span>
          <Image src={dislike} alt="" width={24} height={24} />
        </div>
      </div>
    </div>
  );
};

export default MagShowCommentsCard;
