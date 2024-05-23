import React from "react";

const CarBackgroundCard = (props) => {
  return (
    <div className="flex justify-between items-center px-4 py-4 text-14 text-stone-800 rounded-10 odd:bg-[#FCE9E8] even:bg-[#F7F8FC]">
      {props.children}
    </div>
  );
};

export default CarBackgroundCard;
