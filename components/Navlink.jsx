import Link from "next/link";
import {usePathname} from "next/navigation";

const Navlink = (props) => {
  const pathName = usePathname()
  return (
    <Link
      href={props.href}
      className={`${
        props.styleState === "habmergerMenue"
          ? "inline-block w-full hover:bg-[#0004] py-2 pr-2"
          : ""
      } ${
        props.href === pathName
          ? props.styleState === "habmergerMenue"
            ? "bg-[#0004]"
            : "bg-[#E63D32] px-3 py-1 text-white"
          : ""
      }`}
    >
      {props.children}
    </Link>
  );
};

export default Navlink;
