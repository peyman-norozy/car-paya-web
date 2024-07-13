import React, { useEffect, useState } from "react";
import { persianDateCovertor } from "@/utils/function-utils";

const ReserveTimeVerification = (props) => {
  const {
    data,
    setTimeIsSelected,
    timeIsSelected,
    optionIsOpen,
    setOptionIsOpen,
  } = props;

  const weekDay =
    data &&
    new Date(data[0] * 1000).toLocaleDateString("fa-IR", { weekday: "long" });

  const openOptionHandler = (index) => {
    setOptionIsOpen((prevState) => (prevState === index ? null : index));
  };

  return (
    <div className={"grid grid-cols-1 size666:grid-cols-2 gap-4"}>
      <div
        className={
          "bg-[#FFF0F0] col-span-full rounded-lg py-2 px-3.5 flex items-center justify-between"
        }
      >
        <p>۸:۰۰ تا ۱۲:۰۰ پیشنهاد ما</p>
        <div className={"flex items-end gap-2"}>
          <p className={"text-18"}>{weekDay}</p>
          <p className={"text-14"}>{persianDateCovertor(data[0])}</p>
        </div>
      </div>
      {data &&
        data[1].map((item, index) => (
          <div
            className={" rounded-lg border border-[#CDCDCD] h-fit"}
            key={index}
          >
            <div
              onClick={() => openOptionHandler(item.id)}
              className={"flex items-center justify-between px-4 py-5"}
            >
              <p className={"text-[13px]"}>
                {item.start_time} تا {item.end_time}
              </p>
              <i className={"cc-arrow-down"} />
            </div>
            {(props.accordionState === undefined
              ? optionIsOpen === item.id
              : props.accordionState) && (
              <div
                className={
                  "grid grid-cols-2 place-content-center border-t border-t-[#EBEDF9] w-[85%] m-auto justify-items-center py-3 gap-y-4"
                }
              >
                {/*first time*/}
                <div
                  key={index}
                  className={
                    "flex items-center p-2 border-b border-b-[#F5F6FF] gap-6"
                  }
                >
                  <p>{item.start_time + ":00"}</p>
                  <div
                    onClick={(e) =>
                      setTimeIsSelected(item.id + "/" + item.start_time + ":00")
                    }
                    className={
                      "rounded-[50%] border border-[#EBEDF9] w-6 h-6 flex item-center justify-center cursor-pointer"
                    }
                  >
                    <div
                      className={`w-[18px] h-[18px] m-auto rounded-[50%] transition-all duration-500 ease-out  ${timeIsSelected === item.id + "/" + +item.start_time + ":00" ? "bg-BLUE_600" : "bg-[#EBEDF9]"}`}
                    ></div>
                  </div>
                </div>
                {/*    second time*/}
                <div
                  key={index}
                  className={
                    "flex items-center p-2 border-b border-b-[#F5F6FF] gap-6"
                  }
                >
                  <p>{+item.start_time + 1 + ":00"}</p>
                  <div
                    onClick={(e) =>
                      setTimeIsSelected(
                        item.id + "/" + (+item.start_time + 1) + ":00",
                      )
                    }
                    className={
                      "rounded-[50%] border border-[#EBEDF9] w-6 h-6 flex item-center justify-center cursor-pointer"
                    }
                  >
                    <div
                      className={`w-[18px] h-[18px] m-auto rounded-[50%] transition-all duration-500 ease-out ${timeIsSelected === item.id + "/" + (+item.start_time + 1) + ":00" ? "bg-BLUE_600" : "bg-[#EBEDF9]"}`}
                    ></div>
                  </div>
                </div>
                {/*    third time*/}
                <div
                  key={index}
                  className={
                    "flex items-center p-2 border-b border-b-[#F5F6FF] gap-6"
                  }
                >
                  <p>{item.start_time + ":30"}</p>
                  <div
                    onClick={(e) =>
                      setTimeIsSelected(item.id + "/" + item.start_time + ":30")
                    }
                    className={
                      "rounded-[50%] border border-[#EBEDF9] w-6 h-6 flex item-center justify-center cursor-pointer"
                    }
                  >
                    <div
                      className={`w-[18px] h-[18px] m-auto rounded-[50%] transition-all duration-500 ease-out ${timeIsSelected === item.id + "/" + +item.start_time + ":30" ? "bg-BLUE_600" : "bg-[#EBEDF9]"}`}
                    ></div>
                  </div>
                </div>
                {/*    forth time*/}
                <div
                  key={index}
                  className={
                    "flex items-center p-2 border-b border-b-[#F5F6FF] gap-6"
                  }
                >
                  <p>{+item.start_time + 1 + ":30"}</p>
                  <div
                    onClick={(e) =>
                      setTimeIsSelected(
                        item.id + "/" + (+item.start_time + 1) + ":30",
                      )
                    }
                    className={
                      "rounded-[50%] border border-[#EBEDF9] w-6 h-6 flex item-center justify-center cursor-pointer"
                    }
                  >
                    <div
                      className={`w-[18px] h-[18px] m-auto rounded-[50%] transition-all duration-500 ease-out ${timeIsSelected === item.id + "/" + (+item.start_time + 1) + ":30" ? "bg-BLUE_600" : "bg-[#EBEDF9]"}`}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      <div className={"flex items-center gap-2"}>
        {!props.accordionState && (
          <p className={"text-14 text-[#212B5E]"}>
            در صورت انتخاب بازده زمانی 16:00 - 18:00 افزایش قیمت به دلیل پیک
            درخواست.
          </p>
        )}
      </div>
    </div>
  );
};

export default ReserveTimeVerification;
