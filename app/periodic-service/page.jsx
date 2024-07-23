
import {Suspense} from "react";
import { serviceData} from "@/staticData/data";
import CarServicesSlider from "@/components/CarServicesSlider/CarServicesSlider";
import SelectVehicleBoxComponent from "@/components/periodic-service-components/SelectVehicleBoxComponent";
import PeriodicServiceIndex from "@/components/PeriodicServiceIndex/PeriodicServiceIndex";

const CarServicesSliderData = async () => {
  return <CarServicesSlider data={serviceData}/>;
};


const PeriodicService = (props) => {
  return (
    <div className="lg:flex items-start gap-8 mt-[10px] md:mt-[88px] max-w-[1676px] m-auto p-4 relative">
      <SelectVehicleBoxComponent searchParams={props.searchParams}/>
      <div className={"w-full lg:w-[calc(100%-450px)] flex flex-col gap-8 md:gap-20"}>
        <Suspense fallback={<div>....Loading</div>}>
          <CarServicesSliderData/>
        </Suspense>
        <PeriodicServiceIndex/>  
      </div>
    </div>
  );
};

export default PeriodicService;