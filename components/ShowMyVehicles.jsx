import Image from "next/image";
import React from "react";
import {usePathname} from "next/navigation";

const ShowMyVehicles = (props) => {
    const pathname = usePathname()
  const selectItemHandler = (e) => {
      const newUrl = '/' + pathname.split('/')[1] + '/' + e.currentTarget.getAttribute('title')
      window.history.replaceState({ ...window.history.state, as: newUrl, url: newUrl }, '', newUrl)

    props.setSelectedItem(e.currentTarget.id)
    if(props.step === 'car-brands') {
        props.setStep('car-models')
    }else if(props.step === 'car-models') {
        props.setStep('car-tips')
    }else {
        props.setSelectedVehicle(e.currentTarget.id)
    }
    if(props.motorStep === 'motor-brands') {
      props.setMotorStep('motor-models')
  }else if(props.motorStep === 'motor-models') {
      props.setMotorStep('motor-tips')
  }else {
        props.setSelectedVehicle(e.currentTarget.id)
    }
  }

  return (
    <div className="grid grid-cols-3 gap-x-[0.5rem] gap-y-[1rem] rounded-10 border-gray_light_border border-[1px] w-full h-[12rem] p-[1rem] overflow-y-scroll">
      {props.data.map((item, index) => (
        <div key={index} title={item.slug} id={item.id} onClick={selectItemHandler} className="flex flex-col items-center gap-[0.25rem]  w-full cursor-pointer">
          <div className="h-[60px] w-[70px] rounded-5 overflow-hidden">
            <Image
              src={props.step === 'car-brands' ? process.env.BASE_API + "/web/file/" + item.logo : process.env.BASE_API + "/web/file/" + item.image}
              alt={item.name}
              width={100}
              height={100}
              className="w-full h-full"
            />
          </div>
          <p className="text-12 line-clamp-1">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowMyVehicles;
