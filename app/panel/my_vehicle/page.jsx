"use client";

import { API_PATHS } from "@/configs/routes.config";
import PanelContainer from "@/layouts/PanelContainer";
import iransFlag from "@/public/assets/images/iransFlag.png";
import { getDataWithFullErrorRes } from "@/utils/api-function-utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const MyVehicle = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [vehicleData, setVehicleData] = useState([]);
  const [filteredVehicleData, srtFilteredVehicleData] = useState([]);
  useEffect(() => {
    getMyVehicleData();
  }, []);

  async function getMyVehicleData() {
    const res = await getDataWithFullErrorRes("/user/my-vehicles");
    console.log(res.data);
    setVehicleData(res.data);
    srtFilteredVehicleData(res.data);
  }

  function filterChangeHandler(e) {
    if (e.target.value === "ALL") {
      srtFilteredVehicleData(vehicleData);
    } else {
      srtFilteredVehicleData(
        vehicleData.filter((item) => {
          return item.type === e.target.value;
        })
      );
    }
  }
  return (
    <PanelContainer>
      <div className="bg-[#fefefe] rounded-lg shadow-[0_0_8px_0_rgba(143,143,143,0.25)] min-h-[500px] flex flex-col gap-6 lg:gap-9 p-4 lg:p-12">
        <span className="text-[#0F0F0F] text-sm font-medium hidden lg:inline-block">
          وسیله نقلیه من
        </span>
        <div className="flex gap-2 items-center lg:hidden">
          <Link href={"/panel"} className="flex items-center">
            <i className="cc-arrow-right text-xl leading-3" />
          </Link>
          <span className="font-medium text-sm">پروفایل</span>
        </div>
        <div className="flex justify-between items-center">
          <select
            className="bg-inherit w-32 sm:w-40 text-[#0F0F0F] p-2 rounded-lg text-12 sm:text-16 shadow-[0_0_5px_0_rgba(160,160,160,0.7)] outline-none"
            onChange={filterChangeHandler}
          >
            <option value="ALL">همه وسایل نقلیه</option>
            <option value="CAR">ماشین</option>
            <option value="MOTOR">موتور</option>
            <option value="HEAVY_CAR">ماشین سنگین</option>
          </select>
        </div>
        <div className="grid grid-cols-1 size830:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredVehicleData.map((item, index) => (
            <div
              key={item.id}
              className="shadow-[0_0_4px_0_rgba(207,207,207,0.7)] flex flex-col gap-5 rounded-2xl p-4 relative"
            >
              <div className="flex flex-col-reverse gap-4 items-end">
                <div className="flex flex-col items-start gap-4 w-full ">
                  <div className="border border-[#B0B0B0] rounded-lg w-full relative flex gap-1 items-center px-3 py-2  ">
                    <span className="text-sm text-[#3D3D3D]">
                      {item.vehicle_name || "نامشخص"}
                    </span>
                    <span className="font-medium text-sm text-[#6D6D6D] absolute -top-3 right-1 bg-white px-1">
                      برند/ مدل/ تیپ
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="border border-[#B0B0B0] relative gap-1 rounded-lg w-full px-3 py-2">
                      <span className="font-medium text-sm text-[#6D6D6D] absolute -top-3 right-1 bg-white px-1">
                        سال ساخت
                      </span>
                      <span className="text-14 text-[#3D3D3D]">
                        {item.year || "نامشخص"}
                      </span>
                    </div>
                    <div className="border border-[#B0B0B0] relative gap-1 rounded-lg w-full px-3 py-2">
                      <span className="font-medium text-sm text-[#6D6D6D] absolute -top-3 right-1 bg-white px-1">
                        رنگ
                      </span>
                      <span className="text-14 text-[#3D3D3D]">
                        {item.color || "نامشخص"}
                      </span>
                    </div>
                  </div>
                </div>
                <Image
                  src={
                    process.env.BASE_API +
                    "/web" +
                    API_PATHS.FILE +
                    "/" +
                    item.image
                  }
                  className="w-auto h-full max-h-[150px] mx-auto"
                  width={200}
                  height={150}
                  alt="car"
                />
              </div>
              {"CAR" === "MOTOR" ? (
                <div className="bg-[#FEFEFE] text-[#0E0E0E] flex-col w-28 rounded-md overflow-hidden border border-black">
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
                <div className="bg-white flex items-center justify-between border border-[#B0B0B0] font-bold text-14 text-[#3d3d3d] rounded-lg overflow-hidden">
                  <div className="w-full p-2 text-14 font-bold flex justify-around">
                    <span>{item.plaque[0]}</span>
                    <span className="h-5 w-px bg-[#000000]"></span>
                    <span>{item.plaque[1]}</span>
                    <span>{item.plaque[2]}</span>
                    <span>{item.plaque[3]}</span>
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
              <div className="flex gap-4">
                {/* <button
                className="flex items-center justify-center gap-2 bg-[#F66B34] text-[#FEFEFE] h-10 rounded-lg py-2 text-12 size882:text-14 font-medium w-full"
                // onClick={editClickHandler}
              >
                ویرایش
              </button> */}
                <Link
                  href={"/panel/my_vehicle/history?id=" + item.id}
                  className="w-full"
                >
                  <button
                    className="flex items-center justify-center gap-2 bg-[#F66B34] text-[#FEFEFE] h-10 rounded-lg py-2 text-12 size882:text-14 font-medium w-full"
                    // onClick={clickRecordsHandler}
                  >
                    مشاهده سوابق
                  </button>
                </Link>
                {/* <button
                className="flex items-center justify-center gap-2 border border-[#F66B34] text-[#F66B34] h-10 rounded-lg py-2 text-12 size882:text-14 font-medium w-full"
                // onClick={() => {
                //   setDeleteModalState(true);
                //   setDeleteModalId(data.id);
                // }}
              >
                حذف
              </button> */}
              </div>
              <div
                className="absolute top-4 left-4"
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                <i
                  className="cc-menu-kebab text-2xl bg-white relative z-[2]"
                  onClick={() => {
                    setOpenMenu(!openMenu);
                  }}
                />
                <i
                  className={`cc-edit text-2xl absolute ${openMenu ? "left-12" : "left-0"} top-0 transition-all text-[#22A137]`}
                  // onClick={() => {
                  //   setEditModalIsOpen(true);
                  // }}
                />
                <i
                  className={`cc-filter text-2xl absolute ${openMenu ? "left-24" : "left-0"} transition-all top-0 text-[#DB3737]`}
                  // onClick={() => {
                  //   dispatch(setDeleteModal(true));
                  //   dispatch(setDeleteModalId(props.data.address_id));
                  // }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </PanelContainer>
  );
};

export default MyVehicle;
