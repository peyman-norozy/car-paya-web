import { useState } from "react";
import SearchProduct from "./SearchProduct";

function FilterSearch(props) {
  const [selected, setSelected] = useState(null);
  const [filteredOptions, setFilteredOptions] = useState(props.options);

  const checkOptions = (index) => {
    setSelected((prevState) => (prevState === index ? null : index));
  };
  return (
    <div className="border border-gray_light_border rounded-[0.5rem] p-[0.75rem] bg-white">
      <div className="border-b border-gray_light_border">
        <SearchProduct
          filterOptions={props.options}
          setFilteredOptions={setFilteredOptions}
          placeholder={`جستجو بر اساس ${props.title}`}
        />
        {props.myCarsOption && (
          <div className="flex items-center py-[0.5rem] border-b border-gray_light_border gap-[3%]">
            <input type="checkbox" />
            <label className="text-[12px] text-purple_primary">
              ماشین های خودم
            </label>
          </div>
        )}
        <h6 className="text-[13px] text-purple_primary my-[0.5rem]">
          {props.title}
        </h6>
      </div>
      <ul className="leading-[2rem] mt-[0.8rem] max-h-[14rem] overflow-y-scroll">
        {filteredOptions.map((item, index) => (
          <li className="flex items-center gap-[5%]" key={index}>
            <input
              checked={index === selected}
              onChange={() => checkOptions(index)}
              type="checkbox"
            />
            <label className="text-[12px]">{item.name}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterSearch;
