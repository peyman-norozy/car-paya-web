const AgentAdressCard = (props) => {
  return (
    <div
      className={`p-4 flex flex-col gap-3 bg-white shadow-[0_0_8px_0_rgba(215,215,215,0.25)] rounded-lg ${props.selectedAddress === props.data.id ? "border border-[#F58052]" : ""} `}
      onClick={() => {
        props.selectedAddress === props.data.id
          ? props.setSelectedAddress("")
          : props.setSelectedAddress(props.data.id);
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
        <span className="text-[#010101] text-sm">{props.data.name}</span>
      </div>
      <p className="text-[#5D5D5D] text-xs font-medium">{props.data.address}</p>
    </div>
  );
};

export default AgentAdressCard;
