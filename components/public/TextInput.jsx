const TextInput = (props) => {
  return (
    <div className="flex flex-col justify-start w-full gap-2">
      <div className={`relative w-full flex items-center border border-[#B0B0B0] px-3 py-2 rounded-lg gap-3`}>
        {props.icon && <i className={`${props.icon} text-xl ${props.disabled?"text-[#D1D1D1]":"text-[#3D3D3D]"}`} />}
        {props.icon && <div className={`h-5 w-px ${props.disabled?"bg-[#D1D1D1]":"bg-[#3D3D3D]"}`}></div>}
        <input
          className={`outline-none ${props.disabled?"text-[#D1D1D1] placeholder:text-[#B0B0B0]":"text-[#3D3D3D] placeholder:text-[#3D3D3D]"} text-base  w-full pr-1`}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
          disabled={props.disabled}
          type={props.type?props.type:"text"}
        />
        <span className={`text-xs ${props.disabled?"text-[#D1D1D1]":"text-[#3D3D3D]"} bg-white w-max absolute -top-[10px] right-[10px] px-[6px]`}>
          {props.label}
        </span>
      </div>
      {props.validation&&<span className="text-[#FF0031] px-1 text-14">{props.validation}</span>}
    </div>
  );
};

export default TextInput;
