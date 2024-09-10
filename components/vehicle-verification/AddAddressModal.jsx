import React, { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ProfileEditeSelectInput from "@/components/ProfileEditeSelectInput";
import CheckBox from "@/components/CheckBox";
import AddressInput from "@/components/AddressInput";
import { getData } from "@/utils/api-function-utils";
import { API_PATHS } from "@/configs/routes.config";
import { usePathname, useRouter } from "next/navigation";

const MapDirection = dynamic(() => import("@/components/MapDirection"), {
  ssr: false,
});
import { postData, putData } from "@/utils/client-api-function-utils";
import nProgress from "nprogress";
import AddressTextarea from "./AddressTextarea";

const AddressModal = (props) => {
  const router = useRouter();
  const pathName = usePathname();
  const [provincesData, setProvincesData] = useState([]);
  const [citiesData, setCitiesData] = useState([]);
  const [provinces, setProvinces] = useState("");
  const [city, setCity] = useState("");
  const [cityId, setCityId] = useState("");
  const [provincesId, setProvincesId] = useState("");
  const [loading, setLoading] = useState(false);
  const [errroData, setErrorData] = useState({});
  const [editData, setEditData] = useState({});
  const [mapPosition, setMapPosition] = useState("");
  const [ItarateMapData, setItarateMapData] = useState({});

  const addressFormSubmitHandler = async (event) => {
    event.preventDefault();
    if (props.deliveryPackage) {
      let checkBoxState = "0";
      if (event.target.userDelivery.checked === false) {
        checkBoxState = "0";
      } else if (event.target.userDelivery.checked === true) {
        checkBoxState = "1";
      }
    }

    const formData = new FormData();
    formData.set("title", event.target.title.value);
    formData.set("address", event.target.address.value);
    formData.set("postal_code", event.target.postalCode.value.toString());
    formData.set("province_id", provincesId);
    formData.set("city_id", cityId);

    {
      props.deliveryPackage && formData.set("user_delivery", checkBoxState);
      props.deliveryPackage &&
        formData.set(
          "receiver_cellphone",
          event.target.phoneNumber.value.toString(),
        );
      props.deliveryPackage &&
        formData.set("receiver_name", event.target.fullName.value);
    }
    formData.set(
      "map",
      `${mapPosition.split(",")[0]},${mapPosition.split(",")[1]}`,
    );

    if (props.pageType === "edite") {
      formData.set("X-HTTP-Method-Override", "PUT");
      props.setIsLoading(true);
      const update = await putData(
        API_PATHS.DASHBOARDUSERADDRESS + "/" + props.addressEditId,
        formData,
      );
      if (update.status === 200) {
        props.getDataFetch([]);
        props.setModalIsOpen(false);
        props.setIsLoading(false);
        props.timeData&&props.timeData();
        
      } else if (update.status === 422) {
        setErrorData(update.data.errors);
        console.log(update.data.errors);
      } else if (update.status === 404) {
        console.log(update);
      }
      setLoading(false);
    } else {
      setLoading(true);
      const post = await postData(API_PATHS.DASHBOARDUSERADDRESS, formData);
      if (post.status === 200) {
        console.log(props);
        console.log(pathName);
        if (pathName === "/panel/productAddress") {
          props.setAddressModalState(false);
          props.getAddressFetchData();
        } else if (pathName === "/vehicle-verification") {
          props.getDataFetch((prev)=>[...prev,post.data.data]);
          props.setModalIsOpen(false);
        } else if (pathName === "/batteries/products/newSelectLocation") {
          console.log(props);
          props.timeData();
          props.setModalIsOpen(false);
        } else if (pathName === "/detailing/selectLocation") {
          props.timeData();
          props.setModalIsOpen(false);
        }

        // props.setIsLoading(true);
      } else if (post.response.status === 422) {
        setErrorData(post.response.data.errors);
        console.log(post.response.data.errors);
      } else if (post.status === 404) {
        console.log(post);
      }
      setLoading(false);
    }
  };

  const fetchCityData = useCallback(
    async (slug) => {
      const getCity = await getData("/web" + API_PATHS.GEOCITIES);
      if (getCity.status === "success") {
        setCitiesData(getCity.data);
      } else if (getCity.status === 404) {
        console.log(getCity);
      } else if (getCity.status === 401) {
        nProgress.start();
        router.push("login");
      } else if (getCity.status === 422) {
        console.log(getCity.data.error);
      }
    },
    [router],
  );

  useEffect(() => {
    (async () => {
      const getProvinces = await getData("/web" + API_PATHS.GEOPROVINCES);
      if (getProvinces.status === "success") {
        setProvincesData(getProvinces.data);
      } else if (getProvinces.status === 404) {
        console.log(getProvinces);
      } else if (getProvinces.status === 401) {
        nProgress.start();
        router.push("login");
      } else if (getProvinces.status === 422) {
        console.log(getProvinces.data.error);
      }
    })();
  }, []);

  useEffect(() => {
    if (ItarateMapData.province_slug) {
      (async () => {
        await fetchCityData(ItarateMapData.province_slug);
      })();
    }
  }, [fetchCityData, ItarateMapData]);

  useEffect(() => {
    console.log(props);
    if (props.pageType === "edite") {
      (async () => {
        const getEditData = await getData(
          API_PATHS.DASHBOARDUSERADDRESS + "/" + props.addressEditId + "/edit",
        );
        if (getEditData.status === "success") {
          setEditData(getEditData.data);
          await fetchCityData(getEditData.data.province_slug);
        } else if (getEditData.status === 404) {
          console.log(getEditData);
        } else if (getEditData.status === 401) {
          nProgress.start();
          router.push("login");
        } else if (getEditData.status === 422) {
          console.log(getEditData.data.error);
        }
      })();
    }
  }, [props.pageType]);

  useEffect(() => {
    if (props.pageType === "edite") {
      setCity(editData.city_name);
      setProvinces(editData.province_name);
      setCityId(editData.city_id);
      setProvincesId(editData.province_id);
      setMapPosition(editData.map);
    }
    if (Object.keys(ItarateMapData).length > 0) {
      setCity(ItarateMapData.city_name);
      setProvinces(ItarateMapData.province_name);
      setCityId(ItarateMapData.city_id);
      setProvincesId(ItarateMapData.province_id);
    }
  }, [ItarateMapData, props.pageType, editData]);

  return (
    <form
      className={
        "absolute bottom-0 lg:inset-0 m-auto w-full max-w-[789px] min-h-[192px] h-[80%] bg-[#FFFFFF] px-[40px] py-[24px] rounded-t-2xl overflow-hidden flex flex-col gap-6 overflow-y-scroll pb-20 lg:pb-0"
      }
      onSubmit={addressFormSubmitHandler}
    >
      <div className={"flex -items-center justify-between"}>
        <h1 className={"text-center font-bold text-[#454545]"}>افزودن آدرس</h1>
        <i
          className={"cc-close-circle text-24"}
          onClick={() => props.setModalIsOpen(false)}
        />
      </div>
      <div className={"address_Map w-[100%]"}>
        {editData.map ? (
          <MapDirection
            setMapPosition={setMapPosition}
            editData={mapPosition ? (editData.map = mapPosition) : editData.map}
            setItarateMapData={setItarateMapData}
            dragging={true}
          />
        ) : props.pageType === "create" ? (
          <MapDirection
            setMapPosition={setMapPosition}
            setItarateMapData={setItarateMapData}
            dragging={true}
          />
        ) : (
          ""
        )}
      </div>
      <div className={"grid grid-cols-2 gap-6"}>
        <div className={"col-span-full"}>
          <AddressTextarea
            type={"text"}
            icon={"cc-location"}
            editData={editData.address}
            ItaratedAddress={ItarateMapData.address}
            pageType={props.pageType}
            title={"آدرس"}
            star={true}
            name={"address"}
            id={"address"}
            // profileData={""}
          />
          {errroData.address && (
            <span
              className={"inline-block text-[12px] text-red-500 font-bold mt-2"}
            >
              {errroData.address && errroData.address[0]}
            </span>
          )}
        </div>
        <div className={"col-span-full md:col-span-1"}>
          <ProfileEditeSelectInput
            type={"text"}
            icon={"cc-edit"}
            title={"استان"}
            data={provincesData}
            height={"h-[200px]"}
            star={true}
            relation={true}
            setCitiesData={setCitiesData}
            setProvinces={setProvinces}
            setCity={setCity}
            setCityId={setCityId}
            selectOptionData={provinces}
            setProvincesId={setProvincesId}
            name={"province"}
            id={"province"}
            // profileData={""}
          />
          {errroData.province_id && (
            <span
              className={"inline-block text-[12px] text-red-500 font-bold mt-2"}
            >
              {errroData.province_id && errroData.province_id[0]}
            </span>
          )}
        </div>
        <div className={"col-span-full md:col-span-1"}>
          <ProfileEditeSelectInput
            type={"text"}
            icon={"cc-edit"}
            title={"شهر"}
            data={citiesData}
            star={true}
            height={"h-[200px]"}
            setCity={setCity}
            selectOptionData={city}
            setCityId={setCityId}
            name={"city"}
            id={"city"}
            // profileData={""}
          />
          {errroData.city_id && (
            <span
              className={"inline-block text-[12px] text-red-500 font-bold mt-2"}
            >
              {errroData.city_id && errroData.city_id[0]}
            </span>
          )}
        </div>
        <div className={"col-span-full md:col-span-1"}>
          <AddressInput
            type={"text"}
            name={"title"}
            editData={editData.title}
            pageType={props.pageType}
            id={"title"}
            icon={"cc-document-align-right"}
            title={"عنوان"}
            star={true}
            // profileData={""}
          />
          {errroData.city_id && (
            <span
              className={"inline-block text-[12px] text-red-500 font-bold mt-2"}
            >
              {errroData.city_id && errroData.title[0]}
            </span>
          )}
        </div>
        <div className={"col-span-full md:col-span-1"}>
          <AddressInput
            type={"text"}
            icon={"cc-document-align-right"}
            title={"کد پستی(تهران اختیاری)"}
            editData={editData.postal_code}
            pageType={props.pageType}
            id={"postalCode"}
            name={"postalCode"}
            star={false}
            // profileData={""}
          />
          {errroData.postal_code && (
            <span
              className={"inline-block text-[12px] text-red-500 font-bold mt-2"}
            >
              {errroData.postal_code && errroData.postal_code[0]}
            </span>
          )}
        </div>
      </div>
      <div className={"h-[1px] bg-stone-300"}></div>
      {props.deliveryPackage && (
        <div>
          <CheckBox
            name={"userDelivery"}
            id={"userDelivery"}
            editData={editData.user_delivery}
            title={"بسته را خودم تحویل میگیریم"}
          />
        </div>
      )}
      {props.deliveryPackage && (
        <div className={"grid grid-cols-2 gap-6"}>
          <div>
            <AddressInput
              type={"text"}
              icon={"cc-user"}
              title={"نام/نام خانوادگی گیرنده"}
              editData={editData.receiver_name}
              pageType={props.pageType}
              star={true}
              name={"fullName"}
              id={"fullName"}
              // onChange={nameChangeHandler}
              // profileData={""}
            />
          </div>
          <div>
            <AddressInput
              type={"text"}
              icon={"cc-call"}
              title={"شماره موبایل گیرنده"}
              editData={editData.receiver_cellphone}
              pageType={props.pageType}
              star={true}
              name={"phoneNumber"}
              id={"phoneNumber"}
              // profileData={""}
            />
          </div>
        </div>
      )}
      <div
        className="fixed lg:static w-full rounded-t-2xl shadow-[0_-2px_4px_0_rgba(199,199,199,0.25)] flex justify-center pt-4 pb-6 items-start bottom-0 right-0 bg-white z-[2000] px-10"
        type="submit"
      >
        <button
          className={`bg-[#F66B34] rounded-lg w-full sm:max-w-[400px] text-[#FEFEFE] text-sm font-medium py-3`}
        >
          ثبت
        </button>
      </div>
    </form>
  );
};

export default AddressModal;
