import React, { useEffect, useState } from "react";
import { numberWithCommas, persianDateCovertor } from "@/utils/function-utils";

const ReserveTimeVerification = (props) => {
  const {
    data,
    setTimeIsSelected,
    timeIsSelected,
    optionIsOpen,
    setOptionIsOpen,
    packagePrice,
  } = props;

  const weekDay =
    data &&
    new Date(data[0] * 1000).toLocaleDateString("fa-IR", { weekday: "long" });

  const openOptionHandler = (index) => {
    if (optionIsOpen !== index) {
      window.scrollTo({
        top: 200, // مقدار به پیکسل، 500 پیکسل به پایین اسکرول می‌کند
        behavior: "smooth", // اسکرول آرام
      });
    }
    setOptionIsOpen((prevState) => (prevState === index ? null : index));
  };

  return (
    <div className={"grid grid-cols-1 size666:grid-cols-2 gap-4"}>
      {/* <div
        className={
          "col-span-full py-2 px-3 flex items-center justify-between border-r-2 border-[#F58052]"
        }
      >
        <div className={"flex items-end gap-2 text-sm font-medium"}>
          <p>{weekDay}</p>
          <p>{persianDateCovertor(data[0])}</p>
        </div>
      </div> */}
      {data &&
        data[1].map((item, index) => (
          <div
            className={
              "shadow-[0_0_4px_0_rgba(152,152,152,0.4)] rounded-lg h-fit"
            }
            key={index}
          >
            <div
              onClick={() => openOptionHandler(item.id)}
              className={
                "flex flex-col items-start px-4 py-5 gap-1 border-b border-[#F2F2F2]"
              }
            >
              <div className={"flex items-center justify-between w-full"}>
                <p className={"text-sm text-[#1E67BF] font-medium"}>
                  {item.start_time}:00 تا {item.end_time}:00
                </p>
                <i className={"cc-arrow-down"} />
              </div>
              {item.swing_type === "INCREASE" ? (
                <p className={"text-[12px] flex items-center gap-px"}>
                  <span className="text-red-600">*</span>
                  <span className="text-[#010101]">
                    {numberWithCommas((packagePrice * item.diff_percent) / 100)}{" "}
                    تومان افزایش قیمت به دلیل پیک درخواست
                  </span>
                </p>
              ) : item.swing_type === "DECREASE" ? (
                <p className={"text-[12px] flex items-center gap-px"}>
                  <span className="text-red-600">*</span>
                  <span className="text-[#010101]">
                    {numberWithCommas((packagePrice * item.diff_percent) / 100)}{" "}
                    تومان تخفیف کارچک
                  </span>
                </p>
              ) : (
                ""
              )}
            </div>
            {(props.accordionState === undefined
              ? optionIsOpen === item.id
              : props.accordionState) && (
              <div
                className={
                  "grid grid-cols-2 place-content-center w-[85%] m-auto justify-items-center py-3 gap-y-4"
                }
              >
                {/*first time*/}
                <div
                  key={index}
                  className={`flex items-center p-2 ${timeIsSelected === item.id + "/" + +item.start_time + ":00" ? "border-b border-b-[#F66B34]" : ""} gap-6`}
                  onClick={(e) =>
                    timeIsSelected === item.id + "/" + item.start_time + ":00"
                      ? setTimeIsSelected(null)
                      : setTimeIsSelected(
                          item.id + "/" + item.start_time + ":00"
                        )
                  }
                >
                  <p>{item.start_time + ":00"}</p>
                  <div
                    className={
                      "rounded-[50%] border-2 border-[#F66B34] size-5 flex item-center justify-center cursor-pointer"
                    }
                  >
                    <div
                      className={`size-[10px] m-auto rounded-[50%] transition-all duration-500 ease-out  ${timeIsSelected === item.id + "/" + +item.start_time + ":00" ? "bg-[#F66B34]" : ""}`}
                    ></div>
                  </div>
                </div>
                {/*    second time*/}
                <div
                  key={index}
                  className={`flex items-center p-2 ${timeIsSelected === item.id + "/" + (+item.start_time + 1) + ":00" ? "border-b border-b-[#F66B34]" : ""} gap-6`}
                  onClick={(e) =>
                    timeIsSelected ===
                    item.id + "/" + (+item.start_time + 1) + ":00"
                      ? setTimeIsSelected(null)
                      : setTimeIsSelected(
                          item.id + "/" + (+item.start_time + 1) + ":00"
                        )
                  }
                >
                  <p>{+item.start_time + 1 + ":00"}</p>
                  <div
                    className={
                      "rounded-[50%] border-2 border-[#F66B34] size-5 flex item-center justify-center cursor-pointer"
                    }
                  >
                    <div
                      className={`size-[10px] m-auto rounded-[50%] transition-all duration-500 ease-out ${timeIsSelected === item.id + "/" + (+item.start_time + 1) + ":00" ? "bg-[#F66B34]" : ""}`}
                    ></div>
                  </div>
                </div>
                {/*    third time*/}
                <div
                  key={index}
                  className={`flex items-center p-2 ${timeIsSelected === item.id + "/" + +item.start_time + ":30" ? "border-b border-b-[#F66B34]" : ""} gap-6`}
                  onClick={(e) =>
                    timeIsSelected === item.id + "/" + item.start_time + ":30"
                      ? setTimeIsSelected(null)
                      : setTimeIsSelected(
                          item.id + "/" + item.start_time + ":30"
                        )
                  }
                >
                  <p>{item.start_time + ":30"}</p>
                  <div
                    className={
                      "rounded-[50%] border-2 border-[#F66B34] size-5 flex item-center justify-center cursor-pointer"
                    }
                  >
                    <div
                      className={`size-[10px] m-auto rounded-[50%] transition-all duration-500 ease-out ${timeIsSelected === item.id + "/" + +item.start_time + ":30" ? "bg-[#F66B34]" : ""}`}
                    ></div>
                  </div>
                </div>
                {/*    forth time*/}
                <div
                  key={index}
                  className={`flex items-center p-2 ${timeIsSelected === item.id + "/" + (+item.start_time + 1) + ":30" ? "border-b border-b-[#F66B34]" : ""} gap-6`}
                  onClick={(e) =>
                    timeIsSelected ===
                    item.id + "/" + (+item.start_time + 1) + ":30"
                      ? setTimeIsSelected(null)
                      : setTimeIsSelected(
                          item.id + "/" + (+item.start_time + 1) + ":30"
                        )
                  }
                >
                  <p>{+item.start_time + 1 + ":30"}</p>
                  <div
                    className={
                      "rounded-[50%] border-2 border-[#F66B34] size-5 flex item-center justify-center cursor-pointer"
                    }
                  >
                    <div
                      className={`size-[10px] m-auto rounded-[50%] transition-all duration-500 ease-out ${timeIsSelected === item.id + "/" + (+item.start_time + 1) + ":30" ? "bg-[#F66B34]" : ""}`}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      {/* <div className={"flex items-center gap-2"}>
        {!props.accordionState && (
          <p className={"text-14 text-[#212B5E]"}>
            در صورت انتخاب بازده زمانی 16:00 - 18:00 افزایش قیمت به دلیل پیک
            درخواست.
          </p>
        )}
      </div> */}
    </div>
  );
};

export default ReserveTimeVerification;
