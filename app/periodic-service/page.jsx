import Image from "next/image";
import Button from "@/components/Button";
import PeriodicServiceCard from "@/components/cards/PeriodicServiceCard";
import Input from "@/components/Input";
import PeriodicServiceUnderCard from "@/components/cards/PeriodicServiceUnderCard";
import {Suspense} from "react";
import {serviceData,workData} from "@/staticData/data";
import CarServicesSlider from "@/components/CarServicesSlider/CarServicesSlider";
import SelectVehicleBoxComponent from "@/components/periodic-service-components/SelectVehicleBoxComponent";

const CarServicesSliderData = async () => {
  return <CarServicesSlider data={serviceData}/>;
};

const periodicServiceUnderCardData ={
  title: "سرویس دوره ای",
  titleDescription: "(شامل ١٧ بخش مي‌باشد كه كاربر بنا به نیاز خود نسبت به انتخاب خدمات اقدام مي‌نمايد)",
  options: [
    "تعویض روغن موتور",
    "تعویض فیلتر هوا",
    "تعویض فیلتر روغن",
    "تعویض فیلتر کابین",
  ],
};

const PeriodicService = (props) => {
  return (
    <div className="flex items-start gap-8 mt-[88px] max-w-[1676px] m-auto p-4">
      {/* <div className="w-[360px] p-4 flex flex-col gap-4 shadow-[0_0_6px_0_rgba(177,177,177,1)] rounded-10">
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
      </div> */}
      <SelectVehicleBoxComponent searchParams={props.searchParams}/>
      <div className={"w-[calc(100%-450px)] flex flex-col"}>
        <Suspense fallback={<div>....Loading</div>}>
          <CarServicesSliderData/>
        </Suspense>
        <div className={"mt-14 flex flex-col gap-20"}>
          <PeriodicServiceUnderCard key={1} item={periodicServiceUnderCardData} />
          <div className="bg-[#F6F6F6] p-6 flex-col gap-6 items-center flex rounded-10">
            <span className="text-[#2C5D83] font-bold text-[28px] text-center">مشاوره و ثبت تماس تلفنی</span>
            <div className="flex gap-1 items-center">
              <i className="cc-call text-[20px]"/>
              <span className="text-[20px]">021-58919</span>
            </div>
            <span className="text-[20px]">ساعت کاری 8:00 - 21:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeriodicService;
