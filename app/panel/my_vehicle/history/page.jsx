"use client";
import { API_PATHS } from "@/configs/routes.config";
import PanelContainer from "@/layouts/PanelContainer";
import Image from "next/image";
import iransFlag from "@/public/assets/images/iransFlag.png";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getDataWithFullErrorRes } from "@/utils/api-function-utils";
import { numberWithCommas } from "@/utils/function-utils";
import moment from "jalali-moment";
import { useSelector } from "react-redux";

const data = [
  {
    title: "روغن گیربکس اتوماتیک",
    currentKm: "120000 Km",
    nextKm: "125000 Km",
    currentDate: "1402/5/10",
    nextDate: "1403/7/10",
  },
  {
    title: "روغن گیربکس اتوماتیک",
    currentKm: "120000 Km",
    nextKm: "125000 Km",
    currentDate: "1402/5/10",
    nextDate: "1403/7/10",
  },
  {
    title: "روغن گیربکس اتوماتیک",
    currentKm: "120000 Km",
    nextKm: "125000 Km",
    currentDate: "1402/5/10",
    nextDate: "1403/7/10",
  },
  {
    title: "روغن گیربکس اتوماتیک",
    currentKm: "120000 Km",
    nextKm: "125000 Km",
    currentDate: "1402/5/10",
    nextDate: "1403/7/10",
  },
  {
    title: "روغن گیربکس اتوماتیک",
    currentKm: "120000 Km",
    nextKm: "125000 Km",
    currentDate: "1402/5/10",
    nextDate: "1403/7/10",
  },
  {
    title: "روغن گیربکس اتوماتیک",
    currentKm: "120000 Km",
    nextKm: "125000 Km",
    currentDate: "1402/5/10",
    nextDate: "1403/7/10",
  },
  {
    title: "روغن گیربکس اتوماتیک",
    currentKm: "120000 Km",
    nextKm: "125000 Km",
    currentDate: "1402/5/10",
    nextDate: "1403/7/10",
  },
];

