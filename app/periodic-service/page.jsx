
import {Suspense} from "react";
import { serviceData} from "@/staticData/data";
import CarServicesSlider from "@/components/CarServicesSlider/CarServicesSlider";
import SelectVehicleBoxComponent from "@/components/periodic-service-components/SelectVehicleBoxComponent";
import PeriodicServiceIndex from "@/components/PeriodicServiceIndex/PeriodicServiceIndex";
import CarSelectComponent from "@/components/public/CarSelectComponent";

const CarServicesSliderData = async () => {
  return <CarServicesSlider data={serviceData}/>;
};


const PeriodicService = (props) => {
  return (
    <div className="lg:flex items-start gap-8 mt-1 lg:mt-28 max-w-[1772px] m-auto px-4 lg:px-12 py-4 relative">
      <CarSelectComponent/>
      <div className={"w-full lg:w-[calc(100%-424px)] flex flex-col gap-8 md:gap-10 mr-auto"}>
        <Suspense fallback={<div>....Loading</div>}>
          <CarServicesSliderData/>
        </Suspense>
        <PeriodicServiceIndex/>  
      </div>
    </div>
  );
};

export default PeriodicService;