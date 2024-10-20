import { setDeleteModal, setDeleteModalId } from "@/store/todoSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import AddAddressModal from "@/components/vehicle-verification/AddAddressModal";

const UserAddressCard = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <div
      className={`flex flex-col gap-4 p-4 rounded-lg bg-white cursor-pointer shadow-[0_0_4px_0_rgba(207,207,207,0.7)] ${props.selectedAddress === props.data.address_id ? "border border-[#F58052]" : ""}`}
      onClick={() => {
        props.selectedAddress === props.data.address_id
          ? props.setSelectedAddress("")
          : props.setSelectedAddress(props.data.address_id);
        props.setSelectedAddressText(props.data.address);
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className={
              "rounded-[50%] border-2 border-[#F58052] size-5 flex items-center justify-center"
            }
          >
            <div
              className={`rounded-[50%] bg-[#F58052] size-[10px] transition-all duration-500 ${props.selectedAddress === props.data.address_id ? "scale-1" : "scale-0"}`}
            ></div>
          </div>
          <span className="text-[#000000] text-sm">{props.data.title}</span>
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
              setEditModalIsOpen(true);
            }}
          />
          <i
            className={`cc-filter text-2xl absolute ${openMenu ? "left-24" : "left-0"} transition-all top-0 text-[#DB3737]`}
            onClick={() => {
              dispatch(setDeleteModal(true));
              dispatch(setDeleteModalId(props.data.address_id));
            }}
          />
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
      {editModalIsOpen && (
        <>
          <div
            className={"fixed m-auto inset-0 z-[10000000000] bg-[#0000002d]"}
            onClick={() => {
              setEditModalIsOpen(false);
            }}
          >
            <AddAddressModal
              getDataFetch={props.getDataFetch}
              pageType={"edite"}
              setModalIsOpen={setEditModalIsOpen}
              setIsLoading={props.setIsLoading}
              addressEditId={props.data.address_id}
            />
          </div>
          {/* <div
              onClick={() => {
                props.setEditModalIsOpen(false);
              }}
              className={
                "w-full h-[100vh] fixed top-0 right-0 bg-black opacity-[0.7] z-[100000000]"
              }
            ></div> */}
        </>
      )}
    </div>
  );
};

export default UserAddressCard;
