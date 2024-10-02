import React from "react";
import Button from "@/components/Button";
import { error, numberWithCommas } from "@/utils/function-utils";
import {
  setBatteriesData,
  setLoginModal,
  setLoginState,
} from "@/store/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getCookies } from "cookies-next";
import { postData } from "@/utils/client-api-function-utils";

const BatteryPriceDitail = (props) => {
  const batteryBasketLength = useSelector(
    (item) => item.todo.batteriesBasketLength,
  );
  const dispatch = useDispatch();

  const basketClickHandler = async () => {
    const CityId = JSON.parse(localStorage.getItem("city"))?.cityId;
    const selectedVehicleId = JSON.parse(
      localStorage.getItem("selectedVehicle"),
    )?.id;

    axios
      .get(process.env.BASE_API + "/web/checkAuth", {
        headers: {
          Authorization: "Bearer " + getCookies("Authorization").Authorization,
        },
      })
      .then(async () => {
        if (batteryBasketLength) {
          error("فقط یک محصول میتوانید به سبد خرید خود اضافه کنید");
        } else if (
          batteryBasketLength &&
          props.item.id ===
            JSON.parse(localStorage.getItem("batteryTotalPrice"))?.productId
        ) {
          error("باتری برای این وسیله نقلیه انتخاب شده است");
        } else if (CityId && selectedVehicleId) {
          props.setBatteryIsSelected(true);
          dispatch(setBatteriesData(props.item));
        } else if (!CityId) {
          error("فیلد شهر و استان را انتخاب نشده");
        } else if (!selectedVehicleId) {
          error("لطفا خودرو خود را انتخاب کنید");
        }
      })
      .catch((err) => {
        dispatch(setLoginModal(true));
      });
  };

  return (
    <div className={"flex flex-col lg:gap-8 gap-4 lg:mt-4"}>
      <div className="flex items-center size671:flex-row gap-[0.75rem] pt-[0.25rem]">
        <p className={"lg:text-[16px] text-14"}>قیمت </p>
        <div className="flex flex-row items-center gap-[0.75rem]">
          <span className="flex items-center gap-[0.25rem] line-through text-center lg:text-[16px] text-[#B4BCC5] text-14">
            {numberWithCommas(props.item.price)} تومان
          </span>
          <span className="flex items-center gap-[0.25rem] text-center lg:text-[16px] text-[#3C3C3C] text-14">
            {numberWithCommas(props.item["discounted_price"])}
            <span>تومان</span>
          </span>
        </div>
      </div>
      <div className={"flex justify-between"}>
        <div className={"flex items-center gap-[0.75rem]"}>
          <p className={"lg:text-[14px] text-12 text-[#518DD5]"}>
            ارسال و نصب رایگان
          </p>
        </div>
        <Button
          on_click={basketClickHandler}
          class_name={
            "bg-[#F66B34] text-white w-[120px] h-[34px] text-12 self-end rounded-[8px] flex item-center justify-between"
          }
        >
          <span className={"h-full flex  items-center pr-3"}>
            تایید و ادامه
          </span>
          <i className={"cc-left text-[24px] mt-1 mr-1 pl-3"} />
        </Button>
      </div>
    </div>
  );
};

export default BatteryPriceDitail;
