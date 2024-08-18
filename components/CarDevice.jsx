import React, { useEffect, useRef, useState } from "react";
import SelectSearchInput from "@/components/SelectSearchInput";
import MachinTagInput from "@/components/MachinTagInput";
import Image from "next/image";
import Input from "@/components/Input";
import GeneralCarInformation from "@/components/GeneralCarInformation";
import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import { API_PATHS } from "@/configs/routes.config";
import { error, numberWithCommas } from "@/utils/function-utils";
import Button from "@/components/Button";
import { getCookie } from "cookies-next";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { carFormData } from "@/utils/formData-utils";
import { getData, postData, putData } from "@/utils/client-api-function-utils";
import { useSelector } from "react-redux";
import SelectCarModal from "@/components/modal/SelectCarModal";
import PrivateRoute from "@/routes/private-route";

const CarDevice = (props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [newStartKilometerValue, setNewStartKilometerValue] = useState("");
  const [newEndKilometerValue, setNewEndKilometerValue] = useState("");
  const [newMyCarValue, setNewMyCarValue] = useState("");
  const [newStartKilometerState, setNewStartKilometerState] = useState(false);
  const [newEndKilometerState, setNewEndKilometerState] = useState(false);
  const [newBrand, setNewBrand] = useState([]);
  const [newModel, setNewModel] = useState([]);
  const [newTip, setNewTip] = useState([]);
  const [newYear, setNewYear] = useState([]);
  const [newImage, setNewImage] = useState("");
  const [newReset, setNewReset] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [newBrandOptionId, setNewBrandOptionId] = useState("");
  const [newModelOptionId, setNewModelOptionId] = useState("");
  const [newTipOptionId, setNewTipOptionId] = useState("");
  const [newYearOptionId, setNewYearOptionId] = useState("");
  const [newPlaque_0, setNewPlaque_0] = useState("");
  const [newPlaque_1, setNewPlaque_1] = useState("");
  const [newPlaque_2, setNewPlaque_2] = useState("");
  const [newPlaque_3, setNewPlaque_3] = useState("");
  const [newThirdPartyInsuranceStartAt, setNewThirdPartyInsuranceStartAt] =
    useState("");
  const [newThirdPartyInsuranceEndAt, setNewThirdPartyInsuranceEndAt] =
    useState("");
  const [newThirdPartyInsuranceCompany, setNewThirdPartyInsuranceCompany] =
    useState("");
  const [newThirdPartyInsuranceRemember, setNewThirdPartyInsuranceRemember] =
    useState(0);
  const [newBodyInsuranceStartAt, setNewBodyInsuranceStartAt] = useState("");
  const [newBodyInsuranceEndAt, setNewBodyInsuranceEndAt] = useState("");
  const [newBodyInsuranceCompany, setNewBodyInsuranceCompany] = useState("");
  const [newBodyInsuranceRemember, setNewBodyInsuranceRemember] = useState(0);

  const [newTechnicalDiagnosisStartAt, setNewTechnicalDiagnosisStartAt] =
    useState("");
  const [newTechnicalDiagnosisEndAt, setNewTechnicalDiagnosisEndAt] =
    useState("");
  const [newTechnicalDiagnosisRemember, setNewTechnicalDiagnosisRemember] =
    useState(0);
  const [newFinePrice, setNewFinePrice] = useState("");
  const [newEditData, setNewEditData] = useState({});
  const [buttonDisabledState, setButtonDisabledState] = useState(false);



  const colorData = [
    {
      title: "قرمز",
      value: "red"
    },{
      title: "سبز",
      value: "green"
    },{
      title: "آبی",
      value: "blue"
    },{
      title: "زرد",
      value: "yellow"
    },{
      title: "مشکی",
      value: "black"
    },{
      title: "سفید",
      value: "white"
    },{
      title: "نوک مدادی",
      value: "stone"
    },{
      title: "خاکستری",
      value: "gray"
    },
  ]
  const [optionState, setOptionState] = useState(false);
  const [serchedColor , setSearchedColor] = useState(colorData)
  const [selectedColor , setSelectedColor] = useState({})
  const optionRef = useRef(null);
  const inputRef = useRef(null);
  function inputChangeHandler(value) {
    setSearchedColor(colorData.filter((i) => i.title.includes(value)));
  }
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        e.target !== optionRef.current &&
        e.target.parentElement !== optionRef.current &&
        e.target !== inputRef.current
      ) {
        setOptionState(false);
      }
    });
  }, []);



  const selectVehicleData = useSelector(
    (vehicleData) => vehicleData.todo.selectVehicle,
  );
  const carYear = useSelector((year) => year.todo.carYear);
  const editFormData = new FormData();
  const selectOptionHandler = (event) => {
    if (event.target.id === "brandOption") {
      // setWindState(String(event.target.value));
    } else if (event.target.id === "modelOption") {
      // setGearboxSuctionState(String(event.target.value));
    } else if (event.target.id === "tipOption") {
      // setGearboxSuctionState(String(event.target.value));
    }
  };

  const changesEditData = newEditData;
  const selectSearchOptionHandler = async (event) => {
    const id = event.target.id;
    const value = event.target.value;
    const imageid = event.target.getAttribute("imageid");

    if (id === "brandOption") {
      setNewBrandOptionId(value);
      const response = await getData(
        process.env.BASE_API + "/web" + API_PATHS.MODELS + "/" + value,
      );
      if (response.status === 200) {
        setNewTip([]);
        setNewYear([]);
        setNewModel(response.data.data);
        setNewImage("");
        if (props.pageType === "edit") {
          changesEditData.vehicle_model_title = (
            <span className="text-[#aaa]">انتخاب مدل</span>
          );
          changesEditData.vehicle_model_id = "";
          changesEditData.car_tip_title = (
            <span className="text-[#aaa]">انتخاب تیپ</span>
          );
          changesEditData.vehicle_tip_id = "";
          changesEditData.year = <span className="text-[#aaa]">سال ساخت</span>;
          changesEditData.yearId = "";
          // setNewEditData(changesEditData);
        }
      } else if (response.response.status === 404) {
        console.log(response);
      } else if (response.response.status === 422) {
        for (let key in response.response.data.errors) {
          error(response.response.data.errors[key][0]);
        }
      }
    } else if (id === "modelOption") {
      setNewModelOptionId(value);
      const response = await getData(
        process.env.BASE_API + "/web" + API_PATHS.TIPS + "/" + value,
      );
      if (response.status === 200) {
        setNewYear([]);
        setNewImage(
          process.env.BASE_API + "/web" + API_PATHS.FILE + "/" + imageid,
        );
        setNewTip(response.data.data);
        if (props.pageType === "edit") {
          changesEditData.car_tip_title = (
            <span className="text-[#aaa]">انتخاب تیپ</span>
          );
          changesEditData.vehicle_tip_id = "";
          changesEditData.year = <span className="text-[#aaa]">سال ساخت</span>;
          changesEditData.yearId = "";
        }
      } else if (response.response.status === 404) {
        console.log(response);
      } else if (response.response.status === 422) {
        for (let key in response.response.data.errors) {
          error(response.response.data.errors[key][0]);
        }
      }
    } else if (id === "tipOption") {
      setNewTipOptionId(value);
      const response = await getData(
        process.env.BASE_API + "/web" + API_PATHS.YEARS + "/" + value,
      );
      if (response.status === 200) {
        console.log(response.data.data);
        setNewYear(response.data.data);
        if (props.pageType === "edit") {
          changesEditData.year = <span className="text-[#aaa]">سال ساخت</span>;
          changesEditData.yearId = "";
        }
      } else if (response.response.status === 404) {
        console.log(response);
      } else if (response.response.status === 422) {
        for (let key in response.response.data.errors) {
          error(response.response.data.errors[key][0]);
        }
      }
    } else if (id === "productYearOption") {
      setNewYearOptionId(value);
    }
  };
  const InputChangeHandler = (event) => {
    const id = event.target.getAttribute("id");
    const value = event.target.value;
    const changeStringToNumber = +event.target.value.split(",").join("");

    if (id === "kilometerStart") {
      if (event.target.value.length > 0) {
        setNewStartKilometerState(true);
      } else {
        setNewStartKilometerState(false);
      }
      if (isNaN(changeStringToNumber)) {
        return;
      }
      changeStringToNumber === 0
        ? setNewStartKilometerValue("")
        : setNewStartKilometerValue(numberWithCommas(changeStringToNumber));
    } else if (id === "kilometerEnd") {
      if (event.target.value.length > 0) {
        setNewEndKilometerState(true);
      } else {
        setNewEndKilometerState(false);
      }
      if (isNaN(changeStringToNumber)) {
        return;
      }
      changeStringToNumber === 0
        ? setNewEndKilometerValue("")
        : setNewEndKilometerValue(numberWithCommas(changeStringToNumber));
    } else if (id === "carName") {
      setNewMyCarValue(value);
    }
  };

  /******************** make first edit form data *****************/
  // useEffect(() => {
  //   if (props.pageType === "edit" && Object.keys(newEditData).length > 0) {
  //     editFormData.append("plaque[0]", newEditData.plaque[0]);
  //     editFormData.append("plaque[1]", newEditData.plaque[1]);
  //     editFormData.append("plaque[2]", newEditData.plaque[2]);
  //     editFormData.append("plaque[3]", newEditData.plaque[3]);
  //     editFormData.append("kilometers_now", newEditData.kilometers_now);
  //     editFormData.append("kilometers_use", newEditData.kilometers_use);
  //     editFormData.append("title", newEditData.title);
  //     editFormData.append(
  //       "information[body_insurance_start_at]",
  //       newEditData.information.body_insurance_start_at,
  //     );
  //     editFormData.append(
  //       "information[body_insurance_end_at]",
  //       newEditData.information.body_insurance_end_at,
  //     );
  //     editFormData.append(
  //       "information[body_insurance_company]",
  //       newEditData.information.body_insurance_company,
  //     );
  //     editFormData.append(
  //       "information[body_insurance_remember]",
  //       newEditData.information.body_insurance_remember,
  //     );
  //     editFormData.append(
  //       "information[third_party_insurance_start_at]",
  //       newEditData.information.third_party_insurance_start_at,
  //     );
  //     editFormData.append(
  //       "information[third_party_insurance_end_at]",
  //       newEditData.information.third_party_insurance_end_at,
  //     );
  //     editFormData.append(
  //       "information[third_party_insurance_company]",
  //       newEditData.information.third_party_insurance_company,
  //     );
  //     editFormData.append(
  //       "information[third_party_insurance_remember]",
  //       newEditData.information.third_party_insurance_remember,
  //     );
  //     editFormData.append(
  //       "information[technical_diagnosis_start_at]",
  //       newEditData.information.technical_diagnosis_start_at,
  //     );
  //     editFormData.append(
  //       "information[technical_diagnosis_end_at]",
  //       newEditData.information.technical_diagnosis_end_at,
  //     );
  //     editFormData.append(
  //       "information[technical_diagnosis_remember]",
  //       newEditData.information.technical_diagnosis_remember,
  //     );
  //     editFormData.append(
  //       "information[fine_price]",
  //       newEditData.information.fine_price,
  //     );
  //   }
  // }, [newEditData]);

  const myCarSubmitHandler = async (event) => {
    event.preventDefault();
    if (props.pageType === "edit" && Object.keys(newEditData).length > 0) {
      editFormData.set(
        "vehicle_brand_id",
        newBrandOptionId ? newBrandOptionId : newEditData.vehicle_brand_id,
      );
      editFormData.set(
        "vehicle_model_id",
        newModelOptionId ? newModelOptionId : newEditData.vehicle_model_id,
      );
      editFormData.set(
        "vehicle_tip_id",
        newTipOptionId ? newTipOptionId : newEditData.vehicle_tip_id,
      );
      editFormData.set(
        "year",
        newYearOptionId ? newYearOptionId : newEditData.yearId,
      );
      editFormData.set("plaque[0]", newPlaque_0);
      editFormData.set("plaque[1]", newPlaque_1);
      editFormData.set("plaque[2]", newPlaque_2);
      editFormData.set("plaque[3]", newPlaque_3);
      editFormData.set("title", newMyCarValue);
      editFormData.set("color", selectedColor.value);
      editFormData.set("kind", "force_store");
      // editFormData.set(
      //   "kilometers_now",
      //   newStartKilometerValue
      //     ? newStartKilometerValue.split(",").join("")
      //     : "",
      // );
      // editFormData.set(
      //   "kilometers_use",
      //   newEndKilometerValue ? newEndKilometerValue.split(",").join("") : "",
      // );
      // editFormData.set(
      //   "information[third_party_insurance_start_at]",
      //   newThirdPartyInsuranceStartAt,
      // );
      // editFormData.set(
      //   "information[third_party_insurance_end_at]",
      //   newThirdPartyInsuranceEndAt,
      // );
      // editFormData.set(
      //   "information[body_insurance_start_at]",
      //   newBodyInsuranceStartAt,
      // );
      // editFormData.set(
      //   "information[body_insurance_end_at]",
      //   newBodyInsuranceEndAt,
      // );
      // editFormData.set(
      //   "information[technical_diagnosis_start_at]",
      //   newTechnicalDiagnosisStartAt,
      // );
      // editFormData.set(
      //   "information[technical_diagnosis_end_at]",
      //   newTechnicalDiagnosisEndAt,
      // );
      // editFormData.set(
      //   "information[technical_diagnosis_remember]",
      //   String(newTechnicalDiagnosisRemember),
      // );
      // editFormData.set(
      //   "information[third_party_insurance_remember]",
      //   String(newThirdPartyInsuranceRemember),
      // );
      // editFormData.set(
      //   "information[body_insurance_remember]",
      //   String(newBodyInsuranceRemember),
      // );
      // editFormData.set(
      //   "information[body_insurance_company]",
      //   newBodyInsuranceCompany,
      // );
      // editFormData.set(
      //   "information[third_party_insurance_company]",
      //   newThirdPartyInsuranceCompany,
      // );
      // editFormData.set("information[fine_price]", newFinePrice);
      editFormData.set("_method", "PUT");
      const response = await putData(
        process.env.BASE_API +
          "/user-panel/vehicles/" +
          searchParams.get("product"),
        editFormData,
        '"Content-Type": "application/json"',
      );
      if (response.status === 200) {
        router.back();
      } else if (response.response.status === 404) {
        console.log(response);
      } else if (response.response.status === 422) {
        for (let key in response.response.data.errors) {
          error(response.response.data.errors[key][0]);
        }
      }
    } else {
      const fd = carFormData(
        newBrandOptionId,
        newModelOptionId,
        newTipOptionId,
        newYearOptionId,
        selectedColor.value,
        event.target.plaque_0.value,
        newPlaque_1,
        event.target.plaque_2.value,
        event.target.plaque_3.value,
        event.target.carName.value,
        "force_store",
        // event.target.kilometerStart.value.split(",").join(""),
        // event.target.kilometerEnd.value.split(",").join(""),
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
        // event.target.finePrice.value.split(",").join(""),
      );
      setButtonDisabledState(true);
      const response = await postData(
        process.env.BASE_API + "/user-panel/vehicles",
        fd,
        '"Content-Type": "application/json"',
      );
      if (response.status === 200 || response.status === 201) {
        setButtonDisabledState(false);
        // success(res.data.data["msg"]);
        router.push("/panel/my-vehicle/my-car");
        // event.target.reset();
        // setNewReset(true);
        // setNewCitiesId("");
        // setNewAreas("");
        // setNewProvinceId("");
        // setActivityState("");
      } else if (response.response.status === 404) {
        console.log(response);
        setButtonDisabledState(false);
      } else if (response.response.status === 422) {
        setButtonDisabledState(false);
        for (let key in response.response.data.errors) {
          error(response.response.data.errors[key][0]);
        }
      }
    }
  };

  const openModalHandler = () => {
    setModalState(true);
  };
  const closeCarModalHandler = (event) => {
    console.log(event.target.getAttribute("id"));
    if (event.target.id === "ChoseCar") {
      setModalState(false);
    }
  };

  useEffect(() => {
    (async () => {
      const response = await getData(
        process.env.BASE_API + "/web" + API_PATHS.BRANDS,
      );
      if (response.status === 200) {
        setNewBrand(response.data.data);
      } else if (response.response.status === 422) {
        for (let key in response.response.data.errors) {
          error(response.response.data.errors[key][0]);
        }
      } else if (response.response.status === 404) {
        console.log(response);
      }
    })();
  }, []);

  /************** fetch relation select search input data ***************/

  useEffect(() => {
    if (props.pageType === "edit" && Object.keys(newEditData).length > 0) {
      let endpoints = [
        process.env.BASE_API +
          "/web" +
          API_PATHS.MODELS +
          "/" +
          newEditData.vehicle_brand_id,
        process.env.BASE_API +
          "/web" +
          API_PATHS.TIPS +
          "/" +
          newEditData.vehicle_model_id,
        process.env.BASE_API +
          "/web" +
          API_PATHS.YEARS +
          "/" +
          newEditData.vehicle_tip_id,
      ];
      axios
        .all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then((data) => {
          if (data[0].data.data[0]) {
            setNewImage(
              process.env.BASE_API +
                "/web" +
                API_PATHS.FILE +
                "/" +
                data[0].data.data[0].image,
            );
          }
          setNewModel(data[0].data.data);
          setNewTip(data[1].data.data);
          setNewYear(data[2].data.data);
        });
    }
  }, [newEditData]);

  /************ get data from api for edit page ****************/

  useEffect(() => {
    if (props.pageType === "edit") {
      axios
        .get(
          process.env.BASE_API +
            API_PATHS.USERPANEL +
            "/vehicles/" +
            searchParams.get("product") +
            "/edit",
          {
            headers: {
              Authorization: "Bearer " + getCookie("Authorization"),
            },
          },
        )
        .then((res) => {
          res.data.data.yearId = res.data.data.year;
          setNewEditData(res.data.data);  
          colorData.map((item)=>{
            if(item.value === res.data.data.info.color){
              setSelectedColor(item)
            }
          })
          
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [props.pageType, searchParams]);

  /********** set data in create page when select car brand and tip and model is selected with modal **********/

  useEffect(() => {
    if (Object.keys(selectVehicleData).length > 0) {
      console.log(selectVehicleData.carModel);
      if (selectVehicleData.carModel) {
        setNewImage(
          process.env.BASE_API +
            "/web" +
            API_PATHS.FILE +
            "/" +
            selectVehicleData.carModel.image,
        );
      }
      setNewBrandOptionId(
        selectVehicleData.carBrand && selectVehicleData.carBrand.id,
      );
      setNewModelOptionId(
        selectVehicleData.carModel && selectVehicleData.carModel.id,
      );
      setNewTipOptionId(
        selectVehicleData.carTip && selectVehicleData.carTip.id,
      );
    }
  }, [selectVehicleData]);

  useEffect(() => {
    if (props.pageType === "edit" && Object.keys(newEditData).length > 0) {
      setNewMyCarValue(newEditData.info.title);
      setNewStartKilometerValue(
        numberWithCommas(newEditData.info.kilometers_now),
      );
      setNewStartKilometerState(true);
      setNewEndKilometerValue(
        numberWithCommas(newEditData.info.kilometers_use),
      );
      setNewEndKilometerState(true);
      setNewThirdPartyInsuranceStartAt(
        newEditData.insurance_info
          ? newEditData.insurance_info.third_party_insurance_start_at
          : "",
      );
      setNewThirdPartyInsuranceEndAt(
        newEditData.insurance_info
          ? newEditData.insurance_info.third_party_insurance_end_at
          : "",
      );
      setNewThirdPartyInsuranceCompany(
        newEditData.insurance_info
          ? newEditData.insurance_info.third_party_insurance_company
          : "",
      );
      setNewThirdPartyInsuranceRemember(
        newEditData.insurance_info
          ? newEditData.insurance_info.third_party_insurance_remember
          : "",
      );
      setNewBodyInsuranceStartAt(
        newEditData.insurance_info
          ? newEditData.insurance_info.body_insurance_start_at
          : "",
      );
      setNewBodyInsuranceEndAt(
        newEditData.insurance_info
          ? newEditData.insurance_info.body_insurance_end_at
          : "",
      );
      setNewBodyInsuranceCompany(
        newEditData.insurance_info
          ? newEditData.insurance_info.body_insurance_company
          : "",
      );
      setNewBodyInsuranceRemember(
        newEditData.insurance_info
          ? newEditData.insurance_info.body_insurance_remember
          : "",
      );
      setNewTechnicalDiagnosisStartAt(
        newEditData.insurance_info
          ? newEditData.insurance_info.technical_diagnosis_start_at
          : "",
      );
      setNewTechnicalDiagnosisEndAt(
        newEditData.insurance_info
          ? newEditData.insurance_info.technical_diagnosis_end_at
          : "",
      );
      setNewTechnicalDiagnosisRemember(
        newEditData.insurance_info
          ? newEditData.insurance_info.technical_diagnosis_remember
          : "",
      );
      setNewFinePrice(newEditData.info ? newEditData.info.fine_price : "");
    }
  }, [newEditData]);

  return (
    <PrivateRoute>
      <form
        className="flex-1 px-[40px] py-[32px] rounded-[10px] bg-[#383838A3] flex flex-col gap-[35px]"
        onSubmit={myCarSubmitHandler}
      >
        <h1 className={"text-[#FEFEFE]"}>خودرو</h1>
        <div className={"grid size800:grid-cols-2 grid-cols-1 gap-[32px]"}>
          <section className="flex justify-center items-center rounded-[10px] flex-[1]">
            <Image
              src={
                newImage && newImage !== null
                  ? newImage
                  : "/assets/icons/photo.svg"
              }
              alt={"car image"}
              className={"w-[476px] h-[295px]"}
              width={476}
              height={295}
            />
          </section>
          <section className={"flex flex-col gap-[24px] justify-center"}>
            <SelectSearchInput
              data={newBrand}
              pageType={
                Object.keys(selectVehicleData).length > 0
                  ? "edit"
                  : props.pageType
              }
              editId={
                Object.keys(selectVehicleData).length > 0
                  ? selectVehicleData.carBrand && selectVehicleData.carBrand.id
                  : newEditData.vehicle_brand_id
              }
              editTitle={
                Object.keys(selectVehicleData).length > 0
                  ? selectVehicleData.carBrand &&
                    selectVehicleData.carBrand.title
                  : newEditData.car_brand_title
              }
              placeholder={<span className="text-[#aaa]">انتخاب برند</span>}
              onclick={selectSearchOptionHandler}
              id={"brandOption"}
              newReset={newReset}
              className={"h-[48px]"}
              labelCalssName={""}
              disabledSelectOption={true}
              lable={"انتخاب برند"}
            />
            <SelectSearchInput
              data={newModel}
              pageType={
                Object.keys(selectVehicleData).length > 0
                  ? "edit"
                  : props.pageType
              }
              editId={
                Object.keys(selectVehicleData).length > 0
                  ? selectVehicleData.carModel && selectVehicleData.carModel.id
                  : newEditData.vehicle_model_id
              }
              editTitle={
                Object.keys(selectVehicleData).length > 0
                  ? selectVehicleData.carModel &&
                    selectVehicleData.carModel.title
                  : newEditData.vehicle_model_title
              }
              placeholder={<span className="text-[#aaa]">انتخاب مدل</span>}
              onclick={selectSearchOptionHandler}
              id={"modelOption"}
              newReset={newReset}
              className={"h-[48px]"}
              labelCalssName={""}
              disabledSelectOption={true}
              lable={"انتخاب مدل"}
            />
            <SelectSearchInput
              data={newTip}
              pageType={
                Object.keys(selectVehicleData).length > 0
                  ? "edit"
                  : props.pageType
              }
              editId={
                Object.keys(selectVehicleData).length > 0
                  ? selectVehicleData.carTip && selectVehicleData.carTip.id
                  : newEditData.vehicle_tip_id
              }
              editTitle={
                Object.keys(selectVehicleData).length > 0
                  ? selectVehicleData.carTip && selectVehicleData.carTip.title
                  : newEditData.car_tip_title
              }
              placeholder={<span className="text-[#aaa]">انتخاب تیپ</span>}
              onclick={selectSearchOptionHandler}
              id={"tipOption"}
              newReset={newReset}
              className={"h-[48px]"}
              labelCalssName={""}
              disabledSelectOption={true}
              lable={"انتخاب تیپ"}
            />
            <Button
              type={"button"}
              class_name={
                "bg-[#F66B34] text-[#FEFEFE] self-end px-[24.5px] py-[6.5px] text-[14px] rounded-5"
              }
              on_click={openModalHandler}
            >
              تغییر وسیله نقلیه
            </Button>
          </section>
        </div>
        <div
          className={
            "grid size800:grid-cols-3 size582:grid-cols-2 grid-cols-1 gap-[32px]"
          }
        >
          <div className={"flex flex-col gap-4"}>
            <label
              htmlFor={"carName"}
              className={"px-2 text-16 font-bold text-[#FEFEFE]"}
            >
              نام وسیله
            </label>
            <Input
              type="text"
              value={newMyCarValue !== "null" ? newMyCarValue : ""}
              placeholder="مثال: خودروی من"
              className="border border-[#d1d1d1] font-medium outline-none pr-2 text-14 h-[48px] placeholder:text-12 placeholder:text-right w-full rounded-5"
              id={"carName"}
              name={"carName"}
              on_change={InputChangeHandler}
            />
          </div>
          <SelectSearchInput
            data={carYear && carYear.length > 0 ? carYear : newYear}
            pageType={props.pageType}
            editId={newEditData.yearId}
            editTitle={newEditData.year}
            // placeholder={<span className="text-[#aaa]">سال ساخت</span>}
            onclick={selectSearchOptionHandler}
            id={"productYearOption"}
            newReset={newReset}
            className={"h-[48px]"}
            lable={"سال ساخت"}
          />
          <div className="flex flex-col gap-4">
            <label
              className={"px-2 text-16 font-bold text-[#FEFEFE]"}
            >
              رنگ خودرو
            </label>
            <div className="relative">
              <span
                className=" font-medium text-12 cursor-pointer bg-[#FEFEFE] w-full flex items-center justify-center rounded-lg py-2 h-12"
                onClick={() => {
                  setOptionState(true);
                }}
                ref={inputRef}
              >
                {selectedColor.title}
              </span>
              <div
                className={`absolute overflow-y-scroll rounded-lg top-[42px] z-[2] bg-[#FEFEFE] w-full ${optionState ? "h-[380%]" : "h-0"} overflow-hidden transition-all`}
              >
                <div
                  className="max-h-[200px] flex flex-col p-2 gap-1 w-full"
                  ref={optionRef}
                >
                  <input
                    className="w-full bg-[#FEFEFE] rounded-lg text-[#0E0E0E] h-8 border outline-none mb-1 px-2"
                    onChange={(e) => {
                      inputChangeHandler(e.target.value);
                    }}
                  />
                  {/* <span
                    className="cursor-pointer hover:bg-[#6e7c91] py-1 px-2 text-[#FEFEFE] text-14"
                    onClick={(e) => {
                      props.timeData();
                      setOptionState(false);
                    }}
                  >
                    همه محله ها
                  </span> */}
                  {serchedColor.map((item, index) => (
                    <span
                      className="cursor-pointer hover:bg-[#6e7c91] py-1 px-2 text-[#0E0E0E] text-14"
                      value={item.value}
                      onClick={(e) => {
                        // props.timeData({ area_id: item.id });
                        setSelectedColor(item)
                        setOptionState(false);
                      }}
                      key={index}
                    >
                      {item.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <label className={"font-bold text-[#FEFEFE]"}>پلاک</label>
            <MachinTagInput
              setNewPlaque_0={setNewPlaque_0}
              setNewPlaque_1={setNewPlaque_1}
              setNewPlaque_2={setNewPlaque_2}
              setNewPlaque_3={setNewPlaque_3}
              newPlaque_0={newPlaque_0}
              newPlaque_1={newPlaque_1}
              newPlaque_2={newPlaque_2}
              newPlaque_3={newPlaque_3}
              pageType={props.pageType}
              editPlaqueData={newEditData.info && newEditData.info.plaque}
            />
          </div>
          {/* <div className="flex flex-col gap-4">
            <label
              htmlFor={"kilometerStart"}
              className={
                "font-bold text-[#FEFEFE]"
              }
            >
              کیلومتر فعلی خودرو
            </label>
            <Input
              type="text"
              value={newStartKilometerValue}
              id={"kilometerStart"}
              name={"kilometerStart"}
              className={`border border-[#d1d1d1] outline-none ${
                newStartKilometerState ? "pl-[50px]" : "pl-2"
              } text-14 h-[48px] placeholder:text-12 placeholder:text-right text-left w-full rounded-5`}
              on_change={InputChangeHandler}
            />
          </div> */}
          {/* <div className="flex flex-col gap-4">
            <label
              htmlFor={"kilometerEnd"}
              className={
                "font-bold text-[16px] text-[#FEFEFE]"
              }
            >
              کیلومتر مصرفی ماهانه
            </label>
            <Input
              type="text"
              value={newEndKilometerValue}
              id={"kilometerEnd"}
              name={"kilometerEnd"}
              className={`border border-[#d1d1d1] outline-none ${
                newEndKilometerState ? "pl-[50px]" : "pl-2"
              } text-14 h-[48px] placeholder:text-12 placeholder:text-right text-left w-full rounded-5`}
              on_change={InputChangeHandler}
            />
          </div> */}
        </div>
        {/* <GeneralCarInformation
          title={"بیمه ثالث"}
          id={"thirdPartyInsurance"}
          pageType={props.pageType}
          editStartAt={newThirdPartyInsuranceStartAt}
          editEndAt={newThirdPartyInsuranceEndAt}
          editCompany={
            newThirdPartyInsuranceCompany ? newThirdPartyInsuranceCompany : ""
          }
          editRemember={newThirdPartyInsuranceRemember}
          insuranceState={true}
          violationState={false}
          allSelectInputState={true}
          setNewThirdPartyInsuranceStartAt={setNewThirdPartyInsuranceStartAt}
          setNewThirdPartyInsuranceEndAt={setNewThirdPartyInsuranceEndAt}
          setNewThirdPartyInsuranceCompany={setNewThirdPartyInsuranceCompany}
          setNewThirdPartyInsuranceRemember={setNewThirdPartyInsuranceRemember}
        />
        <GeneralCarInformation
          title={"بیمه بدنه"}
          id={"bodyInsurance"}
          pageType={props.pageType}
          editStartAt={newBodyInsuranceStartAt}
          editEndAt={newBodyInsuranceEndAt}
          editCompany={newBodyInsuranceCompany}
          editRemember={newBodyInsuranceRemember}
          insuranceState={true}
          violationState={false}
          allSelectInputState={true}
          setNewBodyInsuranceStartAt={setNewBodyInsuranceStartAt}
          setNewBodyInsuranceEndAt={setNewBodyInsuranceEndAt}
          setNewBodyInsuranceCompany={setNewBodyInsuranceCompany}
          setNewBodyInsuranceRemember={setNewBodyInsuranceRemember}
        />
        <GeneralCarInformation
          title={"معاینه فنی"}
          id={"technicalDiagnosis"}
          editStartAt={newTechnicalDiagnosisStartAt}
          editEndAt={newTechnicalDiagnosisEndAt}
          editRemember={newTechnicalDiagnosisRemember}
          pageType={props.pageType}
          insuranceState={false}
          violationState={false}
          allSelectInputState={true}
          setNewTechnicalDiagnosisStartAt={setNewTechnicalDiagnosisStartAt}
          setNewTechnicalDiagnosisEndAt={setNewTechnicalDiagnosisEndAt}
          setNewTechnicalDiagnosisRemember={setNewTechnicalDiagnosisRemember}
        />
        <GeneralCarInformation
          title={"خلافی ماشین"}
          id={"finePrice"}
          editFinePrice={newFinePrice}
          pageType={props.pageType}
          insuranceState={false}
          violationState={true}
          allSelectInputState={false}
          setNewFinePrice={setNewFinePrice}
        /> */}
        <div className="text-left mt-6">
          <Button
            type={"submit"}
            disabled_btn={buttonDisabledState}
            class_name={
              "bg-[#F66B34] text-white text-16 w-[120px] h-[40px] rounded-10 hover:bg-[#F66B34cc]"
            }
          >
            {buttonDisabledState ? "در حال ثبت ..." : "ثبت"}
          </Button>
        </div>
        <ToastContainer rtl={true} />
        {
          <div
            className={`fixed top-0 right-0 w-full h-full bg-[#00000050] transition-all duration-1000 z-[9999] ${modalState ? "translate-y-[0%]" : "translate-y-[100%]"}`}
            onClick={closeCarModalHandler}
            id={"ChoseCar"}
          >
            <SelectCarModal
              modalPosition={true}
              modalName={"carModal"}
              setModalState={setModalState}
            />
          </div>
        }
        
      </form>
    </PrivateRoute>
  );
};

export default CarDevice;
