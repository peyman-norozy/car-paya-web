"use client";
import React from "react";
import ProductShowSlider from "@/components/ProductShowSlider/ProductShowSlider";
import Image from "next/image";
import { numberWithCommas } from "@/utils/function-utils";
import ProductIntroduction from "@/components/ProductIntroduction/ProductIntroduction";
import UserComment from "@/components/UserComment/UserComment";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import ProductSliderCard from "@/components/cards/ProductSliderCard/ProductSliderCard";

const ProductShow = ({ data }) => {
  const butteriesData = data.data;
  return (
    <div className={"size1056:mt-[77px] mt-0 bg-[#F9F9F9]"}>
      <div className={"max-w-[1600px] m-auto pt-[16px]"}>
        <section
          className={
            "flex gap-[21px] size1056:mx-0 mx-[20px] size752:flex-row flex-col"
          }
        >
          <div
            className={
              "flex size1056:flex-row flex-col size1056:items-start items-center gap-[21px] p-[16px] bg-[#FDFDFD] shadow-[0_0px_26px_0_rgba(0,0,0,0.1)] rounded-[5px]"
            }
          >
            <ProductShowSlider />
            <div className={"flex flex-col gap-[16px]"}>
              <h1>{butteriesData.name}</h1>
              <h2>ویژگی ها</h2>
              <div>
                <span>حجم کالا : </span>
                <span>۳.۷۸ لیتر</span>
              </div>
              <div>
                <span>مناسب برای خودرو : </span>
                <span>پژو ۴۰۵ / پرو پارس / پراید</span>
              </div>
              <div>
                <span>حجم کالا : </span>
                <span>۳.۷۸ لیتر</span>
              </div>
              <div>
                <span>مناسب برای خودرو : </span>
                <span>پژو ۴۰۵ / پرو پارس / پراید</span>
              </div>
              <div className={"flex gap-[16px] mt-[10px]"}>
                <i
                  className={
                    "cc-discount-shape-o text-[22px] text-[#E73C33] mt-1"
                  }
                />
                <p className={"text-[14px] font-light leading-8"}>
                  درخواست مرجوع کردن وغن موتور با دلیل انصراف از خرید تنها در
                  صورتی قابل تایید است که کالا در شرایط اولیه باشد (در صورت پلمپ
                  بودن، کالا نباید باز شده باشد).
                </p>
              </div>
            </div>
          </div>
          <div>
            <div
              className={
                "size752:w-[319px] w-full h-full bg-[#FDFDFD] shadow-[0_0px_26px_0_rgba(0,0,0,0.1)] rounded-[5px] p-[22px]"
              }
            >
              <div className={"flex flex-row-reverse gap-4 p-[10px]"}>
                <div
                  className={
                    "shadow-[0_0px_26px_0_rgba(0,0,0,0.1)] p-2 rounded-[5px]"
                  }
                >
                  <Image
                    src={"/assets/icons/favorite 1.svg"}
                    alt={"icon"}
                    width={20}
                    height={20}
                  />
                </div>
                <i
                  className={
                    "cc-share text-[20px] shadow-[0_0px_26px_0_rgba(0,0,0,0.1)] p-2 rounded-[5px]"
                  }
                />
                <div
                  className={
                    "shadow-[0_0px_26px_0_rgba(0,0,0,0.1)] p-2 rounded-[5px]"
                  }
                >
                  <Image
                    src={"/assets/icons/-compare_90080 1.svg"}
                    alt={"icon"}
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div
                className={
                  "text-[12px] text-[#4F4F4F] flex flex-col gap-[16px] mt-[25px]"
                }
              >
                <section className={"flex items-center gap-[9px]"}>
                  <Image
                    src={"/assets/icons/Frame 48101891.svg"}
                    alt={"icon"}
                    width={22}
                    height={22}
                  />
                  <p>
                    <span className={"text-[14px]"}> زمانت اصالت کالا</span>
                    <span> ارائه تضمین اصل بودن کالا</span>
                  </p>
                  <span></span>
                </section>
                <section className={"flex items-center gap-[9px]"}>
                  <Image
                    src={"/assets/icons/Frame.svg"}
                    alt={"icon"}
                    width={22}
                    height={22}
                  />
                  <p>
                    <span className={"text-[14px]"}> بازگشت کالا</span>
                    <span> ضمانت بازگشت کالا تا ۷ روز</span>
                  </p>
                </section>
                <section className={"flex items-center gap-[9px]"}>
                  <Image
                    src={"/assets/icons/Frame2.svg"}
                    alt={"icon"}
                    width={22}
                    height={22}
                  />
                  <p>
                    <span className={"text-[14px]"}> مشاوره</span>
                    <span> رایگان ۲۴ ساعته</span>
                  </p>
                </section>
                <section className={"flex items-center gap-[9px]"}>
                  <Image
                    src={"/assets/icons/Frame4.svg"}
                    alt={"icon"}
                    width={22}
                    height={22}
                  />
                  <p>
                    <span className={"text-[14px]"}> ارسال سراسری</span>
                    <span> ارسال سراسری به کل ایران</span>
                  </p>
                </section>
                <section className={"flex items-center gap-[9px]"}>
                  <Image
                    src={"/assets/icons/basket 1.svg"}
                    alt={"icon"}
                    width={22}
                    height={22}
                  />
                  <span className={"text-[#00BBF6]"}>۵ موجود در انبار</span>
                </section>
              </div>
              <hr className={"mt-[18px] mb-[18px]"} />
              <div className={"flex items-center justify-between"}>
                <div className={"w-[48px] h-[48px] relative"}>
                  <Image
                    src={"/assets/icons/OBJECTS.svg"}
                    alt={"icon"}
                    width={48}
                    height={48}
                  />
                  <span
                    className={
                      "text-white absolute top-[11px] right-[13px] text-[14px]"
                    }
                  >
                    18%
                  </span>
                </div>
                <div className={"relative"}>
                  <span>{numberWithCommas(430000)}</span>
                  <span>تومان</span>
                  <div
                    className={
                      "text-left text-[#919191] absolute top-[28px] left-0 line-through"
                    }
                  >
                    {numberWithCommas(570000)}
                  </div>
                </div>
              </div>
              <button
                className={
                  "bg-[#354597] text-center text-white flex items-center justify-center gap-2 text-[14px] w-full py-2 mt-[24px] rounded-[10px]"
                }
              >
                <Image
                  src={"/assets/icons/shopping-cart.svg"}
                  alt={"icon"}
                  width={24}
                  height={24}
                />
                <span>افزودن به سبد خرید</span>
              </button>
            </div>
          </div>
        </section>
      </div>
      <ProductIntroduction />
      <div
        className={
          "max-w-[1600px] mt-[32px] size1056:mx-auto mx-[20px] m-auto flex gap-[32px] size1056:flex-row flex-col-reverse"
        }
      >
        <UserComment />
        <div
          className={
            "size1056:w-[319px] w-full text-[#354597] bg-[#ECEEF8] self-start rounded-[10px]"
          }
        >
          <p className={"px-[16px] py-[11px] size1056:text-right text-center"}>
            پیشنهاد کار چک می
          </p>
          <ProductSliderCard width={"w-full"} responsiveWidth={"w-full"} />
        </div>
      </div>
      <div className={"max-w-[1600px] m-auto"}>
        <ProductSlider />
      </div>
    </div>
  );
};

export default ProductShow;
