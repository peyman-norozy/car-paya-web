import React from "react";
import Button from "@/components/Button";

const SpecialOffersSliderCard = () => {
  return (
    <div className="bg-white overflow-hidden shadow-lg flex-1 flex flex-col size411:w-[340px] w-[250px] h-auto items-center justify-between gap-4 text-14 rounded-xl bg-[url(/assets/images/carAnalyse.jpeg)] bg-no-repeat bg-cover bg-center relative">
      <div className="absolute top-0 bg-[#EAEAEA] opacity-70 bottom-0 right-0 left-0"></div>
      <div className="w-full h-full px-6 py-8 flex flex-col gap-4 z-50">
        <h2 className="h-[20px] text-center text-16">سرویس دوره ای</h2>
        <div className="flex justify-center w-full">
          <p className="text-justify leading-7 text-12 font-light">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </div>
        <Button type={"button"} class_name={"bg-[#C0C0C0] font-light py-3"}>
          بیشتر بدانید
        </Button>
      </div>
    </div>
  );
};

export default SpecialOffersSliderCard;
