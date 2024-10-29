import React from "react";

const ScrollTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={
        "w-[45px] h-[45px] border border-[#F58052] rounded-full flex items-center justify-center m-2"
      }
    >
      <i className={"cc-arrow-up text-[#F58052] text-[20px]"} />
    </button>
  );
};

export default ScrollTop;
