import Arrow from "../public/assets/icons/down 1.svg";
import Tick from "../public/assets/icons/checkmark.svg";
import Image from "next/image";
import { useState } from "react";
const SelectAccordian = (props) => {
  const [toggleDescription, setToggleDescription] = useState(false);

  const toggleDescriptionHandler = (index) => {
    setToggleDescription((prevState) => (prevState === index ? null : index));
  };
  return (
    <div>
      {props.data.map((itm, idx) => (
        <div key={idx}>
          <div
            className="flex items-center justify-between p-[0.5rem] border-t-[2px] border-gray_light_border"
            onClick={() => toggleDescriptionHandler(idx)}
          >
            
                  <div className="flex items-center gap-[0.75rem]">
            <Image src={Tick} alt="" height={10} width={10} />
                  <p className="text-[12px] size525:text-[14px]">{itm.title}</p>
                  </div>
            <Image
              src={Arrow}
              alt=""
              height={20}
              width={20}
              className={`transition-all duration-500 ease-linear ${
                toggleDescription === idx ? "rotate-90" : "-rotate-[90deg]"
              }`}
            />
          </div>
          <ul
            className={`leading-[2rem] transition-all duration-500 overflow-hidden ${
              toggleDescription === idx ? "max-h-[1000px]" : "max-h-0 "
            }`}
          >
            {itm.description.map((item, index) => (
              <li key={index}>
                <p className="text-[11px] pr-[2rem] size525:text-[13px]">{item.description_item}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SelectAccordian;
