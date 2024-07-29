'use client'
import useSetQuery from "@/hook/useSetQuery";
import Link from "next/link";

const SelectServiceCard = (props) => {
    const setQuery = useSetQuery()
    function buttonClickHandler() {
      setQuery.updateQueryParams({"package_id":props.data.id},"/periodic-service/product-selection")
    }
    return ( 
        <div
          className={`rounded-lg flex flex-col items-center p-6 gap-3 cursor-pointer hover:scale-105 transition-transform duration-300 relative bg-[#E7E7E7] ${props.data.selected ? "border-2 border-lime-500 " : ""}`}
          onClick={buttonClickHandler}
        >
          <div className="size-[65px] lg:size-[125px] bg-amber-600 rounded-lg"></div>
          <span className="text-14 lg:text-18">
            {props.data.selected ? props.data.product : props.data.name}
          </span>
          {props.data.selected && (
            <i className="cc-twitter text-[18px] lg:text-[24px] xl:text-[32px] p-2 bg-[#00000020] rounded-lg absolute top-2 left-2 text-red-600" />
          )}
        </div>
     );
}
 
export default SelectServiceCard;