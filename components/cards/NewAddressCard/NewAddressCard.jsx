"use client";
import React, { useRef, useState } from "react";
import AddressCheckInput from "@/components/AddressCheckInput/AddressCheckInput";
import { setDeleteModal, setDeleteModalId } from "@/store/todoSlice";
import DeleteModal from "@/components/public/DeleteModal";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import Image from "next/image";
import BatterisDetailCard from "@/components/cards/BatterisDetailCard/BatterisDetailCard";
import BatteryPriceDitail from "@/components/BatteryPriceDitail/BatteryPriceDitail";
import DitailModal from "@/components/modal/DitailModal";

const NewAddressCard = ({
  status,
  item,
  setPageType,
  setModalIsOpen,
  setAddressEditId,
  setLocationId,
  locationId,
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [ditailModalIsOpen, setEditModalIsOpen] = useState(false);
  const innerWidth = useSelector((item) => item.todo.windowInnerWidth);
  const dispatch = useDispatch();
  const pathName = usePathname();
  const accordionContainer = useRef();

  const clickEditHandler = (id) => {
    setPageType("edite");
    setModalIsOpen(true);
    setAddressEditId(id);
  };

  const clickRadioButtonHandler = () => {
    if (pathName.startsWith("/services/batteries")) {
      const batteriesCart = JSON.parse(sessionStorage.getItem("batteriesCart"));
      batteriesCart.address = item.address;
      setLocationId(item.address_id);
      sessionStorage.setItem("batteriesCart", JSON.stringify(batteriesCart));
    } else if (pathName.startsWith("/services/detailing")) {
      sessionStorage.setItem(
        "ditailingCart",
        JSON.stringify({ address: item.address }),
      );
      setLocationId(item.address_id);
    }
  };

  const ditailClickHandler = () => {
    setEditModalIsOpen(true);
  };

  const accordionclickHandler = () => {
    console.log(accordionContainer.current.scrollHeight);
  };

  return (
    <li
      className={`relative h-full bg-white shadow-[0_0_10px_0_rgba(152,152,152,0.4)] py-4 px-6 rounded-[16px] flex flex-col lg:gap-6 gap-2 ${status === "FIXED" && item.address_id === locationId ? " border border-[#F66B34]" : status === "MOVING" && item.address_id === locationId ? "border border-[#F66B34]" : ""}`}
    >
      <div className={`flex-1 ${status === "FIXED" && "flex"}`}>
        <div className={"w-full"}>
          <section className={"flex justify-between"}>
            <div
              className={"flex gap-2 items-center cursor-pointer"}
              onClick={clickRadioButtonHandler}
            >
              <AddressCheckInput id={item.address_id} locationId={locationId} />
              <span className={"font-semibold lg:text-18 text-14"}>
                {item.title}
              </span>
            </div>

            {status === "FIXED" ? (
              ""
            ) : (
              <div
                className="relative"
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                <i
                  className="cc-menu-kebab text-2xl bg-white relative z-[2] cursor-pointer"
                  onClick={() => {
                    setOpenMenu(!openMenu);
                  }}
                />
                <i
                  className={`cc-edit text-2xl absolute ${openMenu ? "left-12" : "left-0"} top-0 transition-all text-[#22A137] cursor-pointer`}
                  onClick={() => {
                    clickEditHandler(item.address_id);
                  }}
                />
                <i
                  className={`cc-filter text-2xl absolute ${openMenu ? "left-24" : "left-0"} transition-all top-0 text-[#DB3737] cursor-pointer`}
                  onClick={() => {
                    dispatch(setDeleteModal(true));
                    dispatch(setDeleteModalId(item.address_id));
                  }}
                />
              </div>
            )}
          </section>
          <section
            className={
              "flex lg:justify-start justify-between lg:gap-6 gap-2 mb-4 mt-3"
            }
          >
            {/*<div className={"flex lg:gap-[11px] gap-1 lg:text-16 text-12"}>*/}
            {/*  <span className={"font-semibold"}>استان:</span>*/}
            {/*  <span>{item.province_name}</span>*/}
            {/*</div>*/}
            <div className={"flex lg:gap-[11px] gap-1 lg:text-16 text-12"}>
              <span className={"font-semibold"}>شهر:</span>
              <span>{item.city_name}</span>
            </div>
            <div className={"flex lg:gap-[11px] gap-1 lg:text-16 text-12"}>
              <span className={"font-semibold"}>محله:</span>
              <span>{item.area_name}</span>
            </div>
          </section>
          <section className={"flex"}>
            <p className={"leading-7 lg:text-16 text-12 lg:mb-4 mb-0"}>
              {/*<span className={"font-semibold"}> آدرس دقیق: </span>*/}
              {item.address}
            </p>
          </section>
          <ul
            className={
              "lg:grid hidden grid-cols-2 size1362:gap-x-16 gap-x-10 gap-y-4 w-full"
            }
          >
            {status === "FIXED" &&
              item.services?.slice(2).map((item) => {
                return item.value ? (
                  <li key={item.key} className={"flex items-center gap-2"}>
                    <i
                      className={
                        "cc-tick text-[#24D34B] bg-[#24D34B40] w-[17px] h-[17px] rounded-full text-14 flex items-center justify-center"
                      }
                    />
                    <span>{item.label}</span>
                  </li>
                ) : (
                  <li key={item.key} className={"flex items-center gap-2"}>
                    <i
                      className={
                        "cc-add rotate-45 text-[#DB3737] bg-[#DC2A2A66] w-[17px] h-[17px] rounded-full text-10 flex items-center justify-center"
                      }
                    />
                    <span>{item.label}</span>
                  </li>
                );
              })}
          </ul>
        </div>
        {/*{status === "FIXED" && (*/}
        {/*  <div>*/}
        {/*    <Image*/}
        {/*      src={"/assets/images/design-8.png"}*/}
        {/*      alt={"service image"}*/}
        {/*      width={1000}*/}
        {/*      height={1000}*/}
        {/*      className={*/}
        {/*        "lg:w-[230px] lg:h-[204px] w-[140px] h-[87px] rounded-8"*/}
        {/*      }*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*)}*/}

        {/*{status === "FIXED" && (*/}
        {/*  <div className={`absolute -top-1 -left-1`}>*/}
        {/*    <Image*/}
        {/*      src={"/assets/icons/image85.svg"}*/}
        {/*      alt={"percent"}*/}
        {/*      width={52}*/}
        {/*      height={51}*/}
        {/*    />*/}
        {/*    <span*/}
        {/*      className={*/}
        {/*        "absolute top-[7px] left-[8px] text-12 text-white -rotate-45"*/}
        {/*      }*/}
        {/*    >*/}
        {/*      25%*/}
        {/*      /!*{props.item.discounted_percent}%*!/*/}
        {/*    </span>*/}
        {/*  </div>*/}
        {/*)}*/}
      </div>
      {/*<section className={""}>*/}
      {/*  <p className={"leading-7 lg:text-16 text-12 mb-4"}>*/}
      {/*    /!*<span className={"font-semibold"}> آدرس دقیق: </span>*!/*/}
      {/*    {item.address}*/}
      {/*  </p>*/}
      {/*</section>*/}
      {status === "FIXED" && innerWidth > 460 && (
        <button
          className={
            "border border-[#F58052] text-[#F58052] py-[6px] rounded-[4px]"
          }
          onClick={ditailClickHandler}
        >
          مشاهده جزئیات
        </button>
      )}
      {status === "FIXED" && innerWidth < 460 && (
        <>
          <ul
            className={
              "grid grid-cols-2 size1362:gap-x-16 gap-x-10 gap-y-4 w-full"
            }
            ref={accordionContainer}
          >
            {status === "FIXED" &&
              item.services?.map((item) => (
                <li key={item.key} className={"flex items-center gap-2"}>
                  <i
                    className={
                      "cc-tick text-[#24D34B] bg-[#24D34B40] w-[17px] h-[17px] rounded-full text-14 flex items-center justify-center"
                    }
                  />
                  <span>{item.label}</span>
                </li>
              ))}
          </ul>
          <div
            className={"flex items-center justify-center"}
            onClick={accordionclickHandler}
          >
            <span className={"text-12"}>مشاهده بیشتر</span>
            <i className={"cc-left"} />
          </div>
        </>
      )}
      <DeleteModal />
      {ditailModalIsOpen && (
        <DitailModal
          item={item.services}
          setEditModalIsOpen={setEditModalIsOpen}
        />
      )}
    </li>
  );
};

export default NewAddressCard;

//<li
//   className={
//     "bg-[#FDFDFD] rounded-[16px] p-[16px] relative text-[#5D5D5D] flex flex-col gap-3 shadow-[0_0_6px_0_rgba(125,125,125,0.5)] lg:shadow-[0_0_4px_0_rgba(207,207,207,0.7)]"
//   }
// >
//   <div className={"flex flex-col justify-end gap-[8px]"}>
//     <h1 className="lg:text-[16px] text-[14px] text-start font-bold text-[#303030] border-r border-r-[#F66B34] pr-2">
//       {props?.item?.filters?.brand} {props?.item?.name}
//     </h1>
//   </div>
//   <div className={"flex lg:gap-16 gap-4"}>
//     <div
//       className={
//         "h-[87px] w-[73px] lg:h-[183px] lg:w-[167px] rounded-[8px] relative self-center overflow-hidden"
//       }
//     >
//       <Image
//         src={process.env.BASE_API + "/web/file/" + props.item.image_id}
//         alt={props.item.name}
//         height={183}
//         width={167}
//         className={"cursor-pointer h-[87px] w-[73px] lg:h-[183px] lg:w-[167px]"}
//         onClick={batteryShowHandler}
//       />
//       {/*<span*/}
//       {/*  className={*/}
//       {/*    "absolute top-0 right-0 flex justify-center items-center text-white text-[14px] rounded-bl-[20px] bg-[#E61919] w-[60px] h-[40px]"*/}
//       {/*  }*/}
//       {/*>*/}
//       {/*  {props.item.discounted_percent}%*/}
//       {/*</span>*/}
//     </div>
//     <div className={"flex-1"}>
//       <ul
//         className={`grid lg:grid-cols-3 grid-cols-2 gap-y-2 text-[12px] lg:text-[14px] text-[#47505D]`}
//       >
//         <BatterisDetailCard item={props.item} />
//       </ul>
//       {props.isMounted && props.innerWidth >= 1024 && (
//         <BatteryPriceDitail
//           item={props.item}
//           setBatteryIsSelected={props.setBatteryIsSelected}
//         />
//       )}
//     </div>
//   </div>
//
//   <div className={`absolute -top-1 -left-1`}>
//     <Image
//       src={"/assets/icons/image85.svg"}
//       alt={"percent"}
//       width={52}
//       height={51}
//     />
//     <span
//       className={"absolute top-[7px] left-[8px] text-12 text-white -rotate-45"}
//     >
//       {props.item.discounted_percent}%
//     </span>
//   </div>
//   {props.isMounted && props.innerWidth < 1024 && (
//     <BatteryPriceDitail
//       item={props.item}
//       setBatteryIsSelected={props.setBatteryIsSelected}
//     />
//   )}
// </li>;
