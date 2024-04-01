import Label from "@/components/Label";
import Input from "@/components/Input";
import SelectSearchInput from "@/components/SelectSearchInput";
import SelectInput from "@/components/SelectInput";
import Button from "@/components/Button";
import React, { useEffect, useState } from "react";
import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import { API_PATHS } from "@/configs/routes.config";
import { error, success } from "@/utils/function-utils";
import { ToastContainer } from "react-toastify";
import TitleDescription from "@/components/TitleDescription";

const windAdjustmentData = {
  placeholder: "انتخاب کنید",
  id: "windAdjustmentSelected",
  options: [
    { option: "دارد", value: 1 },
    { option: "ندارد", value: 0 },
  ],
};

const tirepunctureData = {
  placeholder: "انتخاب کنید",
  id: "tirePunctureSelected",
  options: [
    { option: "دارد", value: 1 },
    { option: "ندارد", value: 0 },
  ],
};

const gearboxOilData = {
  placeholder: "انتخاب کنید",
  id: "gearboxOilSelected",
  options: [
    { option: "دارد", value: 1 },
    { option: "ندارد", value: 0 },
  ],
};

const engineOilData = {
  placeholder: "انتخاب کنید",
  id: "engineOilSelected",
  options: [
    { option: "دارد", value: 1 },
    { option: "ندارد", value: 0 },
  ],
};

const diagData = {
  placeholder: "انتخاب کنید",
  id: "diagSelected",
  options: [
    { option: "دارد", value: 1 },
    { option: "ندارد", value: 0 },
  ],
};

