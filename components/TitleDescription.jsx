import React from "react";

const TitleDescription = (props) => {
  return (
    <h1 className="font-bold border-r-4 border-r-red-500 pr-2 size490:text-16 text-12">
      {props.children}
    </h1>
  );
};

export default TitleDescription;
