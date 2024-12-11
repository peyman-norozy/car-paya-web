"use client";
import PanelContainer from "@/layouts/PanelContainer";
import axios from "axios";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useState } from "react";

const AddressPage = () => {
  const [data, setData] = useState([]);
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    axios
      .get(
        process.env.BASE_API +
          `/web/service-periodical?step=step-1&city_id=` +
          JSON.parse(localStorage.getItem("city"))?.cityId +
          "&type=MOVING&vehicle_tip_id=" +
          JSON.parse(localStorage.getItem("selectedVehicle")).id,
        {
          headers: {
            Authorization: "Bearer " + getCookie("Authorization"),
          },
        }
      )
      .then((res) => {
        setData(res.data.data);
      });
  }, []);
  return (
    <PanelContainer>
      <div className="bg-[#fefefe] rounded-lg shadow-[0_0_8px_0_rgba(143,143,143,0.25)] min-h-[500px] flex flex-col gap-6 lg:gap-9 p-4 lg:p-12">
        <div className="flex gap-2 items-center ">
          <Link href={"/panel"} className="flex items-center lg:hidden">
            <i className="cc-arrow-right text-xl leading-3" />
          </Link>
          <span className="font-medium text-sm">ادرس ها</span>
        </div>
        <div className="flex flex-col gap-4">
          {data.map((item) => (
            <div
              className={`flex flex-col gap-4 p-4 rounded-lg bg-white cursor-pointer shadow-[0_0_4px_0_rgba(207,207,207,0.7)]`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <i className="cc-location text-lg" />
                  <span className="text-[#000000] text-sm">{item.title}</span>
                </div>
                {/* <div
                  className="relative"
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
                    //   onClick={() => {
                    //     setEditModalIsOpen(true);
                    //   }}
                  />
                  <i
                    className={`cc-filter text-2xl absolute ${openMenu ? "left-24" : "left-0"} transition-all top-0 text-[#DB3737]`}
                    //   onClick={() => {
                    //     dispatch(setDeleteModal(true));
                    //     dispatch(setDeleteModalId(item.address_id));
                    //   }}
                  />
                </div> */}
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-start gap-4">
                  <div className="flex gap-px items-center">
                    <span className="text-[#454545] text-sm">استان:</span>
                    <span className="text-[#3C3C3C] font-medium text-xs">
                      {item.province_name}
                    </span>
                  </div>
                  <div className="flex gap-px items-center">
                    <span className="text-[#454545] text-sm">شهر:</span>
                    <span className="text-[#3C3C3C] font-medium text-xs">
                      {item.city_name}
                    </span>
                  </div>
                </div>
                <span className="text-[#3C3C3C] text-xs">{item.address}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PanelContainer>
  );
};

export default AddressPage;
