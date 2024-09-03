"use client";
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
import useSetQuery from "@/hook/useSetQuery";
import { useSelector } from "react-redux";
import VerificationLogin from "@/components/vehicle-verification/VerificationLogin";
import VerificationLastStep from "@/components/vehicle-verification/VerificationLastStep";
import { useRouter } from "next/navigation";
import VerificationInvoice from "./VerificationInvoice";

const VehicleVerificationPage = (props) => {
  const { params } = props;
  const router = useRouter();
  const [step, setStep] = useState(1);
  const loginState = useSelector((state) => state.todo.verificationLogin);

  const closeVerificationModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (!params["city_id"] && !params["vehicle_id"]) {
      router.replace("/vehicle-verification");
      // router.reload();
      setStep(undefined);
    }
  }, [router, params]);

  return (
    <div>
      {!params.step && <VerificationFirstStep setStep={setStep} step={step} />}
      {params.step === "step-1" && <PackageStep />}
      {params.step === "step-2" && <VerificationSecondStep setStep={setStep} />}
      {params.step === "step-3" && <VerificationLogin />}
      {params.step === "step-4" && <VerificationThirdStep setStep={setStep} />}
      {/* {params.step === "step-5" && <VerificationLastStep />} */}
      {params.step === "step-5" && <VerificationInvoice />}
    </div>
  );
};

export default VehicleVerificationPage;
