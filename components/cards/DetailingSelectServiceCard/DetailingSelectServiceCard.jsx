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
      className={`rounded-lg flex items-start p-2 gap-3 cursor-pointer transition-transform duration-300 relative shadow-[0_0_4px_0_rgba(152,152,152,0.4)] ${props.data.id === props.productId ? "border-2 border-[#F66B34]" : ""}`}
      onClick={selectProductHandler}
    >
      <section className={"flex gap-2"}>
        <div
          className={
            "border-2 border-[#F66B34] size-[20px] rounded-full relative"
          }
        >
          {props.data.id === props.productId && (
            <div
              className={
                "bg-[#F66B34] size-3 rounded-full absolute top-[2px] right-[2px]"
              }
            ></div>
          )}
        </div>
        <div className={"w-[76px] h-[65px]"}>
          <Image
            className="bg-amber-600 rounded-lg size-full"
            src={
              process.env.BASE_API +
              "/web" +
              API_PATHS.FILE +
              "/" +
              props.data.image_id
            }
            alt={"detailing service image"}
            width={76}
            height={65}
          />
        </div>
      </section>
      <section>
        <div className={"flex w-full"}>
          <span className="text-14 lg:text-18 font-medium">
            {props.data.selected ? props.data.product : props.data.name}
          </span>
        </div>
        <ul className={"text-[12px] font-medium flex flex-col gap-2"}>
          <li>سرامیک خودرو / محافظ کننده خودرو </li>
          <li>سرامیک خودرو / محافظ کننده خودرو </li>
        </ul>
        <div className={"w-full h-[1px] bg-[#BBBBBB] my-2"}></div>
        {props.data?.discount_sallary && (
          <div
            className={
              "flex items-center gap-1 line-through text-12 font-medium"
            }
          >
            <span>{numberWithCommas(props.data?.discount_sallary)}</span>
            <span className={"text-[12px] font-semibold"}>تومان</span>
          </div>
        )}
        {props.data?.salary && (
          <div className={"flex items-center gap-1 text-12 font-medium"}>
            <span>{numberWithCommas(props.data?.salary)}</span>
            <span className={"text-[12px] font-semibold"}>تومان</span>
          </div>
        )}
      </section>
    </div>
  );
};

export default SelectServiceCard;
