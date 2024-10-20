"use client";

import {
  renderInvoice,
  renderUserAddrress,
  setAreaeModalState,
  setDeleteModal,
} from "@/store/todoSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Portal from "../Portal/Portal";
import axios from "axios";
import { getCookie } from "cookies-next";
import { error, numberWithCommas, success } from "@/utils/function-utils";
import { getCurrentData } from "@/utils/api-function-utils";
import { postData } from "@/utils/client-api-function-utils";

const SelectProductModal = (props) => {
  const [productData, setProductData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      axios
        .get(
          process.env.BASE_API +
            `/web/service-periodical?step=step-3&type=${props.params.type}&city_id=${props.params.city_id}&vehicle_tip_id=${props.params.selectTipState.split(",")[1]}&service_location_id=${props.params.service_location_id}&package_id=${props.selectedServic}`
        )
        .then((res) => {
          console.log(res?.data?.data);
          setProductData(res?.data?.data);
        })
        .catch((err) => {
          console.log(err);
        });
    })();
  }, [props.productModalState]);

  async function buttonClickHandler() {
    const cartData = await postData("/web/cart/add", {
      cartable_id: selectedProduct,
      cartable_type: "PERIODIC_SERVICE",
      vehicle_tip_id: JSON.parse(localStorage.getItem("selectedVehicle"))?.id,
      step: "step-3",
    });

    if (cartData.status === 200 || cartData.status === 201) {
      console.log(cartData.data);
      dispatch(renderInvoice());
      closeModal();
    } else if (cartData.response.status === 422) {
      console.log(cartData.response.data);
      error(cartData.response.data.message);
    } else if (cartData.response.status === 401) {
      dispatch(setLoginModal(true));
    }
  }

  function closeModal() {
    props.setProductModalState(false);
    setSelectedProduct("")
  }

  return (
    <div
      className={`${!props.productModalState ? "hidden" : "fixed"} fixed top-0 right-0 w-screen h-screen bg-[#000000b2] z-[3000]`}
      onClick={() => closeModal()}
    >
      <div
        className="absolute bg-white bottom-0 right-0 sm:inset-0 sm:m-auto h-fit sm:max-w-[560px] sm:rounded-2xl w-full rounded-t-3xl flex flex-col gap-4 p-4 pb-28 sm:pb-4"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className="flex items-center justify-between">
          <span className="text-[#3C3C3C] font-medium">انتخاب روغن موتور</span>
          <i className="cc-twitter text-xl" onClick={closeModal} />
        </div>
        <div className="overflow-y-scroll h-[300px]">
          <div className="px-2 h-fit gap-4 flex flex-col py-1">
            {productData.map((item, index) => (
              <div
                className={`w-full rounded-[4px] shadow-[0_0_6px_0_rgba(125,125,125,0.5)] flex flex-col gap-3 px-[6px] py-4 transition-all duration-500 ${selectedProduct === item.id ? "border border-[#F58052]" : ""}`}
                onClick={() => {
                  selectedProduct === item.id
                    ? setSelectedProduct("")
                    : setSelectedProduct(item.id);
                }}
                key={index}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div
                      className={
                        "rounded-[50%] border-2 border-[#F58052] size-5 flex items-center justify-center"
                      }
                    >
                      <div
                        className={`rounded-[50%] bg-[#F58052] size-[10px] transition-all duration-500 ${selectedProduct === item.id ? "scale-1" : "scale-0"}`}
                      ></div>
                    </div>
                    <span className="font-medium text-xs text-[#010101]">
                      {item.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[#60ABEC] line-through font-medium text-xs">
                      {numberWithCommas(item.discounted_price)} تومان
                    </span>
                    <span className="text-[#1E67BF] font-medium text-sm">
                      {numberWithCommas(item.price)} تومان
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="fixed sm:static w-full rounded-t-2xl shadow-[0_-2px_4px_0_rgba(199,199,199,0.25)] flex justify-center pt-4 pb-6 items-start bottom-0 right-0 bg-white z-[2000] px-10">
          <button
            className={`bg-[#F66B34] rounded-lg w-full sm:max-w-[400px] text-[#FEFEFE] text-sm font-medium py-3`}
            onClick={() => {
              buttonClickHandler();
            }}
          >
            ثبت
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectProductModal;
