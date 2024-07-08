import Image from "next/image";
import Button from "@/components/Button";
import PeriodicServiceCard from "@/components/cards/PeriodicServiceCard";
import Input from "@/components/Input";
import PeriodicServiceUnderCard from "@/components/cards/PeriodicServiceUnderCard";
import {Suspense} from "react";
import {serviceData,periodicServiceUnderCardData,workData} from "@/staticData/data";
import CarServicesSlider from "@/components/CarServicesSlider/CarServicesSlider";

const CarServicesSliderData = async () => {
  return <CarServicesSlider data={serviceData}/>;
};

const PeriodicService = () => {
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
      <div className={"w-[calc(100%-360px)]"}>
        <Suspense fallback={<div>....Loading</div>}>
          <CarServicesSliderData/>
        </Suspense>
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
