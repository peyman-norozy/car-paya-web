import React from "react";
import FilterSearch from "@/components/product-index/FilterSearch";
import Button from "@/components/Button";

function SideBarFilters(props) {
  // FAKE DATA
  const firstFilterSearchData = {
    title: "برند خودرو",
    options: [
      { name: "پورشه" },
      { name: "هیوندای" },
      { name: "کیا" },
      { name: "تویوتا" },
      { name: "بی ام و" },
      { name: "بنز" },
      { name: "لکسوس" },
      { name: "پورشه" },
      { name: "هیوندای" },
      { name: "کیا" },
      { name: "تویوتا" },
      { name: "بی ام و" },
      { name: "بنز" },
      { name: "لکسوس" },
    ],
  };
  const filterSearchData = [
    {
      title: "تیپ ماشین",
      options: [
        { name: "تیپ 5" },
        { name: "تیپ دو" },
        { name: "تیپ دو اس ای" },
      ],
    },
    {
      title: "مدل ماشین",
      options: [{ name: "2010" }, { name: "2018" }, { name: "2023" }],
    },
    {
      title: "سال ساخت",
      options: [{ name: "2020" }, { name: "2021" }, { name: "2022" }],
    },
    {
      title: "آمپر",
      options: [{ name: "70 آمپر" }, { name: "50 آمپر" }, { name: "40 آمپر" }],
    },
    {
      title: "برند باطری",
      options: [{ name: "سپاهان" }, { name: "سپاهان" }, { name: "سپاهان" }],
    },
  ];

  // FAKE DATA
  return (
    <div>
      <FilterSearch
        myCarsOption={true}
        title={firstFilterSearchData.title}
        options={firstFilterSearchData.options}
      />
      <Button
        on_click={props.on_click}
        text="مشاهده سوابق اقلام مصرفی"
        class_name="text-[12px] text-white bg-red_shop py-[0.5rem] rounded-[0.5rem] w-full my-[0.8rem]"
      />
      <form className="flex flex-col gap-[1rem]">
        {filterSearchData.map((item, index) => (
          <FilterSearch key={index} title={item.title} options={item.options} />
        ))}
        <Button
          text="اعمال"
          type="submit"
          class_name="text-[12px] text-white bg-red_shop py-[0.5rem] rounded-[0.5rem]"
          on_click={props.on_click}
        />
      </form>
    </div>
  );
}

export default SideBarFilters;
