import React from "react";

const PackageCard = (props) => {
  const { title, setIsSelected, id, isSelected, onClick } = props;

  return (
    <div
      className={
        "p-[0.75rem] size752:p-[1.5rem] border border-[#848484] rounded-lg flex flex-col gap-3"
      }
    >
      <div className={"flex  items-center justify-between"} onClick={onClick}>
        <div className={"flex items-center gap-2 justify-center "}>
          <div
            className={
              "rounded-[50%] border border-black w-[24px] h-[24px] flex items-center justify-center"
            }
          >
            <div
              className={`rounded-[50%] bg-BLUE_600 w-[16px] h-[16px] transition-all duration-500 ${isSelected === id ? "scale-1" : "scale-0"}`}
            ></div>
          </div>
          <h6 className={"font-medium text-14 size752:text-16"}>{title}</h6>
        </div>
        <p className={"text-BLUE_600 text-14 size752:text-16"}>
          ۱٬۰۰۰٬۰۰ تومان
        </p>
      </div>
      {props.options && (
        <div className={"flex items-center justify-between"}>
          <div className={"flex items-center gap-2 justify-center "}>
            <p>-</p>
            <h6
              className={"font-medium text-12 size752:text-14 text-[#303030]"}
            >
              برسی رنگ بدنه
            </h6>
          </div>
          <i className={"cc-arrow-down"} />
        </div>
      )}
    </div>
  );
};

export default PackageCard;
