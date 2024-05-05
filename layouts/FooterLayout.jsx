"use client"
import FooterAdverticeCard from "@/components/cards/FooterAdverticeCard";
import {INTERNAL_PATHS} from "@/configs/routes.config";
import Image from "next/image";
import {useParams, usePathname} from "next/navigation";
import Link from "next/link";
import { useSelector } from "react-redux";
import MobileBottomNav from "./MobileBottomNav";

const Footer = (props) => {
    const params = useParams()
    const pathName = usePathname().split("/")[1]
    const innerWidthNumber = useSelector(
        (number) => number.todo.windowInnerWidth,
      );
    const footerCardData = [
        {
            imgUrl: "/assets/icons/maintenance.svg",
            title: "پیوستن به شبکه نمایندگان سیار",
            description: "CAR CHECK",
            href: INTERNAL_PATHS.MOBILE_REPRESENTATIVES,
            id: "car_check-1",
        },
        {
            imgUrl: "/assets/icons/maintenance.svg",
            title: "پیوستن به شبکه نمایندگان ثابت",
            description: "CAR CHECK",
            href: INTERNAL_PATHS.PERMANENT_REPRESENTATIVES,
            id: "car_check-2",
        },
        {
            imgUrl: "/assets/icons/maintenance.svg",
            title: "پیوستن به شبکه نمایندگان تامین کنندگان",
            description: "CAR CHECK",
            href: INTERNAL_PATHS.SUPPLIER_REPRESENTATIVES,
            id: "car_check-3",
        },
    ];

    const fastAccessData = [
        {title: "صفحه نخست", href: "#"},
        {title: "خدمات", href: "#"},
        {title: "برندها", href: "#"},
        {title: "درباره ما", href: "#"},
        {title: "تماس با ما", href: "#"},
        {title: "بلاگ ما", href: "#"},
    ];
    return (
        <footer
            className={`${props.className} ${
                pathName === "panel" && params["all-panel-tab"] ? "hidden" : ""
            } bg-[#2C5D83] mt-16 size1000:mb-0 mb-[50px] absolute right-0 left-0`}
        >
            <div className={"max-w-[1600px] m-auto"}>
                <div>
                    <div
                        className="size900:px-[138px] size752:px-[210px] size671:px-[190px] size460:px-[100px] size366:px-[50px] px-[10px]">
                        <ul className="grid size1190:grid-cols-3 size900:grid-cols-2 grid-cols-1 items-center w-full pt-[40px] gap-[24px]">
                            {footerCardData.map((item) => (
                                <FooterAdverticeCard
                                    key={item.id}
                                    footerCardDataItem={item}
                                    href={item.href}
                                />
                            ))}
                        </ul>
                    </div>
                    <div
                        className="grid size900:grid-cols-3 grid-cols-1 gap-[24px] mt-[90px] pb-[10px] size900:px-[138px] size752:px-[210px] size671:px-[190px] size460:px-[100px] size366:px-[50px] px-[10px] text-white">
                        <div className="flex-1 flex flex-col items-end gap-[20px]">
                            <span className="w-full text-20 font-bold">درباره کار چک می</span>
                            <p className="text-14 leading-7 text-justify font-light">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                            </p>
                            <span className="self-start text-20 font-bold font-light">
              شماره ثبت: ٦٠٣٥٢٨
            </span>
                        </div>
                        <div className="flex-1 flex flex-col gap-[20px] size900:items-center items-start">
                            <ul className="flex flex-col gap-2">
                                <li className="text-20 font-bold mb-[20px]">دسترسی سریع</li>
                                {fastAccessData.map((item, index) => (
                                    <li className="text-14 font-light" key={index}>
                                        <Link href={item.href}></Link>
                                        {item.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 flex flex-col items-end gap-[20px] my-0">
                            <span className="w-full text-20">ارتباط با ما</span>
                            <div className="w-full text-14 flex gap-4">
                                <div>
                                    <Image
                                        src="/assets/icons/Call 1.svg"
                                        alt="location icon"
                                        width={22}
                                        height={22}
                                    />
                                </div>
                                <div className="w-full pr-2 font-light">
                                    <span dir="ltr">021 8810 9524</span>
                                </div>
                            </div>
                            <div className="w-full text-14 flex gap-4">
                                <div>
                                    <Image
                                        src="/assets/icons/Message 1.svg"
                                        alt="phone call icon"
                                        width={22}
                                        height={22}
                                    />
                                </div>
                                <div className="w-full flex flex-col pr-2 font-light">
                                    <span className="w-full">CarCheckMe@gmail.com </span>
                                </div>
                            </div>
                            <div className="w-full text-14 flex gap-4">
                                <div>
                                    <Image
                                        src="/assets/icons/Time Square 1.svg"
                                        alt="location icon"
                                        width={22}
                                        height={22}
                                    />
                                </div>
                                <div className="w-full pr-2 font-light">
                                    <span dir="ltr">ساعت کاری 8صبح تا 20 شب</span>
                                </div>
                            </div>
                            <div className="text-20 flex flex-col gap-4 w-full">
                                <span>مجوزهای فعالیت</span>
                                <div className="flex gap-16 w-full">
                                    <Image
                                        src="/assets/icons/Enemad.svg"
                                        alt="enamd"
                                        width={60}
                                        height={60}
                                        className="m-0"
                                    />
                                    <Image
                                        src="/assets/icons/Samandehi.svg"
                                        alt="enamd"
                                        width={60}
                                        height={60}
                                        className="m-0"
                                    />
                                    <Image
                                        src="/assets/icons/Job Majazi .svg"
                                        alt="enamd"
                                        width={60}
                                        height={60}
                                        className="m-0"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-white flex flex-col justify-center items-center pb-[40px] gap-4">
                        <span>آدرس</span>
                        <p className="font-light text-14">
                            آدرس يوسف آباد - خيابان اسدآبادي - نبش كوچه شانزدهم - پلاك١٣٤ -
                            واحد١٠
                        </p>
                    </div>
                </div>
                <div
                    className="bg-white size671:flex hidden items-center justify-around text-14 absolute right-0 left-0">
                    <p className="size900:text-[14px] text-[12px]">
                        تمامی حقوق این وبسایت متعلق به CarCheck میباشد
                    </p>
                    <Image
                        src="/assets/icons/Image-1.svg"
                        alt="website icon"
                        className="m-0 size900:w-[200px] w-[100px]"
                        width={200}
                        height={200}
                    />
                    <p className="size900:text-[14px] text-[12px]">
                        تمامی حقوق این وبسایت متعلق به CarCheck میباشد
                    </p>
                </div>
            </div>
            {innerWidthNumber < 1000 && <MobileBottomNav/>}
        </footer>
    );
};

export default Footer;
