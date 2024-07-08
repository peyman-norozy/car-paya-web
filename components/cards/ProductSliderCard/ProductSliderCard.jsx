import React from "react";
import Image from "next/image";
import { API_PATHS } from "@/configs/routes.config";
import Button from "@/components/Button";
import { numberWithCommas } from "@/utils/function-utils";

const ProductSliderCard = (props) => {
  return (
    <div
      className={`bg-white overflow-hidden shadow-[0_0px_4px_0_rgba(0,0,0,0.15)] flex-1 text-14 rounded-xl bg-no-repeat bg-cover bg-center ${props.width ? props.width : "size411:w-[207px] w-[171px] mb-2 mt-2"} h-auto `}
    >
      <div className="w-full h-full flex flex-col gap-4 z-50 p-[16px]">
        <div>
          <Image
            src={`/assets/images/Component 281.png`}
            alt={"article image"}
            width={483}
            height={225}
            className={` ${props.responsiveWidth ? `size1056:w-[484px] ${props.responsiveWidth}  h-[225px]` : "w-[484px] h-[225px]"}`}
          />
        </div>
        <div className="pb-4 flex flex-col items-center">
          <h2 className="text-center text-[14px]">
            {/*{props.item.title}*/}
            روغن موتور بهران سوپر پیشتاز 10w40 حجم 4 لیتری
          </h2>
          <div className={"flex items-center justify-between w-full mt-[8px]"}>
            <div className={"w-[48px] h-[48px] relative"}>
              <Image
                src={"/assets/icons/OBJECTS.svg"}
                alt={"icon"}
                width={48}
                height={48}
              />
              <span
                className={
                  "text-white absolute top-[11px] right-[13px] text-[14px]"
                }
              >
                18%
              </span>
            </div>
            <div className={"relative"}>
              <span>{numberWithCommas(430000)}</span>
              <span>تومان</span>
              <div
                className={
                  "text-left text-[#919191] absolute top-[28px] left-0 line-through"
                }
              >
                {numberWithCommas(570000)}
              </div>
            </div>
          </div>
          <Button
            type={"button"}
            // on_click={() => clickMagsHandler(props.item.slug)}
            class_name={
              "bg-[#354597] text-white py-3 px-2 flex item-center justify-center text-12 gap-1 mt-[24px] w-full rounded-[10px]"
            }
          >
            <span>مشاهده</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductSliderCard;
