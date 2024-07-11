import React, { Fragment } from "react";

const CategoryModal = (props) => {
  return (
    <Fragment>
      <div
        className="modal_match absolute bg-transparent top-[18px] w-[100px]"
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
      >
        <ul className="bg-red-500 mt-[20px]">
            {props.childrenProps}
        </ul>
      </div>
    </Fragment>
  );
};

export default CategoryModal;
