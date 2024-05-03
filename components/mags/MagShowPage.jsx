"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { API_PATHS } from "@/configs/routes.config";
import { persianDateCovertor } from "@/utils/function-utils";
import MagsSlider from "./MagsSlider";
import TrendMags from "./TrendMags";

const MagShowPage = (props) => {
  const { data } = props;
  const magsData = data.mag && data.mag;


  const saveMagHandler = () => {
    // axios.post(process.env.BASE_API + '/mag-favorites').then(res => console.log(res)).catch(err => console.log(err))
  }

  useEffect(() => {
    axios
      .get(process.env.BASE_API + `/web/mag-comments?mag_id=${magsData.id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2 className="text-16 size752:text-[2rem] font-bold">{magsData && magsData.title}</h2>
      <div className="mt-[1rem] flex items-center justify-between text-BLUE_500 mb-[0.75rem]">
        <div className="flex items-center gap-[0.25rem] ">
          <Image
            src="/assets/icons/calendar.svg"
            alt=""
            width={24}
            height={24}
          />
          {magsData && (
            <p className="text-12 size752:text-16">
              آخرین به‌روزرسانی:{" "}
              <span>{persianDateCovertor(magsData.created_at)}</span>
            </p>
          )}
        </div>
        <div className="flex items-center gap-[0.25rem]">
          <Image
            src="/assets/icons/bookmark.svg"
            alt=""
            width={16}
            height={16}
            onClick={saveMagHandler}
          />
          <p className="text-12 size752:text-16">سیو کردن مطالب</p>
        </div>
      </div>
      <Image
        src={
          magsData && process.env.BASE_API + "/web/file/" + magsData.image_id
        }
        alt=""
        width={787}
        height={285}
        className="rounded-[1rem]"
      />
      <div className="flex items-center gap-[0.25rem] my-[1rem]">
        <Image src="/assets/icons/calendar.svg" alt="" width={16} height={16} />
        <p className="text-BLUE_500 text-12 size752:text-16">
          زمان مطالعه {magsData && magsData.read_time} دقیقه
        </p>
      </div>
      <p>{magsData && magsData.description}</p>
      <div className="mt-[1rem] flex items-center justify-between text-BLUE_500 mb-[0.75rem]">
        <div className="flex items-center gap-[0.25rem] ">
          <Image
            src="/assets/icons/user-edit.png"
            alt=""
            width={24}
            height={24}
          />
          <p className="text-12 size752:text-16">
            نویسنده مطلب :{" "}
            <span>{magsData && !magsData.author && "ایمان کرامتی"}</span>
          </p>
        </div>
        <div className="flex items-center gap-[0.25rem]">
          <Image src="/assets/icons/share.png" alt="" width={16} height={16} />
          <p className="text-12 size752:text-16">اشتراک گذاری</p>
        </div>
      </div>
      <div className="size974:hidden">
        <TrendMags data={data}/>
      </div>
      <div>
        <MagsSlider
          data={data.similarMags}
          title="مجله های مرتبط با این مطلب"
        />
      </div>
    </div>
  );
};

export default MagShowPage;
