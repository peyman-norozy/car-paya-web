import Image from "next/image";
import search from "../../public/assets/icons/icons8-search.svg";
const SearchProduct = (props) => {
  const searchChangeHandler = (event) => {
    props.setFilteredOptions(
      props.filterOptions.filter((item) =>
        item.name.includes(event.target.value),
      ),
    );
  };

  return (
    <div className="border border-gray_light_border rounded-[0.5rem] flex items-center justify-between h-[2.5rem]">
      <input
        type="search"
        placeholder={props.placeholder}
        onChange={searchChangeHandler}
        className="outline-none w-[90%] pr-[0.5rem] text-[11px]"
      />
      <Image
        height={24}
        width={24}
        alt="search icon"
        src={search}
        className="ml-[0.5rem]"
      />
    </div>
  );
};

export default SearchProduct;
