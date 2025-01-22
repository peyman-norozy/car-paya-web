import React, { useEffect, useState } from "react";
import Image from "next/image";

const ServiceInformation = (props) => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!client) {
    return null;
  }
  const vehicleInformation = JSON.parse(
    localStorage.getItem("selectedVehicle")
  );

  return (
    <div
      className={`lg:absolute fixed transition-all duration-500 lg:top-0 lg:right-0.5 lg:z-0 z-[10000] lg:flex hidden flex-col shadow-[0_0_6px_6px_rgba(125,125,125,0.2)] lg:w-[409px] w-full h-[707px] rounded-[16px] p-6`}
    >
      <div>
        <Image
          src={process.env.BASE_API + "/web/file/" + vehicleInformation?.image}
          alt={"car select"}
          width={356}
          height={185}
        />
      </div>
      <ul className={"text-[#0F0F0F] text-16 font-medium flex flex-col gap-8"}>
        <li className={"flex items-center gap-1"}>
          <i className={"cc-car-o text-[24px]"} />
          <span>نوع وسیله نقلیه : </span>
          <span>
            {vehicleInformation?.brand +
              " " +
              vehicleInformation?.model +
              " " +
              vehicleInformation?.title}
          </span>
        </li>
        {props?.serviceData?.map((item, index) => (
          <li key={index} className={"flex items-center gap-1"}>
            <i className={`${item.icon} text-[24px]`} />
            <span>{item.key}</span>
            <span> {item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceInformation;
