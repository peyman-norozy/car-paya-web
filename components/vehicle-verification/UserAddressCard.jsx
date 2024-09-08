import { useState } from "react";

const UserAddressCard = (props) => {
  const [openMenu , setOpenMenu] = useState(false)
  return (
    <div
      className={`flex flex-col gap-4 shadow-[0_0_8px_0_rgba(215,215,215,0.25)] p-4 rounded-lg bg-white ${props.selectedAddress === props.data.id ? "border border-[#F58052]" : ""}`}
      onClick={() => {
        props.setSelectedAddress(props.data.id);
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <i className="cc-location text-xl" />
          <span className="text-[#000000] text-sm">{props.data.title}</span>
        </div>
        <div className="relative">
          <i className="cc-menu-kebab text-2xl bg-white relative z-[2]" onClick={()=>{setOpenMenu(!openMenu)}}/>
          <i className={`cc-edit text-2xl absolute ${openMenu?"left-12":"left-0"} top-0 transition-all text-[#DB3737]`} />
          <i className={`cc-filter text-2xl absolute ${openMenu?"left-24":"left-0"} transition-all top-0 text-[#22A137]`} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-start gap-4">
          <div className="flex gap-px items-center">
            <span className="text-[#454545] text-sm">استان:</span>
            <span className="text-[#3C3C3C] font-medium text-xs">
              {props.data.province_name}
            </span>
          </div>
          <div className="flex gap-px items-center">
            <span className="text-[#454545] text-sm">شهر:</span>
            <span className="text-[#3C3C3C] font-medium text-xs">
              {props.data.city_name}
            </span>
          </div>
        </div>
        <span className="text-[#3C3C3C] text-xs">{props.data.address}</span>
      </div>
    </div>
  );
};

export default UserAddressCard;
