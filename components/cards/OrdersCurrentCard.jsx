import React from "react";
import Image from "next/image";

const OrdersCurrentCard = () => {
  const ordersVeiw = () => {
    return (
      <button
        type={"button"}
        className={"text-[#354597] flex items-center gap-[4px]"}
      >
        <span className={"text-[14px]"}>مشاهده سفارش</span>
        <i className={"cc-left text-[30px]"} />
      </button>
    );
  };

  return (
    <li
      className={
        "bg-[#FDFDFD] shadow-[0_0_6px_0_rgba(180,180,180,0.3)] size617:py-[32px] py-[22px] size617:px-[24px] px-[12px] rounded-[8px]"
      }
    >
      <div className={"flex items-center justify-between mb-[8px]"}>
        <div className={"flex gap-[4px]"}>
          <i className={"cc-tick bg-[#67CD83] rounded-full p-1"} />
          <span className={"text-[#898989]"}> ۲۸ فروردین ۱۴۰۳</span>
        </div>
        <div className={"size617:hidden block"}>{ordersVeiw()}</div>
      </div>
      <ul
        className={
          "text-[#303030] flex size617:gap-[40px] gap-[8px]s mb-[14px] size617:flex-row flex-col-reverse"
        }
      >
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
        <div className={"self-end size617:block hidden"}>{ordersVeiw()}</div>
      </div>
    </li>
  );
};

export default OrdersCurrentCard;