const MobileRepresentatives = () => {
  const [newProvinces, setNewProvinces] = useState([]);
  const [newCities, setNewCities] = useState([]);
  const [newAreas, setNewAreas] = useState([]);
  const [newCitiesId, setNewCitiesId] = useState("");
  const [newAreasId, setNewAreasid] = useState("");
  const [windState, setWindState] = useState("");
  const [gearboxSuctionState, setGearboxSuctionState] = useState("");
  const [motorSuctionState, setMotorSuctionState] = useState("");
  const [diagState, setDiagState] = useState("");
  const [tirePunctureState, setTirePunctureState] = useState("");
  const [newReset, setNewReset] = useState(false);
  const selectOptionHandler = (event) => {
    if (event.target.id === "windAdjustmentOption") {
      setWindState(String(event.target.value));
    } else if (event.target.id === "gearboxOilOption") {
      setGearboxSuctionState(String(event.target.value));
    } else if (event.target.id === "engineOilOption") {
      setMotorSuctionState(String(event.target.value));
    } else if (event.target.id === "numberOfPitsOption") {
      setPitsState(String(event.target.value));
    } else if (event.target.id === "diagOption") {
      setDiagState(String(event.target.value));
    } else if (event.target.id === "tirePunctureOption") {
      setTirePunctureState(String(event.target.value));
    }
  };

  const selectSearchOptionHandler = (event) => {
    if (event.target.id === "provincesOption") {
      setNewAreas([]);
      setNewAreasid("");
      setNewCitiesId("");
      axios
        .get(
          process.env.BASE_API +
            "/web" +
            API_PATHS.GEOCITIES +
            "/" +
            event.target.value,
        )
        .then((res) => {
          setNewCities(res.data.data);
        })
        .catch((e) => {
          if (e.response.status === 422) {
            for (let key in e.response.data.errors) {
              error(e.response.data.errors[key][0]);
            }
          }
        });
    } else if (event.target.id === "citiesOption") {
      setNewCitiesId(event.target.value);
      setNewAreasid("");
      axios
        .get(
          process.env.BASE_API +
            "/web" +
            API_PATHS.GEOAREAS +
            "/" +
            event.target.value,
        )
        .then((res) => {
          setNewAreas(res.data.data);
        })
        .catch((e) => {
          if (e.response.status === 422) {
            for (let key in e.response.data.errors) {
              error(e.response.data.errors[key][0]);
            }
          }
        });
    } else if (event.target.id === "areaOption") {
      setNewAreasid(event.target.value);
    }
  };

  const agentMovingFormSubmitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("mobile", event.target.mobileNumber.value);
    formData.append("national_code", event.target.nationalCode.value);
    formData.append("title", event.target.storeName.value);
    formData.append("management", event.target.agentName.value);
    formData.append("description", event.target.description.value);
    formData.append("city_id", newCitiesId);
    formData.append("area_id", newAreasId);
    formData.append("tire_pressure", windState);
    formData.append("gearbox_suction", gearboxSuctionState);
    formData.append("oil_suction", motorSuctionState);
    formData.append("diag", diagState);
    formData.append("tire_repair", tirePunctureState);
    formData.append("type", "MOVING");

    axios
      .post(process.env.BASE_API + "/web" + API_PATHS.AGENTREQUEST, formData)
      .then((res) => {
        success(res.data.data["msg"]);
        event.target.reset();
        setNewReset(true);
        setGearboxSuctionState("");
        setNewCitiesId("");
        setNewAreasid("");
        setNewAreas("");
        setWindState("");
        setMotorSuctionState("");
        setDiagState("");
        setTirePunctureState("");
      })
      .catch((e) => {
        if (e.response.status === 422) {
          for (let key in e.response.data.errors) {
            error(e.response.data.errors[key][0]);
          }
        }
      });
  };

  useEffect(() => {
    axios
      .get(process.env.BASE_API + "/web" + API_PATHS.GEOPROVINCES)
      .then((res) => {
        setNewProvinces(res.data.data);
      })
      .catch((e) => {
        if (e.response.status === 422) {
          for (let key in e.response.data.errors) {
            error(e.response.data.errors[key][0]);
          }
        }
      });
  }, []);

  return (
    <form
      className="my-[100px] font-light text-14 size617:px-[140px] px-[15px]"
      onSubmit={agentMovingFormSubmitHandler}
    >
      <TitleDescription>
        پیوستن به شبکه نمایندگان و خدمات دهندگان سیار
      </TitleDescription>
      <section className="grid size800:grid-cols-2 grid-cols-1 gap-[40px] mt-8">
        <div className="flex flex-col gap-4">
          <Label text={"شماره موبایل"} />
          <Input
            type={"text"}
            id={"mobileNumber"}
            name={"mobileNumber"}
            className={
              "border border-[#d1d1d1] rounded-5 h-[40px] pr-2 outline-0"
            }
          />
        </div>
        <div className="flex flex-col gap-4">
          <Label text={"کد ملی"} />
          <Input
            type={"text"}
            id={"nationalCode"}
            name={"nationalCode"}
            className={
              "border border-[#d1d1d1] rounded-5 h-[40px] pr-2 outline-0"
            }
          />
        </div>
        <div className="flex flex-col gap-4">
          <Label text={"نام نمایندگی"} />
          <Input
            type={"text"}
            id={"storeName"}
            name={"storeName"}
            className={
              "border border-[#d1d1d1] rounded-5 h-[40px] pr-2 outline-0"
            }
          />
        </div>
        <div className="flex flex-col gap-4">
          <Label text={"نام مدیریت"} />
          <Input
            type={"text"}
            id={"agentName"}
            name={"agentName"}
            className={
              "border border-[#d1d1d1] rounded-5 h-[40px] pr-2 outline-0"
            }
          />
        </div>
        <div className="flex flex-col gap-4">
          <Label text={"استان محل سکونت"} />
          <SelectSearchInput
            data={newProvinces}
            placeholder={"انتخاب کنید"}
            onclick={selectSearchOptionHandler}
            id={"provincesOption"}
            newReset={newReset}
            className={"h-[40px]"}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Label text={"شهر"} />
          <SelectSearchInput
            data={newCities}
            placeholder={"انتخاب کنید"}
            onclick={selectSearchOptionHandler}
            id={"citiesOption"}
            newReset={newReset}
            className={"h-[40px]"}
          />
        </div>
        {newAreas.length > 0 && (
          <div className="flex flex-col gap-4">
            <Label text={"محله محل فعالیت"} />
            <SelectSearchInput
              data={newAreas}
              placeholder={"انتخاب کنید"}
              onclick={selectSearchOptionHandler}
              id={"areaOption"}
              newReset={newReset}
              className={"h-[40px]"}
            />
          </div>
        )}
        <div className="flex flex-col gap-4">
          <Label text={"تنظیم باد"} />
          <SelectInput
            data={windAdjustmentData}
            onclick={selectOptionHandler}
            id={"windAdjustmentOption"}
            newReset={newReset}
            className={"h-[40px]"}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Label text={"آپارات"} />
          <SelectInput
            data={tirepunctureData}
            onclick={selectOptionHandler}
            id={"tirePunctureOption"}
            newReset={newReset}
            className={"h-[40px]"}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Label text={"ساکشن روغن گیربکس"} />
          <SelectInput
            data={gearboxOilData}
            onclick={selectOptionHandler}
            id={"gearboxOilOption"}
            newReset={newReset}
            className={"h-[40px]"}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Label text={"ساکشن روغن موتور"} />
          <SelectInput
            data={engineOilData}
            onclick={selectOptionHandler}
            id={"engineOilOption"}
            newReset={newReset}
            className={"h-[40px]"}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Label text={"دیاگ"} />
          <SelectInput
            data={diagData}
            onclick={selectOptionHandler}
            id={"diagOption"}
            newReset={newReset}
            className={"h-[40px]"}
          />
        </div>
      </section>
      <div className="size1050:px-[150px] px-0">
        <div className="flex flex-col gap-4 mt-8">
          <Label text={"شرح درخواست"} />
          <textarea
            rows={10}
            id="description"
            name="description"
            className="border border-[#d1d1d1] rounded-5 pr-2 pt-2 outline-0"
          ></textarea>
        </div>
      </div>

      <div className="text-center mt-[40px]">
        <Button
          type={"submit"}
          text={"ارسال درخواست همکاری"}
          class_name={"bg-[#453983] text-white rounded-5 w-[230px] py-[10px]"}
        />
      </div>
      <ToastContainer rtl={true} />
    </form>
  );
};

export default MobileRepresentatives;
