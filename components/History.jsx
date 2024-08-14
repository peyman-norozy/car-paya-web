import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";
import RecordModalCreatedCard from "@/components/cards/RecordModalCreatedCard";
import { getData } from "@/utils/client-api-function-utils";
import { API_PATHS } from "@/configs/routes.config";
import { error } from "@/utils/function-utils";
import { usePathname, useRouter } from "next/navigation";
import PrivateRoute from "@/routes/private-route";

const History = (props) => {
  const tabName = [{
    label:"عنوان",
    slug: "title"
  },{
    label:"کیلومتر تعویض فعلی",
    slug: "ًCRK"
  },{
    label:"تاریخ تعویض فعلی",
    slug: "CRD"
  },{
    label:"کیلومتر تعویض بعدی",
    slug: "NRK"
  },{
    label:"تاریخ تعویض بعدی",
    slug: "NRD"
  },{
    label:"یاد آوری",
    slug: "remember"
  },{
    label:"کیلومتر مصرفی استاندارد",
    slug: "SM"
  },
]

const data = {
  title:"روغن موتور",
  crk:"120000 Km",
  crd:"1402/5/10",
  nrk:"120000 Km",
  nrd:"1402/5/10",
  remember:"یادآوری",
  sm:"120000 Km"
}
  const newRoute = useRef(null);
  const router = useRouter();
  const pathName = usePathname();
  const vehicleId = props.params[2];
  const [newVehicleHistoryData, setNewVehicleHistoryData] = useState([]);
  const closeHistoryHandler = () => {
    router.push("/" + pathName.split("/").splice(1, 3).join("/"));
  };

  const addRecordHandler = () => {
    router.push(pathName + "/create");
  };

  useEffect(() => {
    if (props.params.includes("my-car")) {
      newRoute.current = "/car-history";
    } else if (props.params.includes("my-motorcycle")) {
      newRoute.current = "/motor-history";
    } else if (props.params.includes("my-heavy-car")) {
      newRoute.current = "/heavyCar-history";
    }
    (async () => {
      const fetchData = await getData(
        `${API_PATHS.USERPANEL}${newRoute.current}/index/${vehicleId}`,
      );
      if (fetchData.status === 200) {
        setNewVehicleHistoryData(fetchData.data.data);
      } else if (fetchData.response.status === 404) {
        console.log(fetchData);
      } else if (fetchData.response.status === 422) {
        for (let key in fetchData.response.data.errors) {
          error(fetchData.response.data.errors[key][0]);
        }
      }
    })();
  }, [props.params, vehicleId]);

  return (
    <PrivateRoute>
      <div className="flex flex-col gap-[34px] size1000:flex-1 w-full rounded-[10px] px-4 lg:px-10 py-6 bg-[#6f6f6f]">
      <div className={"flex items-center gap-2"}>
            <i
              onClick={closeHistoryHandler}
              className={
                "cc-arrow-right text-[30px] text-[#FEFEFE] cursor-pointer"
              }
            />
            <span className={"text-[#FEFEFE] font-bold text-20"}>اطلاعات عمومی خودرو</span>
          </div>
        <div className="flex flex-col gap-4">
          <span className="text-[#FEFEFE] font-bold text-18">بیمه بدنه</span>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 size1470:grid-cols-6 gap-3">
            <div className="flex flex-col gap-2 w-full">
              <span className="text-[#FEFEFE] text-14 font-medium">تاریخ شروع</span>
              <select className="bg-[#FEFEFE] rounded-lg h-9 text-14 px-2">
                <option className="text-14">انتخاب</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <span className="text-[#FEFEFE] text-14 font-medium">تاریخ پایان</span>
              <select className="bg-[#FEFEFE] rounded-lg h-9 text-14 px-2">
                <option className="text-14">انتخاب</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <span className="text-[#FEFEFE] text-14 font-medium">شرکت بیمه</span>
              <select className="bg-[#FEFEFE] rounded-lg h-9 text-14 px-2">
                <option className="text-14">انتخاب</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <span className="text-[#FEFEFE] text-14 font-medium">استان</span>
              <select className="bg-[#FEFEFE] rounded-lg h-9 text-14 px-2">
                <option className="text-14">انتخاب</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <span className="text-[#FEFEFE] text-14 font-medium">شهر</span>
              <select className="bg-[#FEFEFE] rounded-lg h-9 text-14 px-2">
                <option className="text-14">انتخاب</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <span className="text-[#FEFEFE] text-14 font-medium">یادآوری معاینه فنی</span>
              <select className="bg-[#FEFEFE] rounded-lg h-9 text-14 px-2">
                <option className="text-14">انتخاب</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-[#FEFEFE] font-bold text-18">بیمه شخص ثالث</span>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 size1470:grid-cols-6 gap-3">
            <div className="flex flex-col gap-2 w-full">
              <span className="text-[#FEFEFE] text-14 font-medium">تاریخ شروع</span>
              <select className="bg-[#FEFEFE] rounded-lg h-9 text-14 px-2">
                <option className="text-14">انتخاب</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <span className="text-[#FEFEFE] text-14 font-medium">تاریخ پایان</span>
              <select className="bg-[#FEFEFE] rounded-lg h-9 text-14 px-2">
                <option className="text-14">انتخاب</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <span className="text-[#FEFEFE] text-14 font-medium">شرکت بیمه</span>
              <select className="bg-[#FEFEFE] rounded-lg h-9 text-14 px-2">
                <option className="text-14">انتخاب</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <span className="text-[#FEFEFE] text-14 font-medium">استان</span>
              <select className="bg-[#FEFEFE] rounded-lg h-9 text-14 px-2">
                <option className="text-14">انتخاب</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <span className="text-[#FEFEFE] text-14 font-medium">شهر</span>
              <select className="bg-[#FEFEFE] rounded-lg h-9 text-14 px-2">
                <option className="text-14">انتخاب</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <span className="text-[#FEFEFE] text-14 font-medium">یادآوری معاینه فنی</span>
              <select className="bg-[#FEFEFE] rounded-lg h-9 text-14 px-2">
                <option className="text-14">انتخاب</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-[#FEFEFE] font-bold text-18">معاینه فنی</span>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 size1470:grid-cols-6 gap-3">
            <div className="flex flex-col gap-2 w-full">
              <span className="text-[#FEFEFE] text-14 font-medium">تاریخ شروع</span>
              <select className="bg-[#FEFEFE] rounded-lg h-9 text-14 px-2">
                <option className="text-14">انتخاب</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <span className="text-[#FEFEFE] text-14 font-medium">تاریخ پایان</span>
              <select className="bg-[#FEFEFE] rounded-lg h-9 text-14 px-2">
                <option className="text-14">انتخاب</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <span className="text-[#FEFEFE] text-14 font-medium">یادآوری معاینه فنی</span>
              <select className="bg-[#FEFEFE] rounded-lg h-9 text-14 px-2">
                <option className="text-14">انتخاب</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[180px] text-[#FEFEFE] bg-[#F66B34] text-14 font-medium flex items-center justify-center h-10 rounded-lg">ثبت</div>
        <hr/>
        <div className={"flex items-center justify-between gap-2"}>
          <span className={"text-[#FEFEFE] font-bold text-20"}>اطلاعات اقلام مصرفی</span>
            {/* <Button
              type="button"
              class_name="flex items-center justify-center gap-2 border border-[#FEFEFE] text-white rounded-5 w-[134px] h-[48px]"
              on_click={addRecordHandler}
            >
              <i className="cc-add text-12 text-[#FEFEFE] border-2 border-[#FEFEFE] p-1 rounded-full" />
              <span className={"text-[#FEFEFE] text-14"}>افزودن سابقه</span>
            </Button> */}
        </div>
        <div className="flex flex-wrap gap-4">
            <div className="flex flex-col gap-2 w-full max-w-[300px]">
              <span className="text-[#FEFEFE] text-14 font-medium">آخرین وضعیت کیلومتر خودرو</span>
              <input className="bg-[#7e7e7e] rounded-lg h-10 text-14 px-2 text-[#b0b0b0]" value={"15,000"}/>
            </div>
            <div className="flex flex-col gap-2 w-full max-w-[300px]">
              <span className="text-[#FEFEFE] text-14 font-medium">کیلومتر مصرفی ماهیانه</span>
              <input className="bg-[#7e7e7e] rounded-lg h-10 text-14 px-2 text-[#b0b0b0]" value={"1,500"}/>
            </div>
          </div>
        <div className="mt-4 flex flex-col lg:bg-[#B0B0B0] rounded-2xl overflow-hidden gap-px">
          <ul className="lg:flex hidden justify-between size1190:text-16 text-14 text-[#FEFEFE] rounded-10 gap-px h-[72px]">
            {tabName.map((item)=>(
            <li className="font-bold flex-1 text-14 bg-[#47505D] flex items-center justify-center text-center p-2">{item.label}</li>
            ))}
          </ul>
          <div className={"overflow-y-auto flex flex-col gap-6 lg:gap-px"}>
            {/* {newVehicleHistoryData.map((item, index) => ( */}
            {[1,2,3,4,5,6,7,8,9].map((item , index)=>(
              <RecordModalCreatedCard
                key={item}
                item={data}
                index={index}
              />
            ))}
            {/* ))} */}
          </div>
        </div>

      </div>
    </PrivateRoute>
  );
};

export default History;