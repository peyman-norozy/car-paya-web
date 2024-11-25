"use client";
import { useEffect, useState } from "react";
import { error } from "@/utils/function-utils";
import VehiclePriceModal from "@/components/vehiclePrice/VehiclePriceModal";
import CarSelect from "@/components/public/CarSelect";
import { car_parts } from "@/staticData/car_parts";
import RadioInput from "@/components/vehiclePrice/RadioInput";
import { postData } from "@/utils/client-api-function-utils";
import { useRouter } from "next/navigation";
import periodicLanding from "@/public/assets/images/periodicLanding.png";
import Image from "next/image";
import carParts from "@/public/assets/images/carParts.png";
import QuestionMark from "@/components/QuestionMark";
import nProgress from "nprogress";
const Vehicleprice = (props) => {
  const [client, setClient] = useState(false);
  const [asideStatus, setAsideStatus] = useState("car_city");
  const [toastieDisplay, setToastieDisplay] = useState(false);
  const [preventFirstRender, setPreventFirstRender] = useState(false);
  const [carData, setCarData] = useState({});
  const [partsData, setPartsData] = useState({});
  const [display, setDispaly] = useState(false);
  const [dotsArray, setDotsArray] = useState([]);
  const router = useRouter();
  useEffect(() => {
    setClient(true);
    if (typeof window !== "undefined") {
      const selectedVehicle = JSON.parse(
        localStorage.getItem("selectedVehicle")
      );
      if (preventFirstRender) {
        if (!selectedVehicle) {
          error("لطفا خودرو خود را انتخاب کنید");
        }
      }
    }
  }, [preventFirstRender, toastieDisplay]);

  // function tabClickHandler(key, value, color, top, right) {
  //   setDotsArray([...dotsArray, { name: key, color: color, top: top, right: right }])
  //   setPartsData({ ...partsData, [key]: value });
  // }

  function tabClickHandler(key, value, color, top, right, remove) {
    setDotsArray((prevDotsArray) => {
      const index = prevDotsArray.findIndex((dot) => dot.name === key);
      if (remove) {
        const updatedArray = [...prevDotsArray];
        updatedArray.splice(index, 1);
        return updatedArray;
      }
      if (index !== -1) {
        // اگر `name` تکراری باشد، آن شیء را به‌روزرسانی می‌کنیم
        const updatedArray = [...prevDotsArray];
        updatedArray[index] = { ...updatedArray[index], color, top, right };
        return updatedArray;
      } else {
        // اگر `name` جدید باشد، آن را به آرایه اضافه می‌کنیم
        return [...prevDotsArray, { name: key, color, top, right }];
      }
    });

    // به‌روزرسانی یا افزودن مقدار `value` در `partsData`
    setPartsData((prevPartsData) => ({
      ...prevPartsData,
      [key]: value,
    }));
  }
  async function calculate() {
    const data = {
      ...carData,
      model: JSON.parse(localStorage.getItem("selectedVehicle"))?.model,
      tip: JSON.parse(localStorage.getItem("selectedVehicle"))?.title,
      brand: JSON.parse(localStorage.getItem("selectedVehicle"))?.brand,
      items: Object.values(partsData),
    };
    sessionStorage.setItem("dotsData", JSON.stringify(dotsArray));
    nProgress.start();
    router.push(
      `/vehicleprice/result?year=${data.year}&year=${data.year}&color=${data.color}&operation=${data.operation}&model=${data.model}&tip=${data.tip}&brand=${data.brand}&items=${data.items.join(",")}`
    );
    // const res = await postData("/web/pricing/calculations", data);
  }
  //{"color":"2023","year":"2022","operation":"10000","model":"Q5","tip":"آئودی Q5","brand":"آئودی","items":["RightFrontChassisMinorDamaged","TrunkPartialColored","RightFrontDoorChanged"]}

  if (!client) {
    return null;
  }
  return (
    <>
      <div
        className={`w-full min-h-screen ${display ? "hidden" : "flex"} flex-col gap-6`}
      >
        <div className="flex bg-white p-4 justify-center xl:justify-between">
          <div
            className={` flex mt-10 transition-all duration-500 w-fit lg:top-0 lg:right-0.5 lg:h-full lg:z-0`}
          >
            {(() => {
              switch (asideStatus) {
                case "car_city":
                  return (
                    <VehiclePriceModal
                      buttonTitle={"تخمین قیمت"}
                      onClick={() => setDispaly(true)}
                      setAsideStatus={setAsideStatus}
                      setToastieDisplay={setToastieDisplay}
                      setPreventFirstRender={setPreventFirstRender}
                      setModalClickState={props.setModalClickState}
                      setCarData={setCarData}
                      carData={carData}
                      setDispaly={setDispaly}
                    />
                  );
                case "carSelection":
                  return <CarSelect setAsideStatus={setAsideStatus} />;
                default:
                  return null;
              }
            })()}
          </div>
          <div className="hidden xl:flex flex-col gap-4 items-center text-[#0f0f0f] font-medium text-20 mt-20">
            <span className="whitespace-nowrap">تخمین قیمت ماشین شما</span>
            <span className="whitespace-nowrap">با کار پایا</span>
          </div>
          <Image
            src={periodicLanding}
            width={460}
            height={360}
            alt="ماشین"
            className="hidden xl:inline-block"
          />
        </div>
        <div className="bg-[#F7F7F9] flex flex-col gap-6 p-6 rounded-lg relative">
          <span className="font-bold text-[#0f0f0f]">تخمین قیمت کارپایا</span>
          <p className="font-medium text-sm leading-6 text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فره
          </p>
          <div className="-bottom-1/3 grid grid-cols-2 lg:grid-cols-4 items-center gap-4 lg:gap-8 md:w-11/12 xl:w-4/5 m-auto">
            <div className="flex flex-col m-auto gap-2 lg:gap-4 px-2 lg:px-4 py-4 lg:py-6 bg-white shadow-[0_0_4px_0_rgba(207,207,207,0.7)] rounded-lg items-center w-fit">
              <i className="cc-profile-circle text-3xl lg:text-6xl" />
              <span className="font-medium text-12 lg:text-lg text-[#1E67BF]">
                سریع و آسان
              </span>
              <p className="text-[#5d5d5d] font-medium text-justify text-12 lg:text-base">
                تیم کارپایا کاملا تخصصی و حرفه ایی در کنار شماست
              </p>
            </div>
            <div className="flex flex-col m-auto gap-2 lg:gap-4 px-2 lg:px-4 py-4 lg:py-6 bg-white shadow-[0_0_4px_0_rgba(207,207,207,0.7)] rounded-lg items-center w-fit">
              <i className="cc-profile-circle text-3xl lg:text-6xl" />
              <span className="font-medium text-12 lg:text-lg text-[#1E67BF]">
                سریع و آسان
              </span>
              <p className="text-[#5d5d5d] font-medium text-justify text-12 lg:text-base">
                تیم کارپایا کاملا تخصصی و حرفه ایی در کنار شماست
              </p>
            </div>
            <div className="flex flex-col m-auto gap-2 lg:gap-4 px-2 lg:px-4 py-4 lg:py-6 bg-white shadow-[0_0_4px_0_rgba(207,207,207,0.7)] rounded-lg items-center w-fit">
              <i className="cc-profile-circle text-3xl lg:text-6xl" />
              <span className="font-medium text-12 lg:text-lg text-[#1E67BF]">
                سریع و آسان
              </span>
              <p className="text-[#5d5d5d] font-medium text-justify text-12 lg:text-base">
                تیم کارپایا کاملا تخصصی و حرفه ایی در کنار شماست
              </p>
            </div>
            <div className="flex flex-col m-auto gap-2 lg:gap-4 px-2 lg:px-4 py-4 lg:py-6 bg-white shadow-[0_0_4px_0_rgba(207,207,207,0.7)] rounded-lg items-center w-fit">
              <i className="cc-profile-circle text-3xl lg:text-6xl" />
              <span className="font-medium text-12 lg:text-lg text-[#1E67BF]">
                سریع و آسان
              </span>
              <p className="text-[#5d5d5d] font-medium text-justify text-12 lg:text-base">
                تیم کارپایا کاملا تخصصی و حرفه ایی در کنار شماست
              </p>
            </div>
          </div>
        </div>
        <QuestionMark />
      </div>
      <div
        className={`w-full h-fit ${!display ? "hidden" : "flex lg:grid"} flex-col grid-cols-8 gap-4 mt-12 mb-4 px-6`}
      >
        <div className="shadow-[0_0_6px_0_rgba(125,125,125,0.5)] rounded-2xl p-4 bg-white w-full col-span-3 2xl:col-span-2 h-auto flex flex-col gap-5 text-[#0F0F0F] font-medium">
          <span>
            براورد قیمت خودرو{" "}
            {JSON.parse(localStorage.getItem("selectedVehicle"))?.title}
          </span>
          <span>سال ساخت خودرو: {carData.year}</span>
          <span>رنگ خودرو: {carData.color}</span>
          <span>کیلومتر خودرو: {carData.operation}</span>
          <div className="w-full h-px bg-[#BBBBBB]"></div>
          <div className="relative max-w-80 m-auto">
            <Image src={carParts} alt="نقشه ماشین" />
            {dotsArray.map((item, index) => {
              return (
                <div
                  key={item.name + index}
                  style={{
                    backgroundColor: item.color,
                    top: `${item.top}%`,
                    right: `${item.right}%`,
                  }}
                  className="size-3 rounded-full absolute z-[2]"
                ></div>
              );
            })}
          </div>
        </div>
        <div
          className={`flex flex-col gap-6 w-full shadow-[0_0_6px_0_rgba(125,125,125,0.5)] rounded-2xl h-fit p-4 relative bg-white mr-auto col-span-5 2xl:col-span-6`}
        >
          {!display && (
            <div className="w-full h-full bg-[#cfcfcf75] absolute top-0 right-0 rounded-2xl z-10 cursor-not-allowed hidden lg:block"></div>
          )}
          <div className=" grid sm:grid-cols-2 size1400:grid-cols-3 size1770:grid-cols-4 gap-4 ">
            {car_parts.map((item, index) => (
              <RadioInput
                key={index}
                options={item.options}
                name={item.persian_name}
                tabClickHandler={tabClickHandler}
                top={item.top}
                right={item.right}
              />
            ))}
          </div>
          <button
            className="px-4 py-2 text-[#fefefe] bg-[#F66B34] w-fit h-fit rounded-lg"
            onClick={() => {
              calculate();
            }}
          >
            تخمین قیمت خودرو
          </button>
        </div>
      </div>
    </>
  );
};

export default Vehicleprice;
