import React, { useState } from "react";
import { getDataWithFullErrorRes } from "@/utils/api-function-utils";

const DiscountPercent = (props) => {
  const [validationResponse, setValidationResponse] = useState();
  const [validationState, setValidationState] = useState(false);
  const [deleteCoupon, setDeleteCoupon] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);
  async function sendCopon() {
    const response = await getDataWithFullErrorRes("/web/verify/coupon", {
      coupon_code: props.coupon,
      type: props.type,
    });
    console.log(response);
    if (response?.status === "success") {
      console.log(response.data);
      props.setDiscountPrice({
        amount: response.data["amount"],
        percentage: response.data["percentage"],
      });
      setDeleteCoupon(true);
      setInputDisabled(true);
    } else if (response.response.status === 422) {
      setValidationResponse(response.response.data.message);
      setValidationState(true);
      setTimeout(() => {
        setValidationState(false);
      }, 5000);
    }

    // axios
    //   .post(process.env.BASE_API + "/web/cart/discount", {
    //     registration_id: props.id,
    //     cartable_type: props.type,
    //     coupon_code: coupon,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     props.setDiscount(res.data.data.coupon_price);
    //   });
  }

  const deleteCouponHandler = () => {
    props.setCoupon("");
    setDeleteCoupon(false);
    props.setDiscountPrice({
      amount: 0,
      percentage: 0,
    });
    setInputDisabled(false);
  };

  return (
    <>
      <div
        className={`h-[48px] border ${validationState ? "border-red-600" : "border-[#B0B0B0]"} rounded-[8px] flex items-center justify-between pr-3 relative`}
      >
        <i
          className={
            "cc-vector-stroke text-[18px] border-l-2 border-l-black pl-2 w-[50px]"
          }
        />
        <input
          type={"text"}
          placeholder={"123456"}
          className={"w-full h-full outline-0 pr-2"}
          disabled={inputDisabled}
          onChange={(e) => {
            props.setCoupon(e.target.value);
          }}
          value={props.coupon}
        />
        {deleteCoupon ? (
          <button
            className={`${!props.coupon ? "bg-[#c66d6d]" : "bg-[#DB373733]"} h-full w-[96px] text-[#DB3737] rounded-[8px]`}
            disabled={!props.coupon}
            onClick={deleteCouponHandler}
          >
            حذف
          </button>
        ) : (
          <button
            className={`${!props.coupon ? "bg-[#C3D6ED]" : "bg-[#518DD5]"} h-full w-[96px] text-white rounded-[8px]`}
            disabled={!props.coupon}
            onClick={sendCopon}
          >
            تایید
          </button>
        )}

        <span
          className={`bg-[#fbfbfb] px-2 ${validationState ? "text-red-500" : "text-[#454545]"} text-sm absolute -top-3 right-2`}
        >
          کد تخفیف
        </span>
      </div>
      {validationState && (
        <span
          className={`inline-block ${validationState ? "text-red-500" : "text-[#454545]"} pt-1`}
        >
          {validationResponse}
        </span>
      )}
    </>
  );
};

export default DiscountPercent;
