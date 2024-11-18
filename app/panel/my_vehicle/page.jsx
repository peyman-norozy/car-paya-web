"use client";

import { API_PATHS } from "@/configs/routes.config";
import PanelContainer from "@/layouts/PanelContainer";
import iransFlag from "@/public/assets/images/iransFlag.png";
import Image from "next/image";
import { useState } from "react";

const MyVehicle = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <PanelContainer>
      <div className="bg-[#fefefe] rounded-lg shadow-[0_0_8px_0_rgba(143,143,143,0.25)] min-h-[500px] flex flex-col gap-6 lg:gap-9 p-4 lg:p-12">
        <span className="text-[#0F0F0F] text-sm font-medium">
          شناسنامه و سوابق وسیله نقلیه
        </span>
        <div className="grid grid-cols-1 size830:grid-cols-3 gap-6">
          <div className="shadow-[0_0_4px_0_rgba(207,207,207,0.7)] flex flex-col gap-5 rounded-2xl p-4 relative">
            <div className="flex flex-col-reverse gap-4 items-end">
              <div className="flex flex-col items-start gap-4 w-full ">
                <div className="border border-[#B0B0B0] rounded-lg w-full relative flex gap-1 items-center px-3 py-2  ">
                  <span className="text-sm text-[#3D3D3D]">
                    {/* {data.car_model_title} */}
                    آيودی Q5
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
                      {/* {data.year} */}
                      2018
                    </span>
                  </div>
                  <div className="border border-[#B0B0B0] relative gap-1 rounded-lg w-full px-3 py-2">
                    <span className="font-medium text-sm text-[#6D6D6D] absolute -top-3 right-1 bg-white px-1">
                      رنگ
                    </span>
                    <span className="text-14 text-[#3D3D3D]">
                      {/* {data.info.color.title} */}
                      قرمز
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
                  //   data.image_id
                  JSON.parse(localStorage.getItem("selectedVehicle")).image
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
                  <span>
                    {/* {data.info.plaque[3]} */}
                    11
                  </span>
                  <span className="h-5 w-px bg-[#000000]"></span>
                  <span>{/* {data.info.plaque[2]} */}564</span>
                  <span>{/* {data.info.plaque[1]} */}ب</span>
                  <span>
                    {/* {data.info.plaque[0]} */}
                    54
                  </span>
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
              <button
                className="flex items-center justify-center gap-2 bg-[#F66B34] text-[#FEFEFE] h-10 rounded-lg py-2 text-12 size882:text-14 font-medium w-full"
                // onClick={clickRecordsHandler}
              >
                مشاهده سوابق
              </button>
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
        </div>
      </div>
    </PanelContainer>
  );
};

export default MyVehicle;
