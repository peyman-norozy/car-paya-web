"use client"
import React, { useEffect, useState } from "react";
import Label from "@/components/Label";
import Input from "@/components/Input";
import SelectSearchInput from "@/components/SelectSearchInput";
import SelectInput from "@/components/SelectInput";
import Button from "@/components/Button";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import { API_PATHS } from "@/configs/routes.config";
import { error, success } from "@/utils/function-utils";
import TitleDescription from "@/components/TitleDescription";

const activityData = {
  placeholder: "انتخاب کنید",
  id: "activityDataSelected",
  options: [
    { option: "لوازم خودرو", value: "CAR" },
    { option: "باطری", value: "BATTERY" },
  ],
};

const SupplierRepresentatives = () => {
  const [newProvinces, setNewProvinces] = useState([]);
  const [newCities, setNewCities] = useState([]);
  const [newAreas, setNewAreas] = useState([]);
  const [newCitiesId, setNewCitiesId] = useState("");
  const [newProvinceId, setNewProvinceId] = useState("");
  const [activityState, setActivityState] = useState("");
  const [newReset, setNewReset] = useState(false);

  const selectOptionHandler = (event) => {
    const id = event.target.id;
    const value = event.target.getAttribute("value");
    if (id === "activityOption") {
      setActivityState(value);
    }
  };

  const selectSearchOptionHandler = (event) => {
    if (event.target.id === "provincesOption") {
      setNewProvinceId(event.target.value);
      setNewCitiesId("");
      setNewAreas([]);
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
    }
  };

  const agentMovingFormSubmitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("mobile", event.target.mobileNumber.value);
    formData.append("national_code", event.target.nationalCode.value);
    formData.append("first_name", event.target.firstName.value);
    formData.append("last_name", event.target.lastName.value);
    formData.append("description", event.target.description.value);
    formData.append("company_name", event.target.companyName.value);
    formData.append("city_id", newCitiesId);
    formData.append("province_id", newProvinceId);
    formData.append("activity", activityState);

    axios
      .post(process.env.BASE_API + "/web" + API_PATHS.SUPPLIERREQUEST, formData)
      .then((res) => {
        success(res.data.data["msg"]);
        event.target.reset();
        setNewReset(true);
        setNewCitiesId("");
        setNewAreas("");
        setNewProvinceId("");
        setActivityState("");
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
        درخواست پیوستن به زنجیره تامین کنندگان
      </TitleDescription>
      <div className="grid size800:grid-cols-2 grid-cols-1 gap-[40px] mt-8">
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
          <Label text={"نام"} />
          <Input
            type={"text"}
            id={"firstName"}
            name={"firstName"}
            className={
              "border border-[#d1d1d1] rounded-5 h-[40px] pr-2 outline-0"
            }
          />
        </div>
        <div className="flex flex-col gap-4">
          <Label text={"نام خانوادگی"} />
          <Input
            type={"text"}
            id={"lastName"}
            name={"lastName"}
            className={
              "border border-[#d1d1d1] rounded-5 h-[40px] pr-2 outline-0"
            }
          />
        </div>
        <div className="flex flex-col gap-4">
          <Label text={"استان"} />
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
          <Label text={"نام شرکت"} />
          <Input
            type={"text"}
            id={"companyName"}
            name={"companyName"}
            className={
              "border border-[#d1d1d1] rounded-5 h-[40px] pr-2 outline-0"
            }
          />
        </div>
        <div className="flex flex-col gap-4">
          <Label text={"حوزه فعالیت"} />
          <SelectInput
            data={activityData}
            onclick={selectOptionHandler}
            id={"activityOption"}
            newReset={newReset}
            className={"h-[40px]"}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-8 size1050:px-[150px] px-0">
        <Label text={"شرح درخواست"} />
        <textarea
          rows={10}
          id="description"
          name="description"
          className="border border-[#d1d1d1] rounded-5 pr-2 pt-2 outline-0"
        ></textarea>
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

export default SupplierRepresentatives;
