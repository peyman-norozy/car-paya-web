import React, { Fragment, useEffect, useState } from "react";
import SelectProvinceAndCarBox from "./SelectProvinceAndCarBox";
import Image from "next/image";
import { serviceData } from "@/staticData/data";
import CarServicesSlider from "@/components/CarServicesSlider/CarServicesSlider";
import axios from "axios";
import useSetQuery from "@/hook/useSetQuery";
import CallAndConsult from "@/components/CallAndConsult";
import CostumerSatisfaction from "@/components/vehicle-verification/CostumerSatisfaction";
import FrequentQuestions from "@/components/vehicle-verification/FrequentQuestions";
import CustomersComment from "@/components/vehicle-verification/CustomersComment";
import { ToastContainer } from "react-toastify";
import expert from "@/public/assets/images/expert.png"
import { useRouter } from "next/navigation";

const VerificationFirstStep = (props) => {
  const { on_click, verificationData, setStep, step } = props;
  const [isClicked, setIsClicked] = useState(5);
  const [isSelected, setIsSelected] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [city_id, setCity_id] = useState();
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const router = useRouter()
  const setQuery = useSetQuery();
  const cityName = [{ name: "تهران" }];
  const tabTitle = [
    { name: "خودرو" },
    { name: "موتور سیکلت" },
    { name: "وسیله من" },
  ];

  const PackageStepHandler = () => {
    setQuery.setMultiQuery([{key: 'city_id', value: JSON.parse(localStorage.getItem("city")).cityId}, {key: 'vehicle_tip', value: JSON.parse(localStorage.getItem("selectedVehicle")).id},{ key: "step", value: "step-1" }])
    setStep(2);
    // setModalIsOpen(true);
    // router.push(
    //   `/periodic-service/location-selection?city_id=${localStorage.getItem("city").cityId}&vehicle_tip=${localStorage.getItem("selectedVehicle").id}`,
    // );
  };

  useEffect(() => {
    const city = city_id === undefined ? "" : "&city_id=" + city_id;
    const vehicle_tip =
      selectedItem === null ? "" : "&vehicle_tip_id=" + selectedItem;
    axios
      .get(
        process.env.BASE_API +
          "/web/expert/reservation?step=step-1" +
          vehicle_tip +
          city
      )
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        console.log(err);
      });
  }, [selectedItem, city_id]);

  const active = data.length > 0;

  return (
    <div className="lg:flex items-start gap-8 mt-1 lg:mt-10 max-w-[1772px] m-auto py-4 relative">
      <div className={"w-full lg:w-[calc(100%-424px)] mr-auto gap-14 flex flex-col"}>
        {/* {modalIsOpen && (
        <div className={""}>
          <div
            onClick={() => setModalIsOpen(false)}
            className={
              "fixed bg-black opacity-[0.5] w-full h-[100vh] z-[999999999]"
            }
          ></div>
          <div className=" fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[75%] w-[350px] size411:w-[400px] self-center size1090:self-auto z-[1000000000]">
            <SelectProvinceAndCarBox
              city_id={city_id}
              setCity_id={setCity_id}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              tabTitle={tabTitle}
              title="انتخاب وسیله نقلیه"
              cityData={cityName}
            />
          </div>
        </div>
      )} */}
        {/* <div className="flex gap-[1rem] mb-[5rem] w-[98%]  m-auto size1160:w-[95%]">
        <div className="w-full py-[1rem] flex gap-[2rem]">
          <div className="flex flex-col size1090:flex-row  gap-[1rem] w-full">
            <div className="hidden lg:block w-[350px] size411:w-[400px] self-center size1090:self-auto">
              <SelectProvinceAndCarBox
                city_id={city_id}
                setCity_id={setCity_id}
                setSelectedItem={setSelectedItem}
                tabTitle={tabTitle}
                title="انتخاب وسیله نقلیه"
                cityData={cityName}
              />
            </div>
          </div>
        </div>
      </div> */}
        {/* <div className="w-full flex flex-col gap-[1.5rem]">
              <div className="hidden size1000:flex">
                <CarServicesSlider data={serviceData} />
              </div>
              <div className={"relative"}>
                <Image
                  src={"/assets/images/mainPicVerification.png"}
                  alt={"car"}
                  width={824}
                  height={377}
                  className={"w-full min-h-[200px] lg:h-[377px]"}
                />
                <div
                  className={
                    "absolute right-[4%] top-[10%] size690:top-[20%] flex flex-col gap-2"
                  }
                >
                  <h1 className={"text-14 size582:text-[24px] text-BLUE_500"}>
                    کــارشــنــاســی خــودرو
                  </h1>
                  <h1 className={"text-12 size582:text-[22px]"}>
                    با کارشناس های ما مطمعن خرید کنید
                  </h1>
                  <h1 className={"text-12 size582:text-[22px] text-RED_400"}>
                    کار چک می کنار شماست
                  </h1>
                  <button
                    onClick={PackageStepHandler}
                    className={
                      "bg-BLUE_700 mt-1 size690:mt-3 w-fit text-12 size690:text-[16px] p-[8px] text-white rounded-[4px]"
                    }
                  >
                    درخواست کارشناسی
                  </button>
                </div>
              </div>
      </div> */}
        <div className="bg-[#383838A3] rounded-3xl flex gap-6 p-6 flex-row-reverse items-center">
          <div className="flex flex-col gap-2 items-start">
            <h1 className="text-xl font-bold text-[#F66B34]">
              کارشناسی وسیله نقلیه
            </h1>
            <p className="text-base text-[#FEFEFE] font-medium">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <button className="bg-[#F66B34] rounded-md py-2 px-4 text-[#FEFEFE] w-fit text-14 mt-2 font-medium" onClick={PackageStepHandler}>درخواست کارشناسی</button>
          </div>
            <Image className="scale-x-[-1] w-[296px] h-[214]" src={expert} width={296} height={214}/>
        </div>
        <h2 className="text-2xl font-bold font-[#0E0E0E] text-center mb-[-32px]">سرویس های کارشناسی کار چک</h2>
        <table className="w-full rounded-3xl overflow-hidden bg-[#E7E7E7]">
          <thead>
            <tr className="bg-[#B0B0B0] flex px-10 py-4 font-bold">
              <th className="flex-[3_3_0%] text-start">پکیج ها</th>
              <th className="flex-1 text-center">بدنه</th>
              <th className="flex-1 text-center">فنی</th>
              <th className="flex-1 text-center">قیمت</th>
              <th className="flex-1 text-center">مکانیک</th>
            </tr>
          </thead>
          <tbody>
            <tr className="flex px-10 py-5 font-bold text-20">
            <td className="flex-[3_3_0%] text-start">کارشناسی تخصصی</td>
              <td className="flex-1 text-center"><i className="cc-tick size-8 bg-[#99E0A9] text-xl text-[#24D34B] rounded-full p-1"/></td>
              <td className="flex-1 text-center"><i className="cc-tick size-8 bg-[#99E0A9] text-xl text-[#24D34B] rounded-full p-1"/></td>
              <td className="flex-1 text-center"><i className="cc-tick size-8 bg-[#99E0A9] text-xl text-[#24D34B] rounded-full p-1"/></td>
              <td className="flex-1 text-center"><i className="cc-tick size-8 bg-[#99E0A9] text-xl text-[#24D34B] rounded-full p-1"/></td>
            </tr>
          </tbody>
          <tbody>
            <tr className="flex px-10 py-5 font-bold text-20">
              <td className="flex-[3_3_0%] text-start">کارشناسی فنی و بدنه</td>
              <td className="flex-1 text-center"><i className="cc-tick size-8 bg-[#99E0A9] text-xl text-[#24D34B] rounded-full p-1"/></td>
              <td className="flex-1 text-center"><i className="cc-tick size-8 bg-[#99E0A9] text-xl text-[#24D34B] rounded-full p-1"/></td>
              <td className="flex-1 text-center"><i className="cc-tick size-8 bg-[#99E0A9] text-xl text-[#24D34B] rounded-full p-1"/></td>
              <td className="flex-1 text-center rotate-45"><i className="cc-add size-8 bg-[#e79595] text-xl text-[#E61919] rounded-full p-1"/></td>
            </tr>
          </tbody>
          <tbody>
            <tr className="flex px-10 py-5 font-bold text-20">
              <td className="flex-[3_3_0%] text-start">کارشناسی بدنه</td>
              <td className="flex-1 text-center"><i className="cc-tick size-8 bg-[#99E0A9] text-xl text-[#24D34B] rounded-full p-1"/></td>
              <td className="flex-1 text-center rotate-45"><i className="cc-add size-8 bg-[#e79595] text-xl text-[#E61919] rounded-full p-1"/></td>
              <td className="flex-1 text-center rotate-45"><i className="cc-add size-8 bg-[#e79595] text-xl text-[#E61919] rounded-full p-1"/></td>
              <td className="flex-1 text-center rotate-45"><i className="cc-add size-8 bg-[#e79595] text-xl text-[#E61919] rounded-full p-1"/></td>
            </tr>
          </tbody>
        </table>
        <CallAndConsult />
        <CostumerSatisfaction />
        <FrequentQuestions />
        <ToastContainer rtl={true} />
      </div>
    </div>
  );
};

export default VerificationFirstStep;
