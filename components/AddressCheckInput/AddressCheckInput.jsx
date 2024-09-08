import React from "react";

const AddressCheckInput = ({ id, locationId }) => {
  return (
    <>
      <div
        className={
          "w-[28px] h-[28px] rounded-full border-2 border-[#F66B34] flex items-center justify-center"
        }
      >
        {id === locationId && (
          <span
            className={
              "inline-block w-[18px] h-[18px] rounded-full bg-[#F66B34]"
            }
          ></span>
        )}
      </div>
    </>
  );
};

export default AddressCheckInput;
