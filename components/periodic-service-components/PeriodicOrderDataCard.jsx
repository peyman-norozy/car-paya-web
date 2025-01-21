import { numberWithCommas } from "@/utils/function-utils";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const PeriodicOrderDataCard = (props) => {
  const [selectedVehicle, setSelectedVEhicle] = useState({});
  const [periodicCart, setPeriodicCart] = useState({});
  const searchParams = useSearchParams();
  useEffect(() => {
    setSelectedVEhicle(JSON.parse(localStorage.getItem("selectedVehicle")));
    setPeriodicCart(JSON.parse(sessionStorage.getItem("periodicCart")));
  }, []);

  function priceCalculator(products) {
    let price = 0;
    products.map((item) => {
      price = price + item.discount_price;
    });
    return numberWithCommas(price);
  }
  return (
    <div className="w-[400px] relative hidden lg:inline-block">
      <div className="sticky shadow-[0_0_6px_0_rgba(125,125,125,0.5)] p-6 flex flex-col items-start gap-4 rounded-xl top-[20px]">
        <Image
          className="w-auto h-[185px] mx-auto"
          src={process.env.BASE_API + "/web/file/" + selectedVehicle.image}
          width={368}
          height={185}
          alt="khodro"
        />
        <div className="flex flex-col items-start gap-6 font-medium text-[#0f0f0f]">
          {props.step > 0 && (
            <div className="flex items-center gap-1">
              <i className="cc-car-o size-6 rounded-[4px] bg-[#3C81D4] text-white shadow-[0_1.22px_1.62px_0_rgba(126,203,251,0.36)] text-xl flex items-center justify-center" />
              <span> نام وسیله نقلیه : {selectedVehicle?.title}</span>
            </div>
          )}
          {props.step > 1 && (
            <div className="flex items-center gap-1">
              <i className="cc-search size-6 rounded-[4px] bg-[#3C81D4] text-white shadow-[0_1.22px_1.62px_0_rgba(126,203,251,0.36)] text-xl flex items-center justify-center" />
              <span>
                نوع خدمات :{" "}
                {searchParams.get("type") === "FIXED"
                  ? "در نمایندگی کارپایا"
                  : "در محل"}
              </span>
            </div>
          )}
          {props.step > 1 && (
            <div className="flex items-center gap-1">
              <i className="cc-location size-6 rounded-[4px] bg-[#3C81D4] text-white shadow-[0_1.22px_1.62px_0_rgba(126,203,251,0.36)] text-xl flex items-center justify-center" />
              <span className="line-clamp-1">
                {" "}
                محل دریافت خدمات : {periodicCart?.location_name}
              </span>
            </div>
          )}
          {props.step > 2 && periodicCart?.products && (
            <div className="flex items-center gap-1">
              <span className="cc-dollar size-6 rounded-[4px] bg-[#3C81D4] text-white shadow-[0_1.22px_1.62px_0_rgba(126,203,251,0.36)] pt-1 text-lg flex items-center justify-center">
                $
              </span>
              <span>
                مبلغ خدمات: {priceCalculator(periodicCart?.products)} تومان
              </span>
            </div>
          )}
          {periodicCart?.time && (
            <div className="flex items-center gap-1">
              <i className="cc-timer size-6 rounded-[4px] bg-[#3C81D4] text-white shadow-[0_1.22px_1.62px_0_rgba(126,203,251,0.36)] text-xl flex items-center justify-center" />
              <span>{`محل دریافت خدمات : ${periodicCart?.time.title} ${periodicCart?.time.start} تا ${periodicCart?.time.end}`}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PeriodicOrderDataCard;
