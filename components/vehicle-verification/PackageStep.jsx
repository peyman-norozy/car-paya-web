import React, { useEffect, useState } from "react";
import Image from "next/image";
import PackageCard from "@/components/vehicle-verification/PackageCard";
import useSetQuery from "@/hook/useSetQuery";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { postData } from "@/utils/client-api-function-utils";
import { useSelector } from "react-redux";
import { error } from "@/utils/function-utils";
import { ToastContainer } from "react-toastify";

const PackageStep = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [isSelected, setIsSelected] = useState(null);
  const Length = useSelector(
    (state) => state.todo.vehicleVerificationBasketLength
  );
  const setQuery = useSetQuery();

  const backStepHandler = () => {
    router.replace(pathname);
  };
  const selectPackageHandler = (id) => {
    setIsSelected(id);
  };

  useEffect(() => {
    setIsSelected(Length[0]?.item?.item?.id)
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
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        console.log(err);
      });
  }, [searchParams]);
  const nextStepHandler = async () => {
    console.log(Length);
    
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
      await postData("/web/cart/add", {
        cartable_id: isSelected,
        cartable_type: "VEHICLE_VERIFICATION",
        vehicle_tip_id: selectedItem,
        step: "5",
      });
      setQuery.setMultiQuery([
        { key: "step", value: "step-2" },
        { key: "city_id", value: city_id },
        {
          key: "vehicle_tip",
          value: selectedItem,
        },
        { key: "package_id", value: isSelected },
      ]);
  };
  return (
    <>
      <div
        className={
          "flex items-start justify-between pt-[28px] w-full lg:w-[calc(100%-424px)] mr-auto mb-4"
        }
      >
        <div
          className={"w-full size1570:w-[50%] flex flex-col gap-4 mx-4 sm:mx-0"}
        >
          <div
            className={
              "flex items-center gap-2 size752:gap-[16px] text-[#0E0E0E] w-full"
            }
          >
            <i
              className={"cc-arrow-right text-24 cursor-pointer"}
              onClick={backStepHandler}
            />
            <p className={"text-14 size752:text-16 w-full font-medium"}>
              انتخاب سرویس
            </p>
          </div>
          <div className="flex gap-2 items-center w-full bg-[#FFFFFF] text-[#D1D1D1]">
            <i className="cc-search text-2xl text-[#518DD5]" />
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
            سرویس خود را انتخاب کنید:
          </p>
          <ul className={"flex flex-col gap-2 mb-[2.5rem]"}>
            {data.map((item, index) => (
              <li key={index}>
                <PackageCard
                  options={item.information}
                  isSelected={isSelected}
                  id={item.id}
                  setIsSelected={setIsSelected}
                  title={item.title}
                  price={item.price}
                  discounted_price={item.discounted_price}
                  onClick={() => selectPackageHandler(item.id)}
                />
              </li>
            ))}
          </ul>
          <button
            onClick={nextStepHandler}
            className={
              "bg-[#F66B34] hidden self-end lg:flex items-center gap-2 mt-1 size690:mt-3 w-fit text-12 size690:text-[16px] p-[8px] text-white rounded-[4px]"
            }
          >
            <p>تایید و ادامه</p>
            <i className={"cc-left text-[20px]"} />
          </button>
          <div
            className="fixed w-full rounded-t-2xl shadow-[0_-2px_4px_0_rgba(199,199,199,0.25)] flex justify-center pt-4 pb-6 items-start bottom-0 right-0 bg-white z-[2000] px-10 lg:hidden"
            onClick={nextStepHandler}
          >
            <button className="bg-[#F66B34] rounded-lg w-full sm:max-w-[400px] text-[#FEFEFE] text-sm font-medium py-3">
              تایید ادامه
            </button>
          </div>
        </div>
        <Image
          src={"/assets/images/packagePic.svg"}
          alt={""}
          width={544}
          height={544}
          className={"hidden size1570:block"}
        />
      </div>
      <ToastContainer rtl={true} />
    </>
  );
};

export default PackageStep;
