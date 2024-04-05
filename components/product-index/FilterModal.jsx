import React from "react";
import SideBarFilters from "@/components/product-index/SideBarFilters";
import Image from "next/image";
import close from "@/public/assets/icons/Close-Circle.svg";

function FilterModal(props) {
  const closeFilterHandler = () => {
    props.setToggleFilter(false);
  };
  return (
    <div>
      <Image
        src={close}
        alt=""
        height={25}
        width={25}
        className="cursor-pointer absolute left-[7%] top-[5%]"
        onClick={closeFilterHandler}
      />
      <div className="w-[60%] m-auto mt-[2rem] mb-[4rem]">
        <SideBarFilters on_click={closeFilterHandler} />
      </div>
    </div>
  );
}

export default FilterModal;
