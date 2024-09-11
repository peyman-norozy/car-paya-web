"use client";
import Image from "next/image";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import MobileBottomNav from "./MobileBottomNav";
import logoFarsi from "@/public/assets/images/logoFarsi.png";
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
      className={`${props.className} bg-white absolute right-0 left-0 p-6 ${innerWidthNumber > 1025 || condition?"pb-24":"pb-16"} sm:pb-6 rounded-t-2xl flex flex-col lg:flex-row gap-10 text-[#3C3C3C] justify-around ${condition ? "shadow-[0_-3px_6px_0_rgba(220,220,220,0.25)]" : ""}`}
    >
      {innerWidthNumber > 1025 || condition ? (
        <>
          <div className="flex flex-col w-full gap-4 max-w-[620px] m-auto lg:m-0">
            <div className="flex gap-4 flex-row">
              <div className="flex flex-col gap-1 m-auto">
                <Image
                  className="w-16"
                  src={logoFarsi}
                  alt="carcheck"
                  width={64}
                  height={40}
                />
                <span className="font-bold text-2xl">کارچک</span>
              </div>
              <p className="font-light text-sm lg:text-base text-justify">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است،
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-medium text-sm lg:text-base">
                دسترسی سریع
              </span>
              <ul className="list-disc grid grid-cols-2 pr-4 gap-4">
                <li className="text-xs lg:text-14">درباره ما</li>
                <li className="text-xs lg:text-14">مجله ها</li>
                <li className="text-xs lg:text-14">تماس با ما</li>
                <li className="text-xs lg:text-14">ارتباط پشتیبانی</li>
                <li className="text-xs lg:text-14">قوانین و مقررات</li>
                <li className="text-xs lg:text-14">سوالات متداول</li>
              </ul>
            </div>
          </div>
          <div className="w-full flex flex-col gap-6 max-w-[620px] m-auto lg:m-0">
            <div className="flex gap-1 items-center">
              <i className="cc-calling text-xl text-[#F58052]" />
              <span className="text-sm lg:text-base">58919 - 021</span>
            </div>
            <div className="flex gap-1 items-center">
              <i className="cc-calling text-xl text-[#F58052]" />
              <span className="text-sm lg:text-base">
                09388207903 - 09123622427
              </span>
            </div>
            <div className="flex gap-1 items-start">
              <i className="cc-calling text-xl text-[#F58052]" />
              <span className="text-sm lg:text-base leading-6">
                میدان جهاد ، خیابان اسدآبادی ، نبش کوچه انصاری ، پلاک 134 ، واحد
                10
              </span>
            </div>
            <div className="flex flex-row gap-4 text-[#F58052]">
              <i className="cc-facebook text-2xl" />
              <i className="cc-telegram text-2xl" />
              <i className="cc-twitter text-2xl" />
              <i className="cc-whatsapp text-2xl" />
              <i className="cc-calling text-2xl" />
            </div>
            <div className="flex gap-6 justify-center w-full">
              <a
                referrerpolicy="origin"
                target="_blank"
                href="https://trustseal.enamad.ir/?id=525362&Code=BHIlG5lcIDB6bsGDp8LzoME3yAXovE8d"
              >
                <img
                  className="size-12 lg:size-16"
                  referrerpolicy="origin"
                  src="https://trustseal.enamad.ir/logo.aspx?id=525362&Code=BHIlG5lcIDB6bsGDp8LzoME3yAXovE8d"
                  alt=""
                  style={{cursor:"pointer"}}
                  code="BHIlG5lcIDB6bsGDp8LzoME3yAXovE8d"
                />
              </a>
              <div className="bg-gray-400 size-[60px]"></div>
              <div className="bg-gray-400 size-[60px]"></div>
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
        </>
      ) : (
        ""
      )}

      {innerWidthNumber < 1025 && <MobileBottomNav />}
    </footer>
  );
};

export default Footer;
