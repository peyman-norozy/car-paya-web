'use client'
import Image from "next/image";
import Button from "@/components/Button";
import PeriodicServiceCard from "@/components/cards/PeriodicServiceCard";
import Input from "@/components/Input";
import PeriodicServiceTabCard from "@/components/cards/PeriodicServiceTabCard";
import PeriodicServiceUnderCard from "@/components/cards/PeriodicServiceUnderCard";
import {useState} from "react";
import cluch from "@/public/assets/images/cluch-bumpers.png";
import battery from "@/public/assets/images/battery-product.svg";
import service from "@/public/assets/images/periodic-service.png";
import car_bg from "@/public/assets/images/car-background.png";
import insurance from "@/public/assets/images/insurance.png";

const workData = [
  {
    title: "تعویض روغن",
    price: 3000000,
    has_come: 1608663149,
  },
  {
    title: "تعویض روغن",
    price: 3000000,
    has_come: 1708863149,
  },
];

const periodicServiceData = [
  {
    title: "کارشناسی خودرو",
    icon: "/assets/images/cluch-bumpers.png",
    href: "/vehicle-verification",
  },
  {
    title: "بیمه",
    icon: insurance,
    href: "/",
  },
  {
    title: "شناسنامه و سوابق خودرو",
    icon: car_bg,
    href: "/profile/my-vehicle/my-car",
  },
  {
    title: "سرویس دوره ای",
    icon: service,
    href: "/periodic-service"
  },
  {
    title: "فروشگاه باتری",
    icon: battery,
    href: "/batteries"
  },
  {
    title: "فیلتر و روغن (لوازم یدکی)",
    icon: cluch,
    href: "/products"
  },

];

const periodicServiceUnderCardData = [
  {
    title: "سرویس دوره ای اقتصادی",
    titleDescription: "(شامل ۱۷ نوع خدمات)",
    options: [
      "تعویض روغن موتور",
      "تعویض فیلتر هوا",
      "تعویض فیلتر روغن",
      "تعویض فیلتر کابین",
    ],
  },
  {
    title: "سرویس دوره‌ای استاندارد",
    titleDescription: "(شامل ۱۷ نوع خدمات)",
    options: [
      "تعویض روغن موتور",
      "تعویض فیلتر هوا",
      "تعویض فیلتر روغن",
      "تعویض فیلتر کابین",
    ],
  },
  {
    title: "سرویس دوره‌ای ویژه",
    titleDescription: "(شامل ۱۷ نوع خدمات)",
    options: [
      "تعویض روغن موتور",
      "تعویض فیلتر هوا",
      "تعویض فیلتر روغن",
      "تعویض فیلتر کابین",
    ],
  },
];

const PeriodicService = () => {
  const [isClicked, setIsClicked] = useState(3);

  const selectTabHandler = (index) => {
    setIsClicked(index);
  };
  return (
    <div className="flex items-start gap-4 m-4 mt-[88px]">
      <div className="w-[360px] p-4 flex flex-col gap-4 shadow-[0_0_6px_0_rgba(177,177,177,1)] rounded-10">
        <span>فاکتور فروش</span>
        <section className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div>
              <Image
                src={"/assets/images/brand-7-model.jpg"}
                alt={"icon"}
                width={60}
                height={60}
              />
            </div>
            <span>هیوندای i8</span>
          </div>
          <div>
            <Button
              type={"button"}
              class_name={
                "text-12 shadow-[0_0_6px_0_rgba(177,177,177,1)] py-1 px-4 rounded-5 hover:bg-stone-200"
              }
            >
              تغییر خودرو
            </Button>
          </div>
        </section>
        <section>
          <ul className="flex flex-col gap-4">
            {workData.map((item) => (
              <PeriodicServiceCard key={item.has_come} item={item} />
            ))}
          </ul>
        </section>
        <section className="text-14 flex justify-between items-center mt-4 gap-4">
          <span>کد تخفیف</span>
          <Input
            type={"text"}
            placeholder={"کد تخفیف خود را وارد کنید..."}
            className={
              "outline-none placeholder:text-12 border flex-1 py-2 px-1 rounded-5"
            }
          />
        </section>
        <section className="flex justify-between items-center text-14">
          <Button
            type={"button"}
            class_name={"bg-red-500 text-white rounded-5 py-2 px-4"}
          >
            پرداخت نهایی
          </Button>
          <div className="flex gap-2">
            <span>مبلغ نهایی:</span>
            <span>6.000.000 تومان</span>
          </div>
        </section>
      </div>
      <div className={"flex-1"}>
        <ul className={"flex items-baseline gap-4"}>
          {periodicServiceData.map((item, index) => {
            return <PeriodicServiceTabCard
                href={item.href}
                isClicked={isClicked}
                onClick={() => selectTabHandler(index)}
                index={index}
                key={index}
                title={item.title}
                src={item.icon}
                width={60}
                height={60}
            />;
          })}
        </ul>
        <div className={"mt-14"}>
          <ul className={"flex flex-col gap-4"}>
            {periodicServiceUnderCardData.map((item, index) => (
              <PeriodicServiceUnderCard key={index} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PeriodicService;
