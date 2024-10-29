"use client";
import Image from "next/image";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import MobileBottomNav from "./MobileBottomNav";
import carpaya from "@/public/assets/images/carpaya.png";
import telegram from "@/public/assets/images/telegram.png";
import x from "@/public/assets/images/x.png";
import youtube from "@/public/assets/images/youtube.png";
import instagram from "@/public/assets/images/instagram.png";
import linkedin from "@/public/assets/images/linkedin.png";
import { useEffect, useState } from "react";
import Link from "next/link";
import ScrollTop from "@/components/ScrollTop";

const Footer = (props) => {
  const [footerState, setFooterState] = useState(true);
  const params = useParams();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const innerWidthNumber = useSelector(
    (number) => number.todo.windowInnerWidth,
  );

  useEffect(() => {
    if (
      pathName.includes("/services/vehicle-inspection") &&
      searchParams.toString().includes("step=")
    ) {
      setFooterState(false);
    } else if (pathName.startsWith("/services/batteries/")) {
      setFooterState(false);
    } else if (pathName.startsWith("/services/detailing/")) {
      setFooterState(false);
    } else {
      setFooterState(true);
    }
  }, [pathName, searchParams]);

  return (
    <footer
      className={`${props.className} bg-white absolute right-0 left-0 lg:pt-6 lg:pb-0 pt-6 pb-6 lg:px-[65px] px-0 ${innerWidthNumber > 1025 || footerState ? "pb-24" : "pb-16"} sm:pb-6 rounded-t-2xl grid lg:grid-cols-12 grid-cols-2 gap-6 text-[#3C3C3C] justify-around ${footerState ? "shadow-[0_-5px_8px_0_rgba(164,164,164,0.25)]" : ""}`}
    >
      {innerWidthNumber > 1025 || footerState ? (
        <>
          <div className="flex flex-col lg:flex-row w-full lg:gap-[99px] gap-4 max-w-[620px] m-auto lg:m-0 px-6 size1470:col-span-6 size1228:col-span-7 size1090:col-span-8 lg:col-span-9 col-span-2">
            <div className="flex gap-3 flex-row lg:flex-col justify-start">
              <Image
                className="w-16 h-4"
                src={carpaya}
                alt="carcheck"
                width={60}
                height={18}
              />
              <a href="tel:02158919" className="flex gap-1 items-center">
                <span className="font-bold text-[#F66B34] text-sm">58919</span>
                <i className="cc-call text-sm" />
              </a>
              <p className={"text-12 lg:block hidden"}>
                پشتیبانی هر روز هفته از ساعت 8 الی 20
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-bold text-sm lg:text-base text-[#1E67BF]">
                دسترسی سریع
              </span>
              <ul className="list-disc grid lg:grid-cols-1 grid-cols-2 pr-4 gap-4 text-[#3C3C3C] text-xs font-medium">
                <li className="w-fit">درباره ما</li>
                <li className="w-fit">مجله ها</li>
                <li className="w-fit">تماس با ما</li>
                <li className="w-fit">ارتباط پشتیبانی</li>
                <li className="w-fit">قوانین و مقررات</li>
                <li className="w-fit">سوالات متداول</li>
              </ul>
            </div>
            <div className="lg:flex hidden flex-col gap-4 ">
              <span className="font-bold text-sm lg:text-base text-[#1E67BF]">
                خدمات کارپایا
              </span>
              <ul className="list-disc grid lg:grid-cols-1 grid-cols-2 pr-4 gap-4 text-[#3C3C3C] text-xs font-medium">
                <li className="w-fit">
                  <Link href={"/vehicle-inspection"}>کارشناسی خودرو</Link>
                </li>
                <li className="w-fit">
                  <Link href={"#"}>بیمه</Link>
                </li>
                <li className="w-fit">
                  <Link href={"/periodic-service"}>سرویس دوره ای</Link>
                </li>
                <li className="w-fit">
                  <Link
                    href={
                      "/batteries?attribute_slug=type_vehicle&attribute_value=car"
                    }
                  >
                    باتری
                  </Link>
                </li>
                <li className="w-fit">
                  <Link href={"/detailing"}>دیتیلینگ</Link>
                </li>
                <li className="w-fit">
                  <Link href={"#"}>خرید و فروش</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-[48px] max-w-[420px] m-auto lg:m-0 px-6 size1470:col-span-6 size1228:col-span-5 size1090:col-span-4 lg:col-span-3 col-span-2">
            <div className={"flex flex-col items gap-6"}>
              <span
                className={
                  "text-16 font-bold text-[#1E67BF] lg:inline-block hidden"
                }
              >
                شبکه اجتماعی کارپایا
              </span>
              <div className="flex items-center gap-4 w-full justify-start">
                <Image
                  className="size-8"
                  src={telegram}
                  alt="carcheck"
                  width={32}
                  height={32}
                />
                <Image
                  className="size-8"
                  src={x}
                  alt="carcheck"
                  width={32}
                  height={32}
                />
                <Image
                  className="size-8"
                  src={youtube}
                  alt="carcheck"
                  width={32}
                  height={32}
                />
                <Image
                  className="size-8"
                  src={instagram}
                  alt="carcheck"
                  width={32}
                  height={32}
                />
                <Image
                  className="size-8"
                  src={linkedin}
                  alt="carcheck"
                  width={32}
                  height={32}
                />
              </div>
            </div>

            <div className={"flex flex-col gap-6"}>
              <span
                className={
                  "text-16 font-bold text-[#1E67BF] lg:inline-block hidden"
                }
              >
                نمادها و نشانه ها
              </span>
              <div className="flex gap-6 justify-start w-full">
                <a
                  referrerPolicy="origin"
                  target="_blank"
                  href="https://trustseal.enamad.ir/?id=525362&Code=BHIlG5lcIDB6bsGDp8LzoME3yAXovE8d"
                >
                  <img
                    className="bg-gray-300 size-[60px]"
                    referrerPolicy="origin"
                    src="https://trustseal.enamad.ir/logo.aspx?id=525362&Code=BHIlG5lcIDB6bsGDp8LzoME3yAXovE8d"
                    alt=""
                    style={{ cursor: "pointer" }}
                    code="BHIlG5lcIDB6bsGDp8LzoME3yAXovE8d"
                  />
                </a>
                <div className="bg-gray-300 size-[60px]"></div>
                <div className="bg-gray-300 size-[60px]"></div>
                {/* <Image
              src="/assets/icons/Enemad.svg"
              alt="enamd"
              width={60}
              height={60}
              className="m-0"
            />
            <Image
              src="/assets/icons/Enemad.svg"
              alt="enamd"
              width={60}
              height={60}
              className="m-0"
            />     */}
              </div>
            </div>
          </div>
          <div className="border-t border-[#BBBBBB] w-full px-4 pt-4 pb-4 lg:col-span-12 col-span-2 lg:mb-0 mb-20 flex justify-center items-center">
            <p className="text-[#888888] text-xs font-medium text-center h-full">
              کلیه حقوق مادی و معنوی این وب سایت متعلق به شرکت آسان خودرو می
              باشد.
            </p>
          </div>
        </>
      ) : (
        ""
      )}
      {innerWidthNumber < 1025 && <MobileBottomNav />}
      <div
        className={"bg-[#F4F4F4] p-1 absolute -top-[33px] left-10 rounded-full"}
      >
        <ScrollTop />
      </div>
    </footer>
  );
};

export default Footer;
