import React from "react";

const MyVihicleTitle = (props) => {
  return (
    <h1 className="flex items-center gap-2">
      <span className="text-red_shop">{props.children}</span>
    </h1>
  );
};

export default MyVihicleTitle;
