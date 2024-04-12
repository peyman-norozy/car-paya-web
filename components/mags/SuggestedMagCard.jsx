import { API_PATHS } from "@/configs/routes.config";
import React from "react";
import Button from "../Button";
import Image from "next/image";
import { persianDateCovertor } from "@/utils/function-utils";
import Link from "next/link";

const SuggestedMagCard = (props) => {
  const { data } = props;
  return (
    <div className="p-[0.5rem] size525:p-[1rem] bg-[#F4F4F4] rounded-[1rem] flex items-center gap-[1rem]">
      <div className="flex-1 h-[88px] w-[88px] size1000:w-auto size1000:h-[146px]">
        <Image
          src={process.env.BASE_API + "/web/file/" + data.image_id}
          alt={""}
          width={222}
          height={146}
          className="rounded-[16px] h-full w-full"
        />
      </div>
      <div className="pl-[1rem] py-[0.5rem] min-w-[220px] flex-[2]">
        <h2 className="font-medium mb-[0.5rem] line-clamp-1">{data.title}</h2>
        <p className="text-[#444343] text-12 h-[36px] size720:h-[42px] size720:text-14 line-clamp-2 mb-[1rem]">
          {data.description}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-[#6878CA] text-12">
            تاریخ انتشار : <span>{persianDateCovertor(data.created_at)}</span>
          </p>
          <Button class_name="text-12 size752:text-14 text-[#354597]">
            <Link href={`/mags/${data.mag_category_id}/${data.slug}`}>
              ادامه مطلب
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuggestedMagCard;
