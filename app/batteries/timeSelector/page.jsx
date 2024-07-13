import React from "react";
import VerificationSecondStep from "@/components/VerificationSecondStep";

const Page = () => {
  return (
    <div className={"mb-10"}>
      <VerificationSecondStep
        backUrl={"/batteries"}
        fetchUrl={"/web/reservation/battery?step=step-2"}
        accordionState={true}
      />
    </div>
  );
};

export default Page;
