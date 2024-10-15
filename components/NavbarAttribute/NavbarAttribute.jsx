import React, { useRef } from "react";
import Link from "next/link";

const NavbarAttribute = ({ data }) => {
  console.log(data);
  const [newHeight, setNewHeight] = React.useState(0);
  const ulRef = useRef(null);

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
    >
      <span>{data?.title}</span>
      <i className={"cc-left text-[22px] -rotate-90"} />
      <ul
        className={`absolute bg-white top-12 shadow-lg flex flex-col gap-2 px-2 ${newHeight ? "py-2" : "py-0"} w-[200px] overflow-hidden transition-all duration-500`}
        style={{ height: newHeight + "px" }}
        ref={ulRef}
      >
        {data?.options.map((option, index) => (
          <li key={index} className={"cursor-pointer hover:bg-red-500"}>
            <Link href={option?.link}>{option?.label}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default NavbarAttribute;
