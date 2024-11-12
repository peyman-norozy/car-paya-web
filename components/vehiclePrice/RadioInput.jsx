import { useState } from "react";

const RadioInput = (props) => {
  const [checked, setChecked] = useState(null);
  return (
    <div className="flex flex-col items-start gap-4 w-full">
      <span className="text-sm">{props.name}</span>
      <div
        className={`w-full h-[38px] rounded-full flex items-center cursor-pointer relative overflow-hidden bg-[#e9e9e9]`}
      >
        {checked !== null && (
          <div
            className={`h-full rounded-full bg-[#F58052] absolute top-0 z-[2] transition-all duration-150`}
            style={{
              width: `${Math.floor((1 / props.options.length) * 100)}%`,
              right: `${checked === 0 ? "0" : `${Math.floor((checked / props.options.length) * 100)}`}%`,
            }}
          ></div>
        )}
        <div className="flex w-full h-full items-center relative z-[3]">
          {props.options?.map((item, index) => (
            <span
              key={index}
              className={`h-full flex justify-center items-center transition-colors duration-150 ${checked === index ? "text-white" : ""}`}
              style={{
                width: `${Math.floor((1 / props.options.length) * 100)}%`,
              }}
              onClick={() => {
                props.tabClickHandler(
                  props.name,
                  item.input_id,
                  item.color,
                  props.top,
                  props.right
                );
                checked === index ? setChecked(null) : setChecked(index);
              }}
            >
              {item.persian_option}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RadioInput;
