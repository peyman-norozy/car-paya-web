"use client";
import React, { useEffect, useState } from "react";
import { error, numberWithCommas } from "@/utils/function-utils";
import Button from "@/components/Button";
import { setBatteriesData } from "@/store/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import PurchaseBatteryModal from "@/components/PurchaseBatteryModal";
import { ToastContainer } from "react-toastify";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const BatteriesAssisantPage = (props) => {
  const batteryBasketLength = useSelector(
    (item) => item.todo.batteriesBasketLength,
  );
  const [batteryIsSelected, setBatteryIsSelected] = useState(false);
  const [batteryProductId, setBatteryProductId] = useState(null);
  const [filterButtery, setFilterButtery] = useState({});
  const searchParams = useSearchParams();
  const dispatch = useDispatch();

  //when refresh page my batteryTotalPrice remove from localStorage
  useEffect(() => {
    console.log(batteryBasketLength);
    if (batteryBasketLength === 0) {
      localStorage.removeItem("batteryTotalPrice");
    }
  }, [batteryBasketLength]);

  const basketClickHandler = () => {
    const CityId = JSON.parse(localStorage.getItem("city"))?.cityId;
    const selectedVehicleId = JSON.parse(
      localStorage.getItem("selectedVehicle"),
    )?.id;
    if (Object.keys(filterButtery).length > 0) {
      if (batteryBasketLength) {
        error("فقط یک محصول میتوانید به سبد خرید خود اضافه کنید");
      } else if (
        batteryBasketLength &&
        batteryProductId ===
          JSON.parse(localStorage.getItem("batteryTotalPrice"))?.productId
      ) {
        error("باتری برای این وسیله نقلیه انتخاب شده است");
      } else if (CityId && selectedVehicleId) {
        setBatteryIsSelected(true);
        dispatch(setBatteriesData(filterButtery));
      } else if (!CityId) {
        error("فیلد شهر و استان را انتخاب نشده");
      } else if (!selectedVehicleId) {
        error("لطفا خودرو خود را انتخاب کنید");
      }
    } else {
      error("باتری خود را انتخاب کنید");
    }
  };

  const radioButtonChangeHandler = (id) => {
    console.log(id);
    setBatteryProductId(id);
    const singleButtery = props.data.data.filter((item) => item.id === id);
    console.log(singleButtery);
    setFilterButtery(...singleButtery);
  };

  console.log(filterButtery);

  return (
    <div className="flex flex-col relative py-4 max-w-[1772px] m-auto">
      <section className="lg:w-[calc(100%-424px)] w-full mr-auto lg:mt-16 mt-[20px] flex flex-col">
        <Link
          href={`/batteries/products?attribute_slug=type_vehicle&attribute_value=car&selectTipState=${searchParams.get("selectTipState")}`}
          className={
            "self-end w-[108px] h-[30px] flex justify-center items-center gap-1 rounded-[8px] bg-white text-[#F66B34] mb-10 text-[14px] font-semibold"
          }
        >
          <span>بازگشت</span>
          <i className={"cc-undo text-[20px]"} />
        </Link>
        <table className="table-auto border-collapse w-full rounded-[20px] overflow-hidden">
          <thead>
            <tr className={"h-[60px] text-[12px]"}>
              <th className="border border-[#B0B0B0] p-2 bg-[#47505D] text-[#FEFEFE]">
                نام باتری
              </th>
              <th className="border border-[#B0B0B0] p-2 bg-[#47505D] text-[#FEFEFE]">
                آمپر
              </th>
              <th className="border border-[#B0B0B0] p-2 bg-[#47505D] text-[#FEFEFE]">
                گارانتی ماه
              </th>
              <th className="border border-[#B0B0B0] p-2 bg-[#47505D]">
                <p
                  className={
                    "flex items-center justify-center size560:flex-row flex-col text-[#FEFEFE]"
                  }
                >
                  <span> قیمت باتری</span>
                  <span>(با باتری فرسوده هم آمپر)</span>
                </p>
              </th>
              <th className="border border-[#B0B0B0] p-2 bg-[#47505D] text-[#FEFEFE]">
                انتخاب
              </th>
            </tr>
          </thead>
          <tbody>
            {props.data.data.map((item) => (
              <tr key={item.id} className={"text-[12px] h-[88px]"}>
                <td className="border border-[#B0B0B0] p-2 bg-[#383838] text-[#FEFEFE] text-center">
                  {item.name}
                </td>
                <td className="border border-[#B0B0B0] p-2 bg-[#383838] text-[#FEFEFE] text-center">
                  {item.amp}
                </td>
                <td className="border border-[#B0B0B0] p-2 bg-[#383838] text-[#FEFEFE] text-center">
                  Male
                </td>
                <td className="border border-[#B0B0B0] p-2 bg-[#383838] text-[#FEFEFE] text-center">
                  {numberWithCommas(item["same_amp"])}
                </td>
                <td className="border border-[#B0B0B0] p-2 bg-[#383838] text-[#FEFEFE] size1400:w-[160px] w-[120px]">
                  <div className="checkbox-wrapper-37 flex justify-center items-center">
                    <input
                      type="radio"
                      name={"terms-checkbox-37"}
                      id={item.id}
                      className="hidden"
                      onChange={() => radioButtonChangeHandler(item.id)}
                    />
                    <label
                      htmlFor={item.id}
                      className="terms-label flex items-center cursor-pointer"
                    >
                      <svg
                        className="checkbox-svg w-7 h-7 border-2 border-[#F66B34] rounded fill-none transition-all duration-300"
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="200"
                          height="200"
                          className="checkbox-box stroke-[#F66B34] stroke-[20]"
                        />
                        <path
                          className="checkbox-tick stroke-white stroke-[15]"
                          d="M52 111.018L76.9867 136L149 64"
                        />
                      </svg>
                    </label>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <Button
        on_click={basketClickHandler}
        class_name={
          "bg-[#F66B34] text-white h-[40px] lg:text-[16px] text-12 self-end rounded-[8px] size1400:w-[160px] w-[120px] mt-4"
        }
      >
        اضافه به سبد خرید
      </Button>

      <PurchaseBatteryModal
        setBatteryIsSelected={setBatteryIsSelected}
        batteryIsSelected={batteryIsSelected}
      />
      <ToastContainer rtl={true} />
    </div>
  );
};

export default BatteriesAssisantPage;
