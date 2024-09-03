const UserAddressCard = (props) => {
    return ( 
        <div className={`flex flex-col gap-4 shadow-[0_0_8px_0_rgba(215,215,215,0.25)] p-4 rounded-lg bg-white ${props.selectedAddress === props.data.id ? "border border-[#F58052]":""}`} onClick={()=>{props.setSelectedAddress(props.data.id)}}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <i className="cc-location text-xl"/>
              <span className="text-[#000000] text-sm">{props.data.title}</span>
            </div>
            <i className="cc-menu-kebab text-xl"/>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-start gap-4">
              <div className="flex gap-px items-center">
                <span className="text-[#454545] text-sm">استان:</span>
                <span className="text-[#3C3C3C] font-medium text-xs">{props.data.province_name}</span>
              </div>
              <div className="flex gap-px items-center">
                <span className="text-[#454545] text-sm">شهر:</span>
                <span className="text-[#3C3C3C] font-medium text-xs">{props.data.city_name}</span>
              </div>
            </div>
            <span className="text-[#3C3C3C] text-xs">{props.data.address}</span>
          </div>
        </div>
     );
}
 
export default UserAddressCard;