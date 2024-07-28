import { numberWithCommas } from "@/utils/function-utils";
import Button from "../Button";
import Image from "next/image";

const DealershipCard = (props) => {
    const fakeData = [1,2,3,4,5]
    return ( 
        <li
      className={
        "flex gap-[16px] bg-[#E7E7E7] p-[16px] rounded-[16px] shadow-lg"
      }
    >
      <div className={"w-[240px] h-[240px] bg-[#eee] rounded-[8px] relative"}>
        <Image
          src={"/assets/images/detailing.jpg"}
          alt={"detailing"}
          width={240}
          height={240}
        />
        <span
          className={
            "absolute top-0 right-0 flex justify-center items-center text-white text-[14px] rounded-bl-[20px] bg-[#E61919] w-[60px] h-[40px]"
          }
        >
          30%
        </span>
      </div>
      <div className={"flex-1"}>
        <div className={"flex flex-col gap-[8px]"}>
          <h1 className={"text-[20px] font-semibold"}>نمایندگی عباس و برادران</h1>
          <p
            className={"text-[#47505D] text-[14px] flex items-center gap-[8px]"}
          >
            <span className="font-medium">یوسف آباد</span>
            <span
              className={
                "inline-block w-[5px] h-[5px] bg-[#B0B0B0] rounded-full"
              }
            ></span>
            <span>تقاطع فتحی شقاقی و اسد آبادی جنب بانک سپه</span>
          </p>
        </div>
        <ul
          className={
            "grid grid-cols-2 gap-y-[16px] text-[12px] text-[#47505D] mt-[24px]"
          }
        >
            <li key={0} className={"flex items-center gap-[8px]"}>
              <span
                className={
                  "inline-block size-4 bg-[#ff0d0d9d] rounded-full"
                }
              ></span>
              <span>لورم ایپسوم متن ساختگی</span>
            </li>
          {fakeData.map((item, index) => (
            <li key={index} className={"flex items-center gap-[8px]"}>
              <span
                className={
                  "inline-block size-4 bg-[#24D34Bb5] rounded-full"
                }
              ></span>
              <span>لورم ایپسوم متن ساختگی</span>
            </li>
          ))}
          <li key={6} className={"flex items-center gap-[8px]"}>
              <span
                className={
                  "inline-block size-4 bg-[#ff0d0d9d] rounded-full"
                }
              ></span>
              <span>لورم ایپسوم متن ساختگی</span>
            </li>
        </ul>
        <div className={"mt-[24px] flex justify-between"}>
          <div className={"flex items-center gap-[8px]"}>
            <span>{numberWithCommas(4000000)}</span>
            <span
              className={"bg-[#B0B0B0] rounded-full w-[10px] h-[10px]"}
            ></span>
            <span>{numberWithCommas(2000000)} تومان </span>
          </div>
          <div>
            <Button
              class_name={
                "bg-[#F66B34] text-white w-[160px] h-[40px] font-[14px] rounded-[8px]"
              }
            >
              انتخاب خدمات
            </Button>
          </div>
        </div>
      </div>
    </li>
     );
}
 
export default DealershipCard;