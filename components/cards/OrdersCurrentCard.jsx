import React from "react";
import Image from "next/image";

const OrdersCurrentCard = () => {
  return (
    <li
      className={
        "bg-[#FDFDFD] shadow-[0_0_6px_0_rgba(180,180,180,0.3)] py-[32px] px-[24px] rounded-[8px]"
      }
    >
      <div className={"flex gap-[4px] mb-[8px]"}>
        <i className={"cc-tick bg-[#67CD83] rounded-full p-1"} />
        <span className={"text-[#898989]"}> ۲۸ فروردین ۱۴۰۳</span>
      </div>
      <ul className={"text-[#303030] flex gap-[40px] mb-[14px]"}>
        <li>
          <span>عنوان: </span>
          <span>روغن موتور</span>
        </li>
        <li>
          <span>کد سفارش: </span>
          <span>123456789</span>
        </li>
        <li>
          <span>مبلغ: </span>
          <span>122000</span>
        </li>
      </ul>
      <hr className={"bg-[#67CD83] h-[1px] mb-[10px]"} />
      <div className={"flex justify-between"}>
        <section className={"flex items-center gap-[16px]"}>
          <Image
            src={"/assets/images/oil28.png"}
            alt={"oil"}
            width={65}
            height={67}
          />
          <Image
            src={"/assets/images/oil28.png"}
            alt={"oil"}
            width={65}
            height={67}
          />
          <Image
            src={"/assets/images/oil28.png"}
            alt={"oil"}
            width={65}
            height={67}
          />
          <Image
            src={"/assets/images/oil28.png"}
            alt={"oil"}
            width={65}
            height={67}
          />
        </section>
        <section
          className={"text-[#354597] flex items-center gap-[4px] self-end"}
        >
          <span className={"text-[14px]"}>مشاهده سفارش</span>
          <i className={"cc-left text-[30px]"} />
        </section>
      </div>
    </li>
  );
};

export default OrdersCurrentCard;
