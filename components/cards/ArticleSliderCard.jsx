import React from "react";
import Button from "@/components/Button";
import Image from "next/image";
import {API_PATHS} from "@/configs/routes.config";

const ArticleSliderCard = (props) => {
  console.log(props.item)
  return (
    <div className="bg-white overflow-hidden border flex-1 text-14 rounded-xl bg-no-repeat bg-cover bg-center">
      <div className="w-full h-full flex flex-col gap-4 z-50">
        <div>
          <Image
            src={`${process.env.BASE_API}/web${API_PATHS.FILE}/${props.item.image_id}`}
            alt={"article image"}
            width={483}
            height={225}
            className={"w-[484px] h-[225px]"}
          />
        </div>
        <div className="px-6 pb-4 flex flex-col items-center">
          <h2 className="text-center text-18">{props.item.title}</h2>
          <div className="flex justify-center w-full mt-4">
            <p className="text-justify leading-7 text-12 font-light line-clamp-3">{props.item.description}</p>
          </div>
          <Button
            type={"button"}
            class_name={
              "bg-[#EAEAEA] font-light py-3 px-2 flex item-center text-12 gap-1"
            }
          >
            <span>بیشتر بدانید</span>
            <Image
              src={"/assets/icons/angle-left.svg"}
              alt={"icon"}
              width={18}
              height={18}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArticleSliderCard;
