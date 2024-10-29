import { useEffect, useState } from "react";
import SelectCarAndCity from "./SelectCarAndCity";
import SelectCity from "./SelectCity";
import CarSelect from "./CarSelect";
// import { usePathname, useSearchParams } from "next/navigation";
import { error } from "@/utils/function-utils";

const CarAndCityContainer = (props) => {
  const [client, setClient] = useState(false);
  const [asideStatus, setAsideStatus] = useState("car_city");
  const [toastieDisplay, setToastieDisplay] = useState(false);
  const [preventFirstRender, setPreventFirstRender] = useState(false);
  // const [cityId, setCityId] = useState(null);
  // const pathName = usePathname();

  // const searchParams = useSearchParams();

  // useEffect(() => {
  //   setClient(true);
  //   if (typeof window !== "undefined") {
  //     const city = JSON.parse(localStorage.getItem("city"));
  //     setCityId(city?.cityId);
  //   }
  // }, [toastieDisplay, searchParams, pathName]);

  useEffect(() => {
    setClient(true);
    if (typeof window !== "undefined") {
      const selectedVehicle = JSON.parse(
        localStorage.getItem("selectedVehicle"),
      );
      const city = JSON.parse(localStorage.getItem("city"));
      if (preventFirstRender) {
        if (!city) {
          error("لطفا شهر خود را انتخاب کنید");
        } else if (!selectedVehicle) {
          error("لطفا خودرو خود را انتخاب کنید");
        }
      }
    }
  }, [preventFirstRender, toastieDisplay]);

  if (!client) {
    return null;
  }
  return (
    <div
      className={`lg:absolute fixed transition-all duration-500 ${props.modalClickState ? "bottom-0 right-0 left-0" : "-bottom-[100vh]"} w-full lg:top-2 lg:right-1 lg:h-full lg:z-0 z-[10000] flex flex-col`}
    >
      {(() => {
        switch (asideStatus) {
          case "car_city":
            return (
              <SelectCarAndCity
                buttonTitle={props.title}
                onClick={props.onClick}
                // href={props.href}
                // buttonTitle={"درخواست باتری"}
                // href={
                //   JSON.parse(localStorage.getItem("selectedVehicle"))?.id &&
                //   cityId
                //     ? `batteries/products?attribute_slug=type_vehicle&attribute_value=${searchParams.get("attribute_value")}${
                //         JSON.parse(localStorage.getItem("selectedVehicle"))?.id
                //           ? `&selectTipState=true,${JSON.parse(localStorage.getItem("selectedVehicle")).id.toString()}`
                //           : ""
                //       }`
                //     : ""
                // }
                setAsideStatus={setAsideStatus}
                setToastieDisplay={setToastieDisplay}
                setPreventFirstRender={setPreventFirstRender}
                setModalClickState={props.setModalClickState}
              />
            );
          case "citySelection":
            return <SelectCity setAsideStatus={setAsideStatus} />;
          case "carSelection":
            return <CarSelect setAsideStatus={setAsideStatus} />;
          default:
            return null;
        }
      })()}
    </div>
  );
};

export default CarAndCityContainer;
