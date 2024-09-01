"use client";
import { API_PATHS } from "@/configs/routes.config";
import useSetQuery from "@/hook/useSetQuery";
import Image from "next/image";
import { error, numberWithCommas } from "@/utils/function-utils";
import { postData } from "@/utils/client-api-function-utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import nProgress from "nprogress";

const SelectServiceCard = (props) => {
  const setQuery = useSetQuery();
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectProductHandler = () => {
    props.setProductId(props.data.id);
  };

  console.log(props.productId);

  async function buttonClickHandler(productId) {
    const cartData = await postData("/web/cart/add", {
      cartable_id: productId,
      cartable_type: pathName.split("/")[1].toUpperCase().split("-").join("_"),
      vehicle_tip_id: JSON.parse(localStorage.getItem("selectedVehicle"))?.id,
      step: "step-2",
    });
    console.log(cartData);
    if (cartData.status === 200 || cartData.status === 201) {
      console.log(cartData.data);
      setQuery.updateQueryParams(
        { package_id: productId },
        "/detailing/timeSelector",
      );
    } else if (cartData.response.status === 422) {
      console.log(cartData.response.data);
      error(cartData.response.data.message);
    } else if (cartData.response.status === 401) {
      nProgress.start();
      router.push("/login?backurl=" + pathName + "&" + searchParams.toString());
    }
  }

  useEffect(() => {
    props.sendToParent(buttonClickHandler);
  }, []);

  return (
    <div
      className={`rounded-lg flex flex-col items-center p-6 gap-3 cursor-pointer hover:scale-105 transition-transform duration-300 relative bg-[#E7E7E7] ${props.data.id === props.productId ? "border-2 border-lime-500 " : ""}`}
      onClick={selectProductHandler}
    >
      <Image
        className="size-[65px] lg:size-[125px] bg-amber-600 rounded-lg"
        src={
          process.env.BASE_API +
          "/web" +
          API_PATHS.FILE +
          "/" +
          props.data.image_id
        }
        width={125}
        height={125}
      />
      <span className="text-14 lg:text-18">
        {props.data.selected ? props.data.product : props.data.name}
      </span>
      {props.data?.discount_sallary && (
        <div className={"flex items-center gap-1 line-through"}>
          <span>{numberWithCommas(props.data?.discount_sallary)}</span>
          <span className={"text-[12px] font-semibold"}>تومان</span>
        </div>
      )}
      {props.data?.salary && (
        <div className={"flex items-center gap-1"}>
          <span>{numberWithCommas(props.data?.salary)}</span>
          <span className={"text-[12px] font-semibold"}>تومان</span>
        </div>
      )}
      {props.data.selected && (
        <i className="cc-twitter text-[18px] lg:text-[24px] xl:text-[32px] p-2 bg-[#00000020] rounded-lg absolute top-2 left-2 text-red-600" />
      )}
    </div>
  );
};

export default SelectServiceCard;
