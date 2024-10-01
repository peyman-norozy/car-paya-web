const AgentAdressCard = (props) => {
  return (
    <div
      className={`p-4 flex flex-col gap-3 bg-white shadow-[0_0_4px_0_rgba(207,207,207,0.7)] rounded-lg cursor-pointer ${props.selectedAddress === props.data.id ? "border border-[#F58052]" : ""} `}
      onClick={() => {
        props.setSelectedAddressText(props.data.address)
        props.selectedAddress === props.data.id
          ? props.setSelectedAddress("")
          : props.setSelectedAddress(props.data.address_id);
      }}
    >
      <div className="flex justify-start gap-2 items-center">
        <div
          className={
            "rounded-[50%] border-2 border-[#F58052] size-5 flex items-center justify-center"
          }
        >
          <div
            className={`rounded-[50%] bg-[#F58052] size-[10px] transition-all duration-500 ${props.selectedAddress === props.data.id ? "scale-1" : "scale-0"}`}
          ></div>
        </div>
        <span className="text-[#010101] text-sm">{props.data.title}</span>
      </div>
      <p className="text-[#5D5D5D] text-xs font-medium">{props.data.address}</p>
    </div>
  );
};

export default AgentAdressCard;
