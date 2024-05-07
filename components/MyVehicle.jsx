import { useState } from "react";
import CarDevice from "@/components/CarDevice";
import CreateMyMotor from "@/components/CreateMyMotor";

const MyVehicle = () => {
  const [newtab, setNewTab] = useState("car-device");
  const deviceData = [
    { title: "افزودن خودرو", id: "car-device" },
    { title: "افزودن موتور سیکلت", id: "motor-device" },
  ];

  const deviceClickHandler = (event) => {
    setNewTab(event.target.id);
  };

  return (
    <div className="flex-1">
      <ul className="flex justify-start gap-4 text-14 overflow-hidden">
        {deviceData.map((item) => (
          <li
            key={item.id}
            id={item.id}
            className={`cursor-pointer ${
              newtab === item.id ? "bg-stone-400" : "hover:bg-stone-200"
            } py-2 px-2 bg-stone-300 rounded-lg`}
            onClick={deviceClickHandler}
          >
            {item.title}
          </li>
        ))}
      </ul>
      {
        {
          "car-device": <CarDevice />,
          "motor-device": <CreateMyMotor />,
        }[newtab]
      }
    </div>
  );
};

export default MyVehicle;
