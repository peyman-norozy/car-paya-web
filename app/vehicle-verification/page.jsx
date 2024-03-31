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

const VehicleVerification = () => {
  const [step,setStep] = useState(1)
  

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
    <div className="w-[98%]  m-auto size1160:w-[95%]">
     
      
      {step === 1 && <VerificationFirstStep setStep={setStep} step={step} verificationData={verificationData}/> }
      {step === 2 && <VerificationSecondStep setStep={setStep}/>}
      {step === 3 && <VerificationThirdStep setStep={setStep}/>}
      {step === 4 && <VerificationFirstStep setStep={setStep} step={step} verificationData={verificationData}/> }
      <div>
        <CallAndConsult />
      </div>
      <HowWorks />
    </div>
  );
};

export default VehicleVerification;
