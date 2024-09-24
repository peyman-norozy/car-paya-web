import { API_PATHS } from "@/configs/routes.config";
import { renderInvoice } from "@/store/todoSlice";
import { postData } from "@/utils/client-api-function-utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const InvoiceModal = (props) => {
  const dispatch = useDispatch();

  function closeModal() {
    props.setInvoiceModalState(false);
  }

  async function removeClickHandler(id) {
    const data = await postData("/web/cart/remove", {
      cartable_id: id,
      cartable_type: "PERIODIC_SERVICE",
      vehicle_tip_id: JSON.parse(localStorage.getItem("selectedVehicle"))?.id,
    });
    if (data.status === 200) {
      console.log(data);
      dispatch(renderInvoice());
    }
  }
  return (
    <div
      className={`${!props.invoiceModalState ? "hidden" : "fixed"} fixed top-0 right-0 w-screen h-screen bg-[#000000b2] z-[2000]`}
      onClick={() => closeModal()}
    >
      <div
        className="absolute bg-white bottom-0 right-0 sm:inset-0 sm:m-auto h-fit sm:max-w-[560px] sm:rounded-2xl w-full rounded-t-3xl flex flex-col gap-4 p-4 pb-28 sm:pb-4"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className="flex items-center justify-between">
          <span className="text-[#3C3C3C] font-medium">سبد خرید</span>
          <i className="cc-twitter text-xl" onClick={closeModal} />
        </div>
        <div className="overflow-y-scroll h-[300px]">
          <div className="px-2 h-fit gap-4 flex flex-col py-1">
            {/* {productData.map((item, index) => (
                <div
                  className={`w-full rounded-[4px] shadow-[0_0_6px_0_rgba(125,125,125,0.5)] flex flex-col gap-3 px-[6px] py-4 transition-all duration-500 ${selectedProduct === item.id ? "border border-[#F58052]" : ""}`}
                  onClick={() => {
                    selectedProduct === item.id
                      ? setSelectedProduct("")
                      : setSelectedProduct(item.id);
                  }}
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
                        {item.discounted_price} تومان
                      </span>
                      <span className="text-[#1E67BF] font-medium text-sm">
                        {item.price} تومان
                      </span>
                    </div>
                  </div>
                </div>
              ))} */}
            {props.invoiceData.data.map((item) => (
              <div className="flex items-center gap-2 py-2 shadow-[0_0_8px_0_rgba(176,176,176,0.25)] relative">
                <Image
                  src={
                    process.env.BASE_API +
                    "/web" +
                    API_PATHS.FILE +
                    "/" +
                    item.item.item.image_id
                  }
                  width={92}
                  height={98}
                />
                <div className="flex flex-col gap-2">
                  <span className="text-[#0F0F0F] font-medium text-sm">
                    {item.item.item.name}
                  </span>
                  <ul className="list-disc gap-1 flex flex-col pr-2">
                    <li className="flex items-center gap-1 text-xs text-[#5D5D5D]">
                      <span>حجم:</span>
                      <span className="font-medium">4لیتر</span>
                    </li>
                    <li className="flex items-center gap-1 text-xs text-[#5D5D5D]">
                      <span>کیفیت:</span>
                      <span className="font-medium">SN</span>
                    </li>
                    <li className="flex items-center gap-1 text-xs text-[#5D5D5D]">
                      <span>گرانروی:</span>
                      <span className="font-medium">5W-30</span>
                    </li>
                  </ul>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-medium">قیمت :</span>
                    <span className="text-xs font-medium text-[#1E67BF]">
                      {item.item.item.discounted_price
                        ? item.item.item.discounted_price
                        : item.item.item.price}{" "}
                      تومان
                    </span>
                  </div>
                </div>
                <div
                  className="size-9 rounded-lg bg-[#FDF1F1] flex items-center justify-center absolute bottom-3 left-3"
                  onClick={() => {
                    removeClickHandler(item.item.item.id);
                  }}
                >
                  <i className="cc-filter text-[#888888] text-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="fixed sm:static w-full rounded-t-2xl shadow-[0_-2px_4px_0_rgba(199,199,199,0.25)] flex justify-center pt-4 pb-6 items-start bottom-0 right-0 bg-white z-[2000] px-10">
            <button
              className={`bg-[#F66B34] rounded-lg w-full sm:max-w-[400px] text-[#FEFEFE] text-sm font-medium py-3`}
              onClick={() => {
                buttonClickHandler();
              }}
            >
              ثبت
            </button>
          </div> */}
      </div>
    </div>
  );
};

export default InvoiceModal;
