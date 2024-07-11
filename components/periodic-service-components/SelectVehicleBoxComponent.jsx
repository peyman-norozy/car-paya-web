'use client'

import { useState } from "react";
import SelectVehicleBox from "../cards/SelectVehicleBox";

const SelectVehicleBoxComponent = (props) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [step, setStep] = useState("car-brands");

  const tabTitle = [
    { name: "خودرو" },
    { name: "موتور سیکلت" },
    { name: "وسیله سنگین" },
    { name: "وسیله من" },
  ];

    return ( 
        <div className="hidden size1000:block size720:w-[48%] size1136:w-[45%] size1000:pt-[9rem] size1056:pt-0 mt-[1rem] self-center size1056:self-auto sticky">
          <SelectVehicleBox
            tabTitle={tabTitle}
            title="انتخاب وسیله نقلیه"
            setSelectedItem={setSelectedItem}
            selectedItem={selectedItem}
            setStep={setStep}
            searchParams={props.searchParams}
            step={step}
          />
        </div>
     );
}
 
export default SelectVehicleBoxComponent;