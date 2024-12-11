import { setDeleteModal, setDeleteModalId } from "@/store/todoSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const PanelAddressCard = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();
  return (
    <div
      className={`flex flex-col gap-4 p-4 rounded-lg bg-white cursor-pointer shadow-[0_0_4px_0_rgba(207,207,207,0.7)]`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <i className="cc-location text-lg" />
          <span className="text-[#000000] text-sm">{props.item.title}</span>
        </div>
        <div
          className="relative"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <i
            className="cc-menu-kebab text-2xl bg-white relative z-[2]"
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          />
          <i
            className={`cc-edit text-2xl absolute ${openMenu ? "left-12" : "left-0"} top-0 transition-all text-[#22A137]`}
            onClick={() => {
              props.setAddressEditId(props.item.address_id);
              props.setModalType("edite");
              props.setModalIsOpen(true);
            }}
          />
          <i
            className={`cc-filter text-2xl absolute ${openMenu ? "left-24" : "left-0"} transition-all top-0 text-[#DB3737]`}
            onClick={() => {
              dispatch(setDeleteModal(true));
              dispatch(setDeleteModalId(props.item.address_id));
            }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-start gap-4">
          <div className="flex gap-px items-center">
            <span className="text-[#454545] text-sm">استان:</span>
            <span className="text-[#3C3C3C] font-medium text-xs">
              {props.item.province_name}
            </span>
          </div>
          <div className="flex gap-px items-center">
            <span className="text-[#454545] text-sm">شهر:</span>
            <span className="text-[#3C3C3C] font-medium text-xs">
              {props.item.city_name}
            </span>
          </div>
        </div>
        <span className="text-[#3C3C3C] text-xs">{props.item.address}</span>
      </div>
    </div>
  );
};

export default PanelAddressCard;
