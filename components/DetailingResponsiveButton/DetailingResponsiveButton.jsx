import React from "react";
import Button from "@/components/Button";

const DetailingResponsiveButton = () => {
  return (
    <div className={"flex mt-[16px] justify-between gap-[16px]"}>
      <div>
        <Button
          class_name={
            "border border-[#007E00] text-[#007E00] size666:w-[160px] w-[150px] size666:h-[40px] h-[32px] size666:text-[14px] text-[12px] rounded-[8px] "
          }
        >
          مشاهده جزییات
        </Button>
      </div>
      <div>
        <Button
          class_name={
            "bg-[#F66B34] text-white size666:w-[160px] w-[150px] size666:h-[40px] h-[32px] size666:text-[14px] text-[12px] rounded-[8px] siz666:w-"
          }
        >
          افزودن به سفارش
        </Button>
      </div>
    </div>
  );
};

export default DetailingResponsiveButton;
