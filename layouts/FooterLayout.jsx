"use client";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import MobileBottomNav from "./MobileBottomNav";
import logoFarsi from "@/public/assets/images/logoFarsi.png"
const Footer = (props) => {
  const params = useParams();
  const pathName = usePathname().split("/")[1];
  const innerWidthNumber = useSelector(
    (number) => number.todo.windowInnerWidth,
  );

  return (
    <footer
      className={`${props.className} ${
        pathName === "panel" && params["all-panel-tab"] ? "hidden" : ""
      } bg-[#071C2C] absolute right-0 left-0 p-6 rounded-t-2xl flex flex-col lg:flex-row gap-10 text-[#FEFEFE] justify-around`}
    >
      <div className="flex flex-col w-full gap-8 max-w-[620px] m-auto lg:m-0">
        <div className="flex gap-4 sm:flex-row flex-col">
          <div className="flex flex-col gap-1 m-auto">
            <Image className="w-16" src={logoFarsi} alt="carcheck" width={64} height={40}/>
            <span className="font-bold text-2xl">کارچک</span>
          </div>
          <p className="font-light text-sm lg:text-base text-justify">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است،
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold text-[#FEFEFE] text-sm lg:text-base">دسترسی سریع</span>
          <ul className="list-disc flex flex-row pr-4 gap-10">
            <li className="text-xs lg:text-14">ارتباط پشتیبانی</li>
            <li className="text-xs lg:text-14">تماس با ما</li>
            <li className="text-xs lg:text-14">قوانین</li>
            <li className="text-xs lg:text-14">درباره ما</li>
          </ul>
          <div className="flex gap-6">
          <a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=516939&Code=2tAiW764fGvFlV9b5qFrVhBbe6rQHow2'>
          <img className="size-12 lg:size-16" referrerpolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=516939&Code=2tAiW764fGvFlV9b5qFrVhBbe6rQHow2' alt='' style={{cursor:'pointer'}} code='2tAiW764fGvFlV9b5qFrVhBbe6rQHow2'/>
          </a>
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
      <div className="w-full flex flex-col gap-6 max-w-[620px] m-auto lg:m-0">
        <div className="flex gap-2 items-center">
          <i className="cc-calling text-2xl"/>
          <span className="text-sm lg:text-base">58919 - 021</span>
        </div>
        <div className="flex gap-2 items-center">
          <i className="cc-calling text-2xl"/>
          <span className="text-sm lg:text-base">09388207903 - 09123622427</span>
        </div>
        <div className="flex gap-2 items-center">
          <i className="cc-calling text-2xl"/>
          <span className="text-sm lg:text-base">https://carcheckme.ir</span>
        </div>
        <div className="flex gap-2 items-center">
          <i className="cc-calling text-2xl"/>
          <span className="text-sm lg:text-base">میدان جهاد ، خیابان اسدآبادی ، نبش کوچه انصاری ، پلاک 134 ، واحد 10</span>
        </div>
        <div className="flex flex-row gap-4">
          <i className="cc-facebook text-2xl"/>
          <i className="cc-telegram text-2xl"/>
          <i className="cc-twitter text-2xl"/>
          <i className="cc-whatsapp text-2xl"/>
          <i className="cc-calling text-2xl"/>
        </div>
      </div>
      {innerWidthNumber < 1025 && <MobileBottomNav />}
    </footer>
  );
};

export default Footer;
