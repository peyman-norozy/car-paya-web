import React from "react";

const UserTabsCardChildren = (props) => {
  return (
    <li
      className={`mx-10 px-6 rounded-10 py-[14px] text-12 hover:bg-[#eff2ff4f] flex flex-col justify-center font-medium ${
        props.newRouter === props.item.id ? "bg-[#F66B3429] text-[#F66B34]" : "text-[#FEFEFE]"
      }`}
      tab_id={props.item.id}
      onClick={props.tabClickHandler}
    >
      {props.item.title}
    </li>
  );
};

export default UserTabsCardChildren;
