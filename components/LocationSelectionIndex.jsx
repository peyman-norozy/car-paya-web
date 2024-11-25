"use client";

import { useEffect } from "react";

const LocationSelectionIndex = (props) => {
  useEffect(() => {
    // console.log(props.data);
  }, []);
  return (
    <div
      className={
        "w-full lg:w-[calc(100%-424px)] md:gap-10 mr-auto flex flex-col gap-6"
      }
    >
      {/* {data.data.map((item,index) =>(
              <NewAddressCard key={index} status={props.searchParams.type} item={item} nextUrl={"/periodic-service/service-selection"}/>
              ))} */}
    </div>
  );
};

export default LocationSelectionIndex;
