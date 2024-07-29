'use client'
import Link from "next/link";
import Button from "../Button";
import Image from "next/image";
import useSetQuery from "@/hook/useSetQuery";

const DealershipCard = (props) => {
  const servics = ["تعویض روغن موتور","تعویض فیلتر روغن","تعویض فیلتر هوا","تعویض روغن هیدرولیک","تعویض فیلتر هوای کابین","تعویض فیلتر گیربکس اتومات","تعویض روغن گیربکس اتومات","تعویض روغن گیربکس دستی","تعویض لنت","روغن ترمز","ضد یخ","مکمل و اکتان","باتری","تنظیم باد","اپارات","دیاگ ماشین","چکاپ ماشین"]
  const setQuery = useSetQuery()
  function buttonClickHandler() {
    setQuery.updateQueryParams({"agent_id":props.data.id},"/periodic-service/service-selection")
  }
    return ( 
        <li
      className={
        "bg-[#E7E7E7] p-[16px] size666:rounded-[16px] rounded-none shadow-lg list-none"
      }
    >
      <div className={"flex gap-[16px]"}>
        <div className={"size666:w-[240px] w-[140px] size666:h-[240px] h-[144px] bg-[#eee] rounded-[8px]"}>
          <Image
            src={"/assets/images/detailing.jpg"}
            alt={"detailing"}
            width={240}
            height={240}
          />
        </div>
        <div className={"flex-1"}>
          <div className={"flex flex-col justify-end gap-[8px]"}>
            <h1 className={"font-semibold size690:text-[20px] text-[14px]"}>نمایندگی عباس و برادران</h1>
            <p
              className={"text-[#47505D] size690:text-[14px] text-[12px] flex size666:flex-row flex-wrap size666:items-center gap-[8px]"}
            >
              <span className="font-medium">یوسف آباد</span>
              <span
                className={
                  "size666:inline-block hidden w-[5px] h-[5px] bg-[#B0B0B0] rounded-full "
                }
              ></span>
              <span>تقاطع فتحی شقاقی و اسد آبادی جنب بانک سپه</span>
            </p>
          </div>
          <ul
            className={
              "size1142:grid hidden grid-cols-2 min-[1360px]:grid-cols-3 2xl:grid-cols-4 gap-y-[16px] text-[12px] text-[#47505D] mt-[24px] max-h-[160px] overflow-y-scroll"
            }
          >
            {servics.map((item, index) => (
              <li key={index} className={"flex items-center gap-[8px]"}>
                <span
                  className={
                    "inline-block size-4 bg-[#24D34Bb5] rounded-full"
                  }
                ></span>
                <span className="line-clamp-1">{item}</span>
              </li>
            ))}
          </ul>
          <div className={" justify-end size1142:flex hidden"}>
            {/* <Link href={"/periodic-service/service-selection"}> */}
              <Button
                class_name={
                  "bg-[#F66B34] text-white w-[160px] h-[40px] font-[14px] rounded-[8px]"
                }
                on_click = {buttonClickHandler}
              >
                انتخاب خدمات
              </Button>
            {/* </Link> */}
          </div>
        </div>
      </div>
      <div className={"size1142:hidden block"}>
        <div className={"flex mt-[16px] justify-between gap-[16px]"}>
        <div>
          <Button
            class_name={
              "border border-[#007E00] text-[#007E00] size666:w-[160px] w-[150px] size666:h-[40px] h-[32px] size666:text-[14px] text-[12px] rounded-[8px] "
            }
          >
            خدمات قابل ارائه
          </Button>
        </div>
        <div>
          <Button
            class_name={
              "bg-[#F66B34] text-white size666:w-[160px] w-[150px] size666:h-[40px] h-[32px] size666:text-[14px] text-[12px] rounded-[8px] siz666:w-"
            }
          >
            افزودن به سفارش
          </Button>
        </div>
      </div>
      </div>
    </li>
     );
}
 
export default DealershipCard;