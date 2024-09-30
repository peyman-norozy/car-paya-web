const CarAndCityContainer = () => {
    return ( 
        <div
        className={`lg:absolute fixed transition-all duration-500 ${modalClickState ? "bottom-0 right-0 left-0" : "bottom-[-500px]"} w-full lg:top-0 lg:right-0.5 lg:h-full lg:z-0 z-[10000]`}
      >
        {(() => {
          switch (asideStatus) {
            case "car_city":
              return (
                <SelectCarAndCity
                  buttonTitle={"درخواست باتری"}
                  href={
                    JSON.parse(localStorage.getItem("selectedVehicle"))?.id &&
                    cityId
                      ? `batteries/products?attribute_slug=type_vehicle&attribute_value=${searchParams.get("attribute_value")}${
                          JSON.parse(localStorage.getItem("selectedVehicle"))
                            ?.id
                            ? `&selectTipState=true,${JSON.parse(localStorage.getItem("selectedVehicle")).id.toString()}`
                            : ""
                        }`
                      : ""
                  }
                  setAsideStatus={setAsideStatus}
                  setToastieDisplay={setToastieDisplay}
                  setPreventFirstRender={setPreventFirstRender}
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
}
 
export default CarAndCityContainer;