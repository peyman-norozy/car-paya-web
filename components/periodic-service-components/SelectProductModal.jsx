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
  const [selectedProduct, setSelectedProduct] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      axios
        .get(
          process.env.BASE_API +
            `/web/service-periodical?step=step-2&type=${props.params.type}&city_id=${props.params.city_id}&vehicle_tip_id=${props.params.selectTipState.split(",")[1]}&service_location_id=${props.params.service_location_id}&category=${props.selectedServic}`
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

  useEffect(() => {
    productData.map((item) => {
      props.invoiceData.map((item2) => {
        if (item.id === item2.id) {
          setSelectedProduct(item);
        }
      });
    });
  }, [productData]);

  async function buttonClickHandler() {
    console.log(selectedProduct.id);
    const sessionsData = JSON.parse(sessionStorage.getItem("periodicCart"));
    if (sessionsData.products === undefined) {
      sessionsData.products = [];
    }
    const sessionsProducts = sessionsData.products;
    if (selectedProduct.id) {
      const repetitive = sessionsProducts?.findIndex((item) => {
        return item.category_id === selectedProduct.category_id;
      });
      if (repetitive === -1) {
        sessionsData.products.push({
          id: selectedProduct.id,
          name: selectedProduct.name,
          discount_price: selectedProduct.discount_price,
          price: selectedProduct.price,
          image_ids: selectedProduct.image_ids[0],
          category_id: selectedProduct.category_id,
          category_slug: selectedProduct.category_slug,
        });
      } else {
        sessionsData.products[repetitive] = {
          id: selectedProduct.id,
          name: selectedProduct.name,
          discount_price: selectedProduct.discount_price,
          price: selectedProduct.price,
          image_ids: selectedProduct.image_ids[0],
          category_id: selectedProduct.category_id,
          category_slug: selectedProduct.category_slug,
        };
      }
    } else {
      sessionsData.products = sessionsProducts.filter((item) => {
        return item.category_slug !== props.selectedServic;
      });
    }
    props.setInvoiceData(sessionsData.products);
    sessionStorage.setItem("periodicCart", JSON.stringify(sessionsData));
    closeModal();
  }

  function closeModal() {
    setSelectedProduct({});
    setProductData([]);
    props.setProductModalState(false);
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
          <span className="text-[#3C3C3C] font-medium">انتخاب محصول</span>
          <i className="cc-twitter text-xl" onClick={closeModal} />
        </div>
        <div className="overflow-y-scroll h-[300px]">
          <div className="px-2 h-fit gap-4 flex flex-col py-1">
            {productData.map((item, index) => (
              <div
                className={`w-full rounded-[4px] shadow-[0_0_6px_0_rgba(125,125,125,0.5)] flex flex-col gap-3 px-[6px] py-4 transition-all duration-150 ${selectedProduct.id === item.id ? "border border-[#F58052]" : ""}`}
                onClick={() => {
                  selectedProduct.id === item.id
                    ? setSelectedProduct({})
                    : setSelectedProduct(item);
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
                        className={`rounded-[50%] bg-[#F58052] size-[10px] transition-all duration-150 ${selectedProduct.id === item.id ? "scale-1" : "scale-0"}`}
                      ></div>
                    </div>
                    <span className="font-medium text-xs text-[#010101]">
                      {item.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[#60ABEC] line-through font-medium text-xs">
                      {numberWithCommas(item.price)} تومان
                    </span>
                    <span className="text-[#1E67BF] font-medium text-sm">
                      {numberWithCommas(item.discount_price)} تومان
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
