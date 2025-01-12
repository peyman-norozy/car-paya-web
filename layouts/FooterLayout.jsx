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
    (number) => number.todo.windowInnerWidth
  );

  useEffect(() => {
    if (
      pathName.startsWith("/services/") ||
      pathName.startsWith("/panel") ||
      pathName.startsWith("/login") ||
      pathName.startsWith("/periodic-service/")
    ) {
      setFooterState(false);
    } else {
      setFooterState(true);
    }
  }, [pathName, searchParams]);

  return (
    <footer
      className={`${props.className} bg-white absolute right-0 left-0 lg:pt-6 lg:pb-0 pt-6 pb-6 lg:px-[65px] px-0 ${footerState ? "pb-24" : "pb-0 lg:pt-0"} sm:pb-6 rounded-t-2xl grid lg:grid-cols-12 grid-cols-2 gap-6 text-[#3C3C3C] justify-around ${footerState ? "shadow-[0_-5px_8px_0_rgba(164,164,164,0.25)]" : ""}`}
    >
      {footerState ? (
        <>
          <div className="flex flex-col lg:flex-row w-full lg:gap-[99px] gap-4 max-w-[620px] m-auto lg:m-0 px-6 size1470:col-span-10 size1228:col-span-7 size1090:col-span-8 lg:col-span-9 col-span-2">
            <div className="lg:min-w-[350px] min-w-[300px] flex gap-3 flex-row lg:flex-col justify-start">
              <Image
                className="w-16 h-4"
                src={carpaya}
                alt="carcheck"
                width={60}
                height={18}
              />
              <a href="tel:02158919" className="flex gap-1 items-center">
                <span className="font-bold text-[#F66B34] text-sm">
                  021-58919
                </span>
                <i className="cc-call text-sm" />
              </a>
              <p className={"text-12 lg:block hidden "}>
                پشتیبانی هر روز هفته از ساعت 8 الی 20
              </p>
              <p className="text-12 hidden lg:block leading-6 text-justify">
                در کارپایا، ما به ارائه خدمات جامع و حرفه‌ای در زمینه خودرو
                متعهد هستیم. هدف ما ایجاد تجربه‌ای آسان و مطمئن برای خرید و فروش
                خودرو، تأمین بیمه، انجام خدمات دوره‌ای و معاینه فنی خودرو است.
                با تیمی متخصص و تجربه‌ای گسترده در صنعت خودرو، ما به مشتریان خود
                کمک می‌کنیم تا بهترین تصمیمات را با اطلاعات کافی بگیرند. به ما
                بپیوندید تا سفری مطمئن و بی‌دغدغه را در دنیای خودرو تجربه کنید.
              </p>
            </div>
            <div className="min-w-[100px] flex flex-col gap-4">
              <span className="font-bold text-sm lg:text-base text-[#1E67BF]">
                دسترسی سریع
              </span>
              <ul className="list-disc grid lg:grid-cols-1 grid-cols-2 pr-4 gap-4 text-[#3C3C3C] text-xs font-medium">
                <li className="w-fit">
                  <Link href={"https://carpaya.com/blog/about-us/"}>
                    درباره ما
                  </Link>
                </li>
                <li className="w-fit">
                  <Link href={"https://carpaya.com/blog/contact-us/"}>
                    تماس با ما
                  </Link>
                </li>
                <li className="w-fit">
                  <Link href={"https://carpaya.com/blog/"}>مجله ها</Link>
                </li>
                <li className="w-fit">
                  <Link href={"tel:02158919"}>ارتباط پشتیبانی</Link>
                </li>
                <li
                  className="w-fit cursor-pointer"
                  onClick={() => alert("به زودی")}
                >
                  قوانین و مقررات
                </li>
                <li
                  className="w-fit cursor-pointer"
                  onClick={() => alert("به زودی")}
                >
                  سوالات متداول
                </li>
              </ul>
            </div>
            <div className="min-w-[100px] lg:flex hidden flex-col gap-4 ">
              <span className="font-bold text-sm lg:text-base text-[#1E67BF]">
                خدمات کارپایا
              </span>
              <ul className="list-disc grid lg:grid-cols-1 grid-cols-2 pr-4 gap-4 text-[#3C3C3C] text-xs font-medium">
                <li className="w-fit">
                  <Link href={"/vehicle-inspection"}>کارشناسی خودرو</Link>
                </li>
                {/*<li className="w-fit">*/}
                {/*  <Link href={"#"}>بیمه</Link>*/}
                {/*</li>*/}
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
                {/*<li className="w-fit">*/}
                {/*  <Link href={"#"}>خرید و فروش</Link>*/}
                {/*</li>*/}
                <li className="w-fit">
                  <Link href={"https://carpaya.shop"}>فروشگاه</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-[48px] max-w-[420px] m-auto lg:m-0 px-6 size1470:col-span-2 size1228:col-span-5 size1090:col-span-4 lg:col-span-3 col-span-2">
            <div className={"flex flex-col items gap-6"}>
              <span
                className={
                  "text-16 font-bold text-[#1E67BF] lg:inline-block hidden"
                }
              >
                شبکه اجتماعی کارپایا
              </span>
              <div className="flex items-center gap-4 w-full justify-start">
                <Link href={"https://t.me/carpaya"} target={"_blank"}>
                  <Image
                    className="size-8"
                    src={telegram}
                    alt="carcheck"
                    width={32}
                    height={32}
                  />
                </Link>

                <Image
                  className="size-8"
                  src={x}
                  alt="carcheck"
                  width={32}
                  height={32}
                />
                {/*<Image*/}
                {/*  className="size-8"*/}
                {/*  src={youtube}*/}
                {/*  alt="carcheck"*/}
                {/*  width={32}*/}
                {/*  height={32}*/}
                {/*/>*/}
                <a
                  href={"https://www.instagram.com/carpaya.ir"}
                  target={"_blank"}
                >
                  <Image
                    className="size-8"
                    src={instagram}
                    alt="carcheck"
                    width={32}
                    height={32}
                  />
                </a>
                <a href="https://www.linkedin.com/in/hesam-nejadhassan-51180419a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                  <Image
                    className="size-8"
                    src={linkedin}
                    alt="carcheck"
                    width={32}
                    height={32}
                  />
                </a>
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
              <div className="flex gap-6 justify-center w-full">
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
                <div className="size-[60px]">
                  <Link href={"https://qr.mojavez.ir/track/13358573"}>
                    <Image
                      src={"/assets/icons/national-union.webp"}
                      alt={"mojavez kasbo kar"}
                      width={100}
                      height={100}
                    />
                  </Link>
                </div>
                <div className="size-[60px]">
                  <img
                    referrerPolicy="origin"
                    id="rgvjjzpenbqefukzoeukesgt"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window?.open(
                        "https://logo.samandehi.ir/Verify.aspx?id=372680&p=xlaojyoeuiwkgvkamcsiobpd",
                        "Popup",
                        "toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30"
                      );
                    }}
                    alt="logo-samandehi"
                    src="https://logo.samandehi.ir/logo.aspx?id=372680&p=qftiyndtodrfwlbqaqgwlyma"
                  />
                </div>
                {/*<div className="bg-gray-300 size-[60px]"></div>*/}
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
      {footerState && (
        <div
          className={
            "bg-[#FBFBFB] p-1 absolute -top-[33px] left-10 rounded-full"
          }
        >
          <ScrollTop />
        </div>
      )}
    </footer>
  );
};

export default Footer;
