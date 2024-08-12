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
          <p className="font-light text-justify">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است،
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold text-[#FEFEFE]">دسترسی سریع</span>
          <ul className="list-disc flex flex-row pr-4 gap-10">
            <li className="text-14">ارتباط پشتیبانی</li>
            <li className="text-14">تماس با ما</li>
            <li className="text-14">قوانین</li>
            <li className="text-14">درباره ما</li>
          </ul>
          <div className="flex gap-6">
            <Image
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
            />
            <Image
              src="/assets/icons/Enemad.svg"
              alt="enamd"
              width={60}
              height={60}
              className="m-0"
            />    
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-6 max-w-[620px] m-auto lg:m-0">
        <div className="flex gap-2 items-center">
          <i className="cc-calling text-2xl"/>
          <span>09124277162</span>
        </div>
        <div className="flex gap-2 items-center">
          <i className="cc-calling text-2xl"/>
          <span>09124277162 - 02126876736</span>
        </div>
        <div className="flex gap-2 items-center">
          <i className="cc-calling text-2xl"/>
          <span>www.amlakeamin.com</span>
        </div>
        <div className="flex gap-2 items-center">
          <i className="cc-calling text-2xl"/>
          <span>میدان هروی، تقاطع وفامنش و آزادی، پلاک ۶۲، ساختمان ایلیا طبقه دوم، واحد ۸</span>
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
