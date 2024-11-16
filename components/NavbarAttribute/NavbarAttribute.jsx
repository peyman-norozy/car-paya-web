import React, { useCallback, useRef, useState } from "react";
import Link from "next/link";
import useClickOutside from "@/hook/useClickOutside";

const NavbarAttribute = ({ data }) => {
  // console.log(data);
  const [newHeight, setNewHeight] = React.useState(0);
  const [optionHeightHandler, setOptionHeightHandler] = useState(false);
  const ulRef = useRef(null);
  const selectGenderRef = useRef();

  const close = useCallback(() => setNewHeight(0), []);
  useClickOutside(selectGenderRef, close);

  const serviceOpenHandler = () => {
    newHeight ? setNewHeight(0) : setNewHeight(ulRef.current.scrollHeight);
  };

  return data?.link ? (
    <li>
      <Link href={data?.link}>{data?.title}</Link>
    </li>
  ) : (
    <li
      className={"flex items-center gap-1 relative cursor-pointer"}
      onClick={serviceOpenHandler}
      ref={selectGenderRef}
    >
      <span>{data?.title}</span>
      <i
        className={`cc-left text-[22px] ${newHeight ? "rotate-270" : "-rotate-90"} transition-all duration-500`}
      />
      <ul
        className={`absolute bg-white top-12 shadow-lg flex flex-col gap-2 ${newHeight ? "py-4" : "py-0"} w-[200px] overflow-hidden transition-all duration-500 rounded-8`}
        style={newHeight ? { height: newHeight + 28 + "px" } : { height: 0 }}
        ref={ulRef}
      >
        {data?.options.map((option, index) => (
          <li
            key={index + option.label}
            className={"cursor-pointer hover:text-stone-500 px-4"}
          >
            <Link href={option?.link}>{option?.label}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default NavbarAttribute;
