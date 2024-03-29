import React from "react";

const CarBackgroundCard = (props) => {
  return (
    <div className="flex justify-between items-center shadow-[0_0_6px_0_rgba(177,177,177,1)] px-4 py-2 text-14 text-stone-800 rounded-10">
      {props.children}
    </div>
  );
};

export default CarBackgroundCard;
