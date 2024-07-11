import React from "react";

const UserTabsCardChildren = (props) => {
  return (
    <li
      className={`mx-10 px-6 rounded-10 py-[14px] text-12 hover:bg-[#EFF2FF] flex flex-col justify-center ${
        props.newRouter === props.item.id ? "bg-[#EFF2FF]" : ""
      }`}
      tab_id={props.item.id}
      onClick={props.tabClickHandler}
    >
      {props.item.title}
    </li>
  );
};

export default UserTabsCardChildren;
