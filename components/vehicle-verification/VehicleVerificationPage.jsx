'use client'
import { Fragment, useEffect, useState } from "react";
import SelectVehicleBox from "@/components/cards/SelectVehicleBox";
import SelectedVehicleVerificationBox from "@/components/SelectedVehicleVerificationBox";
import SelectVerificationType from "@/components/cards/SelectVerificationType";

import HowWorks from "@/components/HowWorks";
import CallAndConsult from "@/components/CallAndConsult";
import { API_PATHS } from "@/configs/routes.config";
import axios from "axios";
import SelectProvinceAndCarBox from "@/components/SelectProvinceAndCarBox";
import VerificationFirstStep from "@/components/VerificationFirstStep";
import VerificationSecondStep from "@/components/VerificationSecondStep";
import VerificationThirdStep from "@/components/VerificationThirdStep";



const VehicleVerificationPage = (props) => {
  const {params} = props
  const [step,setStep] = useState(1)


  const HowWorksMockUpData = [
    {
      title: "انتخاب وسیله نقلیه",
      description:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. ",
      img: "/assets/icons/Perfect-Car-Service.png",
    },
    {
      title: "انتخاب خدمات مورد نیاز",
      description:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. ",
      img: "/assets/icons/Doorstep-Pick-up.png",
    },
    {
      title: "انتخاب مکان دریافت خدمات",
      description:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. ",
      img: "/assets/icons/service-real-time.png",
    },
    {
      title: "انتخاب زمان دریافت خدمات",
      description:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. ",
      img: "/assets/icons/Doorstep-Pick-up.png",
    },
    {
      title: "دریافت خدمات",
      description:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. ",
      img: "/assets/icons/Earn-While-We-Service.png",
    },
  ];
  const verificationData = [
    {
      option: "حضور همزمان کارشناس فنی و خودرو",
      description: [
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
      ],
    },
    {
      option: "حضور همزمان کارشناس فنی و خودرو",
      description: [
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
      ],
    },
    {
      option: "حضور همزمان کارشناس فنی و خودرو",
      description: [
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
      ],
    },
    {
      option: "حضور همزمان کارشناس فنی و خودرو",
      description: [
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
      ],
    },
    {
      option: "حضور همزمان کارشناس فنی و خودرو",
      description: [
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
      ],
    },
  ];
 

  const closeVerificationModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div>
      {params.vehicle_tip === undefined && <VerificationFirstStep setStep={setStep} step={step} verificationData={verificationData}/> }
      {params.vehicle_tip !== undefined && <VerificationSecondStep setStep={setStep}/>}
      {/*{step === 3 && <VerificationThirdStep setStep={setStep}/>}*/}
      {/*{step === 4 && <VerificationFirstStep setStep={setStep} step={step} verificationData={verificationData}/> }*/}
      <HowWorks data={HowWorksMockUpData}/>
    </div>
  );
};

export default VehicleVerificationPage;
