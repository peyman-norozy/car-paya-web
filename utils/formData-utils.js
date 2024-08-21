function carFormData(
  newBrandOptionId,
  newModelOptionId,
  newTipOptionId,
  newYearOptionId,
  newColorOptionId,
  plaque_0,
  newPlaque_1,
  plaque_2,
  plaque_3,
  carName,
  type,
  // kilometerStart,
  // kilometerEnd,
  // newBodyInsuranceStartAt,
  // newBodyInsuranceEndAt,
  // newBodyInsuranceCompany,
  // newBodyInsuranceRemember,
  // newThirdPartyInsuranceStartAt,
  // newThirdPartyInsuranceEndAt,
  // newThirdPartyInsuranceCompany,
  // newThirdPartyInsuranceRemember,
  // newTechnicalDiagnosisStartAt,
  // newTechnicalDiagnosisEndAt,
  // newTechnicalDiagnosisRemember,
  // finePrice,
) {
  const fd = new FormData();
  fd.append("vehicle_brand_id", newBrandOptionId);
  fd.append("vehicle_model_id", newModelOptionId);
  fd.append("vehicle_tip_id", newTipOptionId);
  fd.append("year", newYearOptionId);
  fd.append("color", newColorOptionId);
  fd.append("plaque[0]", plaque_0);
  fd.append("plaque[1]", newPlaque_1);
  fd.append("plaque[2]", plaque_2);
  fd.append("plaque[3]", plaque_3);
  fd.append("title", carName);
  fd.append("kind", forceStore);
  fd.append("type", type);
  // fd.append("kilometers_now", kilometerStart);
  // fd.append("kilometers_use", kilometerEnd);
  // fd.append("information[body_insurance_start_at]", newBodyInsuranceStartAt);
  // fd.append("information[body_insurance_end_at]", newBodyInsuranceEndAt);
  // fd.append("information[body_insurance_company]", newBodyInsuranceCompany);
  // fd.append("information[body_insurance_remember]", newBodyInsuranceRemember);
  // fd.append(
  //   "information[third_party_insurance_start_at]",
  //   newThirdPartyInsuranceStartAt,
  // );
  // fd.append(
  //   "information[third_party_insurance_end_at]",
  //   newThirdPartyInsuranceEndAt,
  // );
  // fd.append(
  //   "information[third_party_insurance_company]",
  //   newThirdPartyInsuranceCompany,
  // );
  // fd.append(
  //   "information[third_party_insurance_remember]",
  //   newThirdPartyInsuranceRemember,
  // );
  // fd.append(
  //   "information[technical_diagnosis_start_at]",
  //   newTechnicalDiagnosisStartAt,
  // );
  // fd.append(
  //   "information[technical_diagnosis_end_at]",
  //   newTechnicalDiagnosisEndAt,
  // );
  // fd.append(
  //   "information[technical_diagnosis_remember]",
  //   newTechnicalDiagnosisRemember,
  // );
  // fd.append("information[fine_price]", finePrice);
  return fd;
}

export { carFormData };
