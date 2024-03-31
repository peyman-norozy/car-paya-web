import React from "react";
import Button from "@/components/Button";
import Image from "next/image";

const ArticleSliderCard = () => {
  return (
    <div className="bg-white overflow-hidden border flex-1 flex flex-col h-auto items-center justify-between gap-4 text-14 rounded-xl bg-no-repeat bg-cover bg-center">
      <div className="w-full h-full flex flex-col gap-4 z-50">
        <div>
          <Image
            src={"/assets/images/article.png"}
            alt={"article image"}
            width={483}
            height={225}
          />
        </div>
        <div className="px-6 pb-4 flex flex-col items-center">
          <h2 className="text-center text-18"> بیمه شخص ثالث خودرو چیست؟</h2>
          <div className="flex justify-center w-full mt-4">
            <p className="text-justify leading-7 text-12 font-light">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
          </div>
          <Button
            type={"button"}
            class_name={
              "bg-[#EAEAEA] font-light py-3 px-2 flex item-center text-12 gap-1"
            }
          >
            <span>بیشتر بدانید</span>
            <Image
              src={"/assets/icons/angle-left.svg"}
              alt={"icon"}
              width={18}
              height={18}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArticleSliderCard;
