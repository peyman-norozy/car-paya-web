"use client";

// import React, {useEffect, useState} from "react";
// import TimeSelectorCard from "@/components/TimeSelectorCard/TimeSelectorCard";
// import Button from "@/components/Button";
// import { getCurrentData } from "@/utils/api-function-utils";
// import { useSearchParams } from "next/navigation";
// const fakeData = [0, 0, 0, 0, 0, 0, 0, 0];
// const Page = () => {
//     const [timeData, setTimeData] = useState([])
//   const searchParams = useSearchParams();
//
//   useEffect(() => {
//     (async () => {
//       const fatchData = await getCurrentData("/web/detailing?step=step-3", {
//         vehicle_tip_id: searchParams.get("selectTipState").split(",")[1],
//         type: searchParams.get("type"),
//         city_id: searchParams.get("city_id"),
//         service_location_id: searchParams.get("service_location_id"),
//         package_id: searchParams.get("package_id"),
//       });
//       console.log(fatchData);
//
//     })();
//   }, []);
//   return (
//     <div className={"lg:mt-[124px] mt-16 min-h-screen lg:mr-[420px] mb-6"}>
//       <h1 className={"text-center text-[24px]"}>انتخاب زمان دریافت خدمات</h1>
//       <ul className={"flex flex-col gap-4 mt-9"}>
//         {fakeData.map((item, index) => (
//           <TimeSelectorCard key={index} />
//         ))}
//       </ul>
//       <Button
//         type={"button"}
//         class_name={
//           "w-[204px] h-10 bg-[#F66B34] rounded-[8px] text-[#FEFEFE] mt-6"
//         }
//       >
//         تایید و مرحله بعد
//       </Button>
//     </div>
//   );
// };
//
// export default Page;

"use client";
import React, { useEffect, useState } from "react";
import TimeSelectorCard from "@/components/TimeSelectorCard/TimeSelectorCard";
import { getCurrentData } from "@/utils/api-function-utils";
import useSetQuery from "@/hook/useSetQuery";
import { useSearchParams } from "next/navigation";
const Page = (props) => {
  const [selectedTime, setSelectedTime] = useState();
  const [data, setData] = useState([]);
  const setQuery = useSetQuery();
  const searchParams = useSearchParams();

  console.log(props);
  useEffect(() => {
    (async () => {
      const fatchData = await getCurrentData("/web/detailing?step=step-3", {
        vehicle_tip_id: searchParams.get("selectTipState").split(",")[1],
        type: searchParams.get("type"),
        city_id: searchParams.get("city_id"),
        service_location_id: searchParams.get("service_location_id"),
        package_id: searchParams.get("package_id"),
      });
      setData(
        Object.keys(fatchData.data["time-reserve"]).map((key) => ({
          day: key,
          hour: fatchData.data["time-reserve"][key],
        })),
      );
    })();
  }, []);

  function onclick() {
    setQuery.updateQueryParams(
      { time_id: selectedTime, type: searchParams.get("type") },
      "/detailing/invoice",
    );
  }

  return (
    <div className={"lg:mt-[124px] mt-16 min-h-screen lg:mr-[420px] mb-6"}>
      <h1 className={"text-center text-[24px]"}>انتخاب زمان دریافت خدمات</h1>
      <ul className={"flex flex-col gap-4 mt-9"}>
        {data.map((item, index) => (
          <TimeSelectorCard
            key={index}
            data={item}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
          />
        ))}
      </ul>
      <button
        type={"button"}
        className={
          "w-[204px] h-10 bg-[#F66B34] rounded-[8px] text-[#FEFEFE] mt-6"
        }
        onClick={onclick}
      >
        تایید و مرحله بعد
      </button>
    </div>
  );
};

export default Page;
