import { API_PATHS } from "@/configs/routes.config";
import React from "react";
import Button from "../Button";
import Image from "next/image";
import { persianDateCovertor } from "@/utils/function-utils";
import Link from 'next/link'

const SuggestedMagCard = (props) => {
    const {data} = props
    console.log(data);
  return (
    <div className="p-[1rem] bg-[#F4F4F4] rounded-[1rem] flex items-center gap-[1rem]">
      <Image
        src={process.env.BASE_API + "/web/file/" + data.image_id}
        alt={""}
        width={222}
        height={146}
        className="rounded-[16px]"
      />
      <div className="pl-[1rem] py-[0.5rem]">
        <h2 className="font-medium mb-[0.5rem] line-clamp-1">{data.title}</h2>
        <p className="text-[#444343] text-14 line-clamp-2 mb-[1rem]">{data.description}</p>
        <div className="flex items-center justify-between">
            <p className="text-[#6878CA] text-12">تاریخ انتشار : <span>{persianDateCovertor(data.created_at)}</span></p>
            <Button class_name=' text-14 text-[#354597]'>
                <Link href={`/mags/${data.mag_category_id}/${data.slug}`}>ادامه مطلب</Link>
            </Button>
        </div>
      </div>
    </div>
  );
};

export default SuggestedMagCard;
