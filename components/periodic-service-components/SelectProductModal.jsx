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
import Spinner from "../Spinner";
import Image from "next/image";

const SelectProductModal = (props) => {
  const [productData, setProductData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [spinnerState, setSpinnerState] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      axios
        .get(
          process.env.BASE_API +
            `/web/service-periodical?step=step-2&type=${props.params.type}&city_id=${props.params.city_id}&vehicle_tip_id=${JSON.parse(localStorage.getItem("selectedVehicle")).id}&service_location_id=${props.params.service_location_id}&category=${props.selectedServic}`
        )
        .then((res) => {
          setProductData(res?.data?.data);
          setSpinnerState(false);
        })
        .catch((err) => {
          console.log(err);
          setSpinnerState(false);
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
      className={`${!props.productModalState ? "hidden" : "fixed"} fixed top-0 right-0 w-screen h-screen bg-[#000000b2] z-[10000]`}
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
        <div className="overflow-y-scroll h-[400px]">
          {spinnerState ? (
            <div className="flex items-center justify-center h-full">
              <Spinner width="w-[60px]" height="h-[60px]" />
            </div>
          ) : (
            <div className="px-2 h-fit gap-4 flex flex-col py-1">
              {productData.map((item, index) => (
                <div
                  className={`w-full rounded-lg shadow-[0_0_6px_0_rgba(125,125,125,0.5)] flex flex-col gap-3 px-[6px] py-4 transition-all duration-150 relative ${selectedProduct.id === item.id ? "border border-[#F58052]" : ""}`}
                  onClick={() => {
                    selectedProduct.id === item.id
                      ? setSelectedProduct({})
                      : setSelectedProduct(item);
                  }}
                  key={index}
                >
                  <div className="flex flex-col items-start gap-3">
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
                    <div className="flex gap-4 w-full items-start">
                      <Image
                        src={process.env.BASE_API + "/web/file/" + item.image}
                        width={78}
                        height={94}
                        className="w-[78px] h-auto"
                      />
                      <div className="flex flex-col gap-2 w-full">
                        <ul className="grid grid-rows-3 grid-flow-col-dense list-disc gap-x-4 gap-y-2 justify-between w-full min-h-[65px] pl-4">
                          {item.filters.map((attribute) => (
                            <div
                              className="gap-2 flex items-center text-xs text-[#5D5D5D] h-fit"
                              key={attribute.id}
                            >
                              <span className="whitespace-nowrap">
                                {attribute.title} :
                              </span>
                              <span className="font-medium line-clamp-1">
                                {attribute.value}
                              </span>
                            </div>
                          ))}
                        </ul>
                        <div className="w-full bg-[#bbbbbb] h-px"></div>
                        <div className="flex items-center gap-2">
                          <span className="text-[#0F0F0F] font-medium text-xs">
                            {numberWithCommas(item.discount_price)} تومان
                          </span>
                          <span className="text-[#888888] line-through text-xs">
                            {numberWithCommas(item.price)} تومان
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {item.discounted_percent ? (
                    <div
                      className="size-11 absolute -top-[2px] -left-[2px]"
                      style={{ clipPath: "polygon(0 0, 0 100%, 100% 0)" }}
                    >
                      <div className="polygon_clip rounded-tl-lg bg-[#E13342] size-11 absolute top-0 left-0 z-[2] px-2"></div>
                      <div className="size-[2px] absolute top-0 right-0 bg-[#94161F]"></div>
                      <div className="size-[2px] absolute bottom-0 left-0 bg-[#94161F]"></div>
                      <span className="text-white absolute z-[3] font-medium text-xs top-[15%] left-[15%] -rotate-45">
                        {item.discounted_percent}%
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
          )}
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
