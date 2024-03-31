import search from "@/public/assets/icons/Search 1.svg";
import Image from "next/image";

const SearchInput = (props) => {
  return (
    <div className="border-[1px] rounded-5 border-gray_light_border py-[0.25rem] px-[1rem] flex items-center">
      <input
        type="search"
        className="outline-none h-full w-full text-14"
        placeholder={props.placeholder}
      />
      <Image src={search} alt="" width={17} height={17} />
    </div>
  );
};

export default SearchInput;
