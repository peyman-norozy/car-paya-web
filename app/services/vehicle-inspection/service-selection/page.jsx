"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import PackageCard from "@/components/vehicle-verification/PackageCard";
import useSetQuery from "@/hook/useSetQuery";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { postData } from "@/utils/client-api-function-utils";
import { useDispatch, useSelector } from "react-redux";
import { error } from "@/utils/function-utils";
import { ToastContainer } from "react-toastify";
import search from "@/public/assets/images/search.png";
import { getCookies } from "cookies-next";
import { setLoginModal } from "@/store/todoSlice";
import nProgress from "nprogress";
import ServiceInformation from "@/components/ServiceInformation/ServiceInformation";
const PackageStep = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [data, setData] = useState();
  const [message, setMessage] = useState("");
  const [isSelected, setIsSelected] = useState(null);
  const [title, setTitle] = useState(null);
  const [price, setPrice] = useState(null);
  const dispatch = useDispatch();
  const Length = useSelector(
    (state) => state.todo.vehicleVerificationBasketLength
  );
  const setQuery = useSetQuery();

  const selectPackageHandler = (id, title, price) => {
    if (isSelected !== id) {
      setIsSelected(id);
      setTitle(title);
      setPrice(price);
    } else {
      setIsSelected(null);
      setTitle(null);
    }
  };

  useEffect(() => {
    setIsSelected(Length[0]?.item?.item?.id);
    const city_id = searchParams.get("city_id");
    const selectedItem = searchParams.get("vehicle_tip");
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
        res.data.data.length ? setData(res.data.data) : setData([]);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        setData([]);
      });
  }, [searchParams]);
  const nextStepHandler = async () => {
    axios
      .get(process.env.BASE_API + "/web/checkAuth", {
        headers: {
          Authorization: "Bearer " + getCookies("Authorization").Authorization,
        },
      })
      .then(async () => {
        if (Length.length) {
          await postData("/web/cart/remove", {
            cartable_id: Length[0].item.item.id,
            cartable_type: "VEHICLE_VERIFICATION",
            vehicle_tip_id: Length[0].vehicle_tip_id,
            step: "5",
          });
        }
        const city_id = searchParams.get("city_id");
        const selectedItem = searchParams.get("vehicle_tip");
        // await postData("/web/cart/add", {
        //   cartable_id: isSelected,
        //   cartable_type: "VEHICLE_VERIFICATION",
        //   vehicle_tip_id: selectedItem,
        //   step: "5",
        // });
        sessionStorage.setItem(
          "verificationCart",
          JSON.stringify({
            package_id: isSelected,
            package_title: title,
            price: price,
          })
        );
        // setQuery.setMultiQuery([
        //   { key: "step", value: "step-2" },
        //   { key: "city_id", value: city_id },
        //   {
        //     key: "vehicle_tip",
        //     value: selectedItem,
        //   },
        //   { key: "package_id", value: isSelected },
        // ]);
        nProgress.start();
        router.push(
          `/services/vehicle-inspection/time-selection?city_id=${city_id}&vehicle_tip=${selectedItem}&package_id=${isSelected}&step=step-2`
        );
      })
      .catch((err) => {
        dispatch(setLoginModal(true));
      });
  };
  return (
    <div className={"relative"}>
      <ServiceInformation />
      <div
        className={
          "flex items-start justify-between mt-[28px] lg:p-6 rounded-2xl w-full lg:w-[calc(100%-424px)] mr-auto mb-4 bg-[#FDFDFD] lg:shadow-[0_0_6px_0_rgba(125,125,125,0.5)] min-h-[605px]"
        }
      >
        <div className={"w-full flex flex-col gap-4 mx-4 sm:mx-0"}>
          <div className={"flex items-center gap-2 text-[#0E0E0E] w-full"}>
            <i
              className={"cc-arrow-right text-24 cursor-pointer"}
              onClick={() => {
                router.back();
              }}
            />
            <p className={"text-14 size752:text-16 w-full font-medium"}>
              انتخاب خدمات
            </p>
          </div>
          <div className=" flex flex-col gap-4 lg:mr-8">
            <div className="flex gap-2 items-center w-full bg-[#FFFFFF] text-[#D1D1D1] rounded-full border border-[#F2F2F2] px-2 shadow-[0_0_4px_0_rgba(207,207,207,0.7)]">
              <i
                className="cc-car-o text-2xl text-[#518DD5] cursor-pointer"
                onClick={() => {
                  nProgress.start();
                  router.push(`/vehicle-inspection`);
                }}
              />
              <div className="border-b-4 border-dotted border-[#518DD5] w-full"></div>
              <i className="cc-search text-2xl text-[#D1D1D1]" />
              <div className="border-b-4 border-dotted border-[#D1D1D1] w-full"></div>
              <i className="cc-timer text-2xl text-[#D1D1D1]" />
              <div className="border-b-4 border-dotted border-[#D1D1D1] w-full"></div>
              <i className="cc-location text-2xl text-[#D1D1D1]" />
            </div>
            <p
              className={
                "text-14 size752:text-16 w-full font-medium text-[#454545]"
              }
            >
              خدمات خود را انتخاب کنید:
            </p>
            {data?.length === 0 ? (
              <div className={`flex flex-col items-center m-auto my-10 gap-6`}>
                <Image
                  className=""
                  alt="خدمات وجود ندارد"
                  src={search}
                  width={175}
                  height={175}
                />
                <span className="text-[#454545] font-medium text-sm">
                  در حال حاضر خدماتی برای این خودرو ثبت نشد
                </span>
              </div>
            ) : (
              <div className="lg:overflow-y-scroll lg:max-h-[calc(100vh-380px)] p-1">
                <ul className={"flex flex-col gap-2 mb-[2.5rem]"}>
                  {data?.map((item, index) => (
                    <li key={index}>
                      <PackageCard
                        options={item.information}
                        isSelected={isSelected}
                        id={item.id}
                        setIsSelected={setIsSelected}
                        title={item.title}
                        price={item.price}
                        discounted_price={item.discounted_price}
                        onClick={() =>
                          selectPackageHandler(
                            item.id,
                            item.title,
                            item.discounted_price
                          )
                        }
                      />
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <button
              onClick={nextStepHandler}
              disabled={isSelected ? false : true}
              className={`${isSelected ? "bg-[#F66B34]" : "bg-[#FCCAAC]"} hidden self-end lg:flex items-center gap-2 mt-1 size690:mt-3 w-fit text-12 size690:text-[16px] p-[8px] text-white rounded-[4px]`}
            >
              <p>تایید و ادامه</p>
              <i className={"cc-left text-[20px]"} />
            </button>
            <div
              className="fixed w-full rounded-t-2xl shadow-[0_-2px_4px_0_rgba(199,199,199,0.25)] flex justify-center pt-4 pb-6 items-start bottom-0 right-0 bg-white z-[2000] px-10 lg:hidden"
              onClick={nextStepHandler}
            >
              <button
                className={`${isSelected ? "bg-[#F66B34]" : "bg-[#FCCAAC]"} rounded-lg w-full sm:max-w-[400px] text-[#FEFEFE] text-sm font-medium py-3`}
                disabled={isSelected ? false : true}
              >
                تایید ادامه
              </button>
            </div>
          </div>
        </div>
        {/* <Image
          src={"/assets/images/packagePic.svg"}
          alt={""}
          width={544}
          height={544}
          className={"hidden size1570:block"}
        /> */}
      </div>
      <ToastContainer rtl={true} />
    </div>
  );
};

export default PackageStep;
