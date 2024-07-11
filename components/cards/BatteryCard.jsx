import Image from "next/image";
import React from "react";
import Button from "../Button";
import star from "@/public/assets/icons/Star-red.svg";
import toman from "@/public/assets/icons/toman.svg";
import { numberWithCommas } from "@/utils/function-utils";
import { usePathname, useRouter } from "next/navigation";

const BatteryCard = ({ data, setBatteryIsSelected }) => {
  console.log(data);
  const router = useRouter();
  const pathName = usePathname();

  const batteryShowHandler = () => {
    console.log(data.id);
    router.push(pathName + "/" + data.id);
  };

  console.log(data);

  return (
    <div className="w-full text-14 size1160:text-16 rounded-10 shadow-[0_0_6px_0_rgba(177,177,177,1)]  p-[0.5rem] size1228:p-[1.5rem] pb-[1.5rem]  flex flex-col size671:flex-row gap-[1rem] size671:gap-0 items-center justify-between">
      <Image
        src={process.env.BASE_API + "/web/file/" + data.image_id}
        alt={data.name}
        height={100}
        width={116}
        className={"cursor-pointer"}
        onClick={batteryShowHandler}
      />
      <div
        className="w-full size671:w-auto cursor-pointer"
        onClick={batteryShowHandler}
      >
        <h1 className="text-[1.25rem] text-center size671:text-start font-bold text-[#303030]">
          {data.filters.brand} {data.name}
        </h1>
        <ul className="grid grid-cols-2 justify-items-start gap-x-[5rem] gap-y-[0.75rem] text-text_gray my-[1rem]">
          <li className="flex items-center gap-[0.25rem]">
            <p>آمپر:</p>
            <p>{data.amp}</p>
          </li>
          <li className="flex items-center gap-[0.25rem]">
            <p>تکنولوژی:</p>
            <p>{data.filters.Technology}</p>
          </li>
          <li className="flex items-center gap-[0.25rem]">
            <p>ولتاژ:</p>
            <p>{data.filters.voltage}</p>
          </li>
          <li className="flex items-center gap-[0.25rem]">
            <p>قطب:</p>
            <p>{data.filters.pole}</p>
          </li>
          <li className="flex items-center gap-[0.25rem]">
            <p>گارانتی:</p>
            <p>{data.filters.warranty}</p>
          </li>

          <li className="flex items-center gap-[0.25rem]">
            <p>نوع:</p>
            <p>{data.filters.type}</p>
          </li>
        </ul>
        <ul className="flex flex-col gap-[0.5rem]">
          {/* <li className="text-text_gray flex gap-[0.5rem]">
            <Image src={star} alt="" width={20} height={20} />
            <p className="mt-[0.25rem]">
              {data.extra.freeDel && "ارسال و نصب رایگان"}
            </p>
          </li> */}
          <li className="text-text_gray flex gap-[0.5rem]">
            <Image
              src={star}
              alt=""
              width={20}
              height={20}
              className="mb-[0.35rem] self-start mt-[0.25rem]"
            />
            <div className="flex flex-col size671:flex-row gap-[0.75rem] pt-[0.25rem]">
              <p>قیمت با دریافت باطری فرسوده هم آمپر</p>
              <div className="flex items-center gap-[0.75rem]">
                <span className="flex items-center gap-[0.25rem] line-through text-center">
                  {numberWithCommas(data.discounted_price)}
                  <Image
                    src={toman}
                    alt=""
                    width={20}
                    height={20}
                    className="mb-[0.5rem]"
                  />
                </span>
                <span className="flex items-center gap-[0.25rem] text-center">
                  {numberWithCommas(data["same_amp"])}
                  <Image
                    src={toman}
                    alt=""
                    width={20}
                    height={20}
                    className="mb-[0.5rem]"
                  />
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <Button
        on_click={() => setBatteryIsSelected(true)}
        class_name="bg-RED_500 rounded-[8px] text-white py-[0.5rem] px-[1rem] size1314:py-[1rem] size1314:px-[2rem] self-start size671:self-end hover:bg-RED_600"
      >
        اضافه به سبد خرید
      </Button>
    </div>
  );
};

export default BatteryCard;
