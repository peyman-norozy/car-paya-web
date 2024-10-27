import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = (props) => {
  const pathName = usePathname();
  return (
    <Link
      href={props.href}
      className={`${
        props.styleState === "habmergerMenue"
          ? "inline-block w-full hover:bg-[#FDE7DE] py-2 pr-2 rounded-8"
          : ""
      } ${
        props.href === pathName
          ? props.styleState === "habmergerMenue"
            ? "bg-[#FDE7DE] rounded-8"
            : "bg-[#E63D32] px-3 py-1 text-white"
          : ""
      }`}
    >
      {props.children}
    </Link>
  );
};

export default Navlink;
