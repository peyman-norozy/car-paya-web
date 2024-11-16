import React from "react";
import { error } from "@/utils/function-utils";
import nProgress from "nprogress";
import { useRouter } from "next/navigation";

const InspectionPackageData = [
  {
    title: "کارشناسی استاندارد",
    service: [
      { label: "بدنه", state: true },
      { label: "فنی", state: true },
      { label: "قیمت", state: false },
      { label: "مکانیک", state: false },
    ],
  },
  {
    title: "کارشناسی اقتصادی",
    service: [
      { label: "بدنه", state: true },
      { label: "فنی", state: true },
      { label: "قیمت", state: true },
      { label: "مکانیک", state: false },
    ],
  },
  {
    title: "کارشناسی حرفه ایی",
    service: [
      { label: "بدنه", state: true },
      { label: "فنی", state: true },
      { label: "قیمت", state: true },
      { label: "مکانیک", state: true },
    ],
  },
];
const InspectionPackage = () => {
  const router = useRouter();

  const PackageStepHandler = () => {
    if (!localStorage.getItem("selectedVehicle")) {
      error("ابتدا وسیله نقلیه را انتخاب کنید");
    }
    if (!localStorage.getItem("city")) {
      error("ابتدا شهر خود را انتخاب کنید");
    }
    if (
      localStorage.getItem("city") &&
      localStorage.getItem("selectedVehicle")
    ) {
      nProgress.start();
      router.push(
        `/services/vehicle-inspection/service-selection?city_id=${JSON.parse(localStorage.getItem("city")).cityId}&vehicle_tip=${JSON.parse(localStorage.getItem("selectedVehicle")).id}&step=step-1`,
      );
    }
  };

  return (
    <div className={"mt-[72px] z-50"}>
      <p className="text-18 font-medium mb-[24px] text-center">
        پکیج های کارشناسی
        <span className="text-[#1C74D1]"> کار </span>
        <span className="text-[#F66B34]"> پایا </span>
      </p>
      <div className="overflow-x-auto lg:overflow-x-hidden">
        <ul
          className={
            "flex items-center justify-center lg:gap-[87px] gap-4 lg:w-full min-w-[724px] px-2"
          }
        >
          {InspectionPackageData.map((item, index) => (
            <li
              key={item.title}
              className={
                "bg-white shadow-custom1 py-4 px-2 w-[246px] rounded-8 overflow-hidden"
              }
            >
              <span className={"text-14 font-medium text-[#010101]"}>
                {item.title}
              </span>
              <ul className={"flex flex-col gap-[13px] mt-[13px]"}>
                {item.service.map((item, index) => (
                  <li
                    key={item.title + item.label + index}
                    className={"flex items-center gap-[11px]"}
                  >
                    {item.state === true && (
                      <i className={"cc-tick text-[#22A137]"} />
                    )}
                    {item.state === false && (
                      <i className={"text-[#DB3737] text-[24px]"}>×</i>
                    )}
                    <span className={"text-14 font-medium text-[#454545]"}>
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
              <div className={"text-center mt-[13px]"}>
                <button
                  className={
                    "text-12 text-[#F66B34] border border-[#F66B34] rounded-8 py-2 px-[30px] hover:bg-[#F66B34] hover:text-white"
                  }
                  onClick={PackageStepHandler}
                >
                  درخواست کارشناسی
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InspectionPackage;
