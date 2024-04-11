import MagCategoryItems from "@/components/mags/MagCategoryItems";
import MagsCategorySection from "@/components/mags/MagsCategorySection";
import SearchMags from "@/components/mags/SearchMags";
import { API_PATHS } from "@/configs/routes.config";
import { getData } from "@/utils/api-function-utils";
import React from "react";

const MagCategoryData = async (props) => {
    
  const fetchCategoryData = await getData("/web" + API_PATHS.MAGCATEGORY);
  return <MagsCategorySection data={fetchCategoryData.data} />;
};

const MagCategoryItemsData = async (props) => {
   
    const fetchCategoryData = await getData("/web" + API_PATHS.MAGS +
    "/" + props.slug);
    console.log(fetchCategoryData,'!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
  return <MagCategoryItems data={fetchCategoryData} slug={props.slug}/>;
}
const MagCategory = (props) => {

  return (
    <div className="w-[95%] m-auto size720:w-[90%]">
      <div className="pt-[1rem] mb-[1.5rem] flex flex-col size752:flex-row justify-between gap-[1rem] size752:gap-0">
        <h1 className="text-[32px] font-bold text-[#E73C33] text-center size752:text-start">
          {" "}
          مجله <span className="text-[#212B5E]">کار چک می</span>
        </h1>
        <div><SearchMags /></div>
      </div>
      <MagCategoryData />
      <MagCategoryItemsData slug={props.params["mag-category"]}/>
    </div>
  );
};

export default MagCategory;
