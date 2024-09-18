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

const Footer = (props) => {
  const params = useParams();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const innerWidthNumber = useSelector(
    (number) => number.todo.windowInnerWidth
  );
  const condition = !(
    pathName.includes("/vehicle-verification") &&
    searchParams.toString().includes("step=")
  );
  return (
    <footer
      className={`${props.className} bg-white absolute right-0 left-0 py-6 ${innerWidthNumber > 1025 || condition ? "pb-24" : "pb-16"} sm:pb-6 rounded-t-2xl flex flex-col lg:flex-row gap-6 text-[#3C3C3C] justify-around ${condition ? "shadow-[0_-5px_8px_0_rgba(164,164,164,0.25)]" : ""}`}
    >
      {innerWidthNumber > 1025 || condition ? (
        <>
          <div className="flex flex-col w-full gap-4 max-w-[620px] m-auto lg:m-0 px-6">
            <div className="flex gap-3 flex-row justify-start">
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
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-bold text-sm lg:text-base text-[#1E67BF]">
                دسترسی سریع
              </span>
              <ul className="list-disc grid grid-cols-2 pr-4 gap-4 text-[#3C3C3C] text-xs font-medium">
                <li className="w-fit">درباره ما</li>
                <li className="w-fit">مجله ها</li>
                <li className="w-fit">تماس با ما</li>
                <li className="w-fit">ارتباط پشتیبانی</li>
                <li className="w-fit">قوانین و مقررات</li>
                <li className="w-fit">سوالات متداول</li>
              </ul>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 max-w-[620px] m-auto lg:m-0 px-6">
            <span className="text-[#1E67BF] text-sm font-bold">
              ارتباط با ما
            </span>
            <div className="flex gap-1 items-start">
              <i className="cc-calling text-xl text-[#F58052]" />
              <span className="text-sm lg:text-base leading-6">
                میدان جهاد ، خیابان اسدآبادی ، نبش کوچه انصاری ، پلاک 134 ، واحد
                10
              </span>
            </div>
            <div className="flex items-center gap-4 w-full justify-center">
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
            <div className="flex gap-6 justify-center w-full">
              <a
                referrerpolicy="origin"
                target="_blank"
                href="https://trustseal.enamad.ir/?id=525362&Code=BHIlG5lcIDB6bsGDp8LzoME3yAXovE8d"
              >
                <img
                  className="bg-gray-300 size-[60px]"
                  referrerpolicy="origin"
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
            <div className="border-t border-[#BBBBBB] w-full px-4 pt-2 pb-4">
              <p className="text-[#888888] text-xs font-medium text-center">
                کلیه حقوق مادی و معنوی این وب سایت متعلق به شرکت آسان خودرو می
                باشد.
              </p>
            </div>
        </>
      ) : (
        ""
      )}

      {innerWidthNumber < 1025 && <MobileBottomNav />}
    </footer>
  );
};

export default Footer;