const History = () => {
  const [historyData, setHistoryData] = useState({});
  const [generalDataState, setGeneralDataState] = useState(false);
  const [itemsataState, setItemsataState] = useState(false);
  const params = useSearchParams();
  const innerWidthNumber = useSelector(
    (number) => number.todo.windowInnerWidth
  );

  useEffect(() => {
    moment.locale("fa");
    getHestoryData();
  }, []);

  async function getHestoryData() {
    const res = await getDataWithFullErrorRes(
      "/user/car_id_card/" + params.get("id")
    );
    setHistoryData(res.data);
  }

  return (
    <PanelContainer>
      <div className="lg:bg-[#fefefe] rounded-lg lg:shadow-[0_0_8px_0_rgba(143,143,143,0.25)] min-h-[500px] flex flex-col gap-4 px-4 lg:p-6">
        <span className="text-[#0F0F0F] text-sm font-medium">
          شناسنامه و سوابق وسیله نقلیه
        </span>
        <div
          className={`shadow-[0_0_4px_0_rgba(207,207,207,0.7)] bg-[#FEFEFE] lg:bg-inherit lg:shadow-none flex flex-col md:flex-row gap-4 rounded-2xl lg:rounded-none relative border-b p-4 lg:p-0 items-center w-full`}
        >
          <Image
            src={
              process.env.BASE_API +
              "/web" +
              API_PATHS.FILE +
              "/" +
              //   data.image_id
              historyData.userVehicle?.image
            }
            className="w-auto h-full max-h-[160px] mx-auto"
            width={200}
            height={150}
            alt="car"
          />
          <div className="grid grid-cols-2 gap-4 w-full ">
            <div className="border border-[#B0B0B0] rounded-lg w-full relative flex gap-1 items-center px-3 py-2 col-span-full md:col-span-1 ">
              <span className="text-sm text-[#3D3D3D]">
                {historyData.userVehicle?.vehicle_name || "نامشخص"}
              </span>
              <span className="font-medium text-sm text-[#6D6D6D] absolute -top-3 right-1 bg-white px-1">
                برند/ مدل/ تیپ
              </span>
            </div>
            <div className="border border-[#B0B0B0] relative gap-1 rounded-lg w-full px-3 py-2">
              <span className="font-medium text-sm text-[#6D6D6D] absolute -top-3 right-1 bg-white px-1">
                سال ساخت
              </span>
              <span className="text-14 text-[#3D3D3D]">
                {historyData.userVehicle?.year || "نامشخص"}
              </span>
            </div>
            <div className="border border-[#B0B0B0] relative gap-1 rounded-lg w-full px-3 py-2">
              <span className="font-medium text-sm text-[#6D6D6D] absolute -top-3 right-1 bg-white px-1">
                رنگ
              </span>
              <span className="text-14 text-[#3D3D3D]">
                {historyData.userVehicle?.color || "نامشخص"}
              </span>
            </div>
            {"CAR" === "MOTOR" ? (
              <div className="bg-[#FEFEFE] text-[#0E0E0E] flex-col w-28 rounded-md overflow-hidden border border-black col-span-full md:col-span-1">
                <div className="flex">
                  <span className="w-full tracking-[16px] flex justify-center items-center pl-2 font-bold">
                    {data.info.plaque[0]}
                  </span>
                  <Image
                    className=""
                    src={machinTag}
                    width={15}
                    height={30}
                    alt="پلاک"
                  />
                </div>
                <span className="w-full tracking-[12px] flex justify-center items-center pl-2 font-bold">
                  {data.info.plaque[1]}
                </span>
              </div>
            ) : (
              <div className="bg-white flex items-center justify-between border border-[#B0B0B0] font-bold text-14 text-[#3d3d3d] rounded-lg overflow-hidden col-span-full md:col-span-1">
                <div className="w-full p-2 text-14 font-bold flex justify-around">
                  <span>{historyData.userVehicle?.plaque[0]}</span>
                  <span className="h-5 w-px bg-[#000000]"></span>
                  <span>{historyData.userVehicle?.plaque[1]}</span>
                  <span>{historyData.userVehicle?.plaque[2]}</span>
                  <span>{historyData.userVehicle?.plaque[3]}</span>
                </div>
                <div className="w-16 h-full bg-[#3360FF] flex items-center justify-center py-2">
                  <Image
                    className="w-[30px] h-5"
                    src={iransFlag}
                    width={30}
                    height={20}
                    alt="پرچم ایران"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className={`flex flex-col gap-y-4 border-b shadow-[0_0_4px_0_rgba(207,207,207,0.7)] bg-[#FEFEFE] lg:bg-inherit lg:shadow-none rounded-2xl lg:rounded-none  pb-4 px-4 pt-4 lg:px-0 lg:pt-4 ${generalDataState ? "" : "h-[72px] overflow-y-hidden"}`}
        >
          <div
            className="flex items-center justify-between"
            onClick={() => {
              setGeneralDataState(!generalDataState);
            }}
          >
            <span className="h-10 border-r-2 border-[#F66B34] p-[10px] font-medium text-[#0F0F0F]">
              اطلاعات عمومی خودرو
            </span>
            <i
              className={`cc-arrow-down text-2xl leading-3 ${generalDataState ? "rotate-180" : ""}`}
            />
          </div>
          <div className="flex flex-col gap-2 items-start">
            <span className="text-[#757575] font-medium text-sm">
              بیمه بدنه
            </span>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 w-full">
              <div className="flex items-center gap-1 h-10 w-full rounded-lg px-3 py-[10px] border border-[#D1D1D1] text-[#B0B0B0] text-sm bg-[#F6F6F6]">
                <span>تاریخ شروع:</span>
                <span>1400/2/2</span>
              </div>
              <div className="flex items-center gap-1 h-10 w-full rounded-lg px-3 py-[10px] border border-[#D1D1D1] text-[#B0B0B0] text-sm bg-[#F6F6F6]">
                <span>تاریخ پایان:</span>
                <span>1400/10/7</span>
              </div>
              <button className="text-[#F66B34] border border-[#F66B34] text-sm font-medium hidden lg:flex items-center justify-center rounded-lg max-w-36">
                دریافت اطلاعات
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <span className="text-[#757575] font-medium text-sm">
              بیمه ثالث
            </span>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 w-full">
              <div className="flex items-center gap-1 h-10 w-full rounded-lg px-3 py-[10px] border border-[#D1D1D1] text-[#B0B0B0] text-sm bg-[#F6F6F6]">
                <span>تاریخ شروع:</span>
                <span>1400/2/2</span>
              </div>
              <div className="flex items-center gap-1 h-10 w-full rounded-lg px-3 py-[10px] border border-[#D1D1D1] text-[#B0B0B0] text-sm bg-[#F6F6F6]">
                <span>تاریخ پایان:</span>
                <span>1400/10/7</span>
              </div>
              <button className="text-[#F66B34] border border-[#F66B34] text-sm font-medium hidden lg:flex items-center justify-center rounded-lg max-w-36">
                دریافت اطلاعات
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <span className="text-[#757575] font-medium text-sm">
              معاینه فنی
            </span>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 w-full">
              <div className="flex items-center gap-1 h-10 w-full rounded-lg px-3 py-[10px] border border-[#D1D1D1] text-[#B0B0B0] text-sm bg-[#F6F6F6]">
                <span>تاریخ شروع:</span>
                <span>1400/2/2</span>
              </div>
              <div className="flex items-center gap-1 h-10 w-full rounded-lg px-3 py-[10px] border border-[#D1D1D1] text-[#B0B0B0] text-sm bg-[#F6F6F6]">
                <span>تاریخ پایان:</span>
                <span>1400/10/7</span>
              </div>
              <button className="text-[#F66B34] border border-[#F66B34] text-sm font-medium hidden lg:flex items-center justify-center rounded-lg max-w-36">
                دریافت اطلاعات
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <span className="text-[#757575] font-medium text-sm">
              خلافی خودرو
            </span>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 w-full">
              <div className="flex items-center gap-1 h-10 w-full rounded-lg px-3 py-[10px] border border-[#D1D1D1] text-[#B0B0B0] text-sm bg-[#F6F6F6]">
                <span>تاریخ شروع:</span>
                <span>1400/2/2</span>
              </div>
              <button className="text-[#F66B34] border border-[#F66B34] text-sm font-medium hidden lg:flex items-center justify-center rounded-lg max-w-36">
                دریافت اطلاعات
              </button>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col gap-y-4 shadow-[0_0_4px_0_rgba(207,207,207,0.7)] bg-[#FEFEFE] lg:bg-inherit lg:shadow-none rounded-2xl lg:rounded-none pb-4 px-4 pt-4 lg:px-0 lg:pt-4 ${itemsataState ? "" : "h-[72px] overflow-y-hidden"}`}
        >
          <div
            className="flex items-center justify-between"
            onClick={() => {
              setItemsataState(!itemsataState);
            }}
          >
            <span className="h-10 border-r-2 border-[#F66B34] p-[10px] font-medium text-[#0F0F0F]">
              اطلاعات اقلام مصرفی
            </span>
            <i
              className={`cc-arrow-down text-2xl leading-3 ${itemsataState ? "rotate-180" : ""}`}
            />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 w-full">
            <div className="flex flex-col gap-2 items-start">
              <span className="text-[#757575] font-medium text-sm">
                کیلومتر فعلی
              </span>
              <div className="flex items-center gap-1 h-10 w-full rounded-lg px-3 py-[10px] border border-[#D1D1D1] text-[#B0B0B0] text-sm bg-[#F6F6F6]">
                <span>
                  {numberWithCommas(historyData.userVehicle?.kilometers_now) ||
                    "نامشخص"}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-start">
              <span className="text-[#757575] font-medium text-sm">
                کیلو متر مصرفی ماهانه
              </span>
              <div className="flex items-center gap-1 h-10 w-full rounded-lg px-3 py-[10px] border border-[#D1D1D1] text-[#B0B0B0] text-sm bg-[#F6F6F6]">
                <span>
                  {numberWithCommas(historyData.userVehicle?.kilometers_use) ||
                    "نامشخص"}
                </span>
              </div>
            </div>
          </div>
          {innerWidthNumber > 1024 ? (
            <table className="text-center">
              <thead>
                <tr className="[&>*]:border [&>*]:border-[#B0B0B0] h-12 text-sm font-medium [&>*]:bg-[#3d5b86] text-white">
                  <th>عنوان</th>
                  <th>کیلومتر تعویض فعلی</th>
                  <th>کیلومتر تعویض بعدی</th>
                  <th>تاریخ تعویض فعلی</th>
                  <th>تاریخ تعویض بعدی</th>
                </tr>
              </thead>
              <tbody>
                {historyData?.car_id_card?.map((row, index) => (
                  <tr
                    key={index}
                    className="[&>*]:border [&>*]:border-[#B0B0B0] h-11 text-sm font-medium text-[#757575]"
                  >
                    <td>{row.service_fa}</td>
                    <td>{numberWithCommas(row.replacement_km)}</td>
                    <td>{numberWithCommas(row.next_replacement_km)}</td>
                    <td>
                      {moment(row.replacement_time * 1000).format("YYYY/MM/DD")}
                    </td>
                    <td>
                      {moment(row.next_replacement_time * 1000).format(
                        "YYYY/MM/DD"
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            historyData?.car_id_card?.map((row, index) => (
              <div className="flex flex-col gap-6 border-b pb-2">
                <span className="text-[#0F0F0F] text-sm font-medium border-r-2 border-[#F66B34] pr-1">
                  {row.service_fa}
                </span>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="font-medium text-sm text-[#757575]">
                        تعویض فعلی:
                      </span>
                      <span className="font-medium text-xs text-[#B0B0B0]">
                        {numberWithCommas(row.replacement_km)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-medium text-sm text-[#757575]">
                        تاریخ:
                      </span>
                      <span className="font-medium text-xs text-[#B0B0B0]">
                        {moment(row.replacement_time * 1000).format(
                          "YYYY/MM/DD"
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="font-medium text-sm text-[#757575]">
                        تعویض بعدی:
                      </span>
                      <span className="font-medium text-xs text-[#B0B0B0]">
                        {numberWithCommas(row.next_replacement_km)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-medium text-sm text-[#757575]">
                        تاریخ:
                      </span>
                      <span className="font-medium text-xs text-[#B0B0B0]">
                        {moment(row.next_replacement_time * 1000).format(
                          "YYYY/MM/DD"
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </PanelContainer>
  );
};

export default History;
