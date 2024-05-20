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
import PackageStep from "@/components/vehicle-verification/PackageStep";



const VehicleVerificationPage = (props) => {
  const {params} = props
  const [step,setStep] = useState(1)

  console.log(params)
 

  const closeVerificationModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div>
      {params.vehicle_tip === undefined && <VerificationFirstStep setStep={setStep} step={step}/> }
      {params.vehicle_tip !== undefined && params.city_id !== undefined && <PackageStep />}
      {/*{params.vehicle_tip !== undefined && <VerificationSecondStep setStep={setStep}/>}*/}
      {/*{step === 3 && <VerificationThirdStep setStep={setStep}/>}*/}
      {/*{step === 4 && <VerificationFirstStep setStep={setStep} step={step} verificationData={verificationData}/> }*/}
    </div>
  );
};

export default VehicleVerificationPage;
