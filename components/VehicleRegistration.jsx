import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import { API_PATHS } from "@/configs/routes.config";
import { error } from "@/utils/function-utils";
import MainCarBrand from "@/components/MainCarBrand";
import MainMotorSycleBrand from "@/components/MainMotorSycleBrand";
import MainCarModel from "@/components/MainCarModel";
import MainCarTip from "@/components/MainCarTip";
import MainMotorSycleModel from "@/components/MainMotorSycleModel";
import MainMotorSycleTip from "@/components/MainMotorSycleTip";
import { ToastContainer } from "react-toastify";
import Spinner from "@/components/Spinner";
import {useDispatch} from "react-redux";
import {setSelectCarBrand, setSelectCarModel} from "@/store/todoSlice";
import {hasCookie} from "cookies-next";
import MainHeavyCarBrand from "@/components/MainHeavyCarBrand";
import MainHeavyCarModel from "@/components/MainHeavyCarModel";
import MainHeavyCarTip from "@/components/MainHeavyCarTip";

// const tabData = [
//   { title: "خودرو", id: "car" },
//   { title: "موتورسیکلت", id: "motorSycle" },
// ];

const VehicleRegistration = (props) => {
  const [mainBrandModalDisplay, setMainBrandModalDisplay] = useState(true);
  const [mainModelDisplay, setMainModelDisplay] = useState(false);
  const [mainTipDisplay, setMainTipDisplay] = useState(false);
  const [mainCarModelData, setMainCarModelData] = useState([]);
  const [mainCarTipsData, setMainCarTipsData] = useState([]);
  const [mainMotorBrandModalDisplay, setMainMotorBrandModalDisplay] =
    useState(true);
  const [mainMotorModelDisplay, setMainMotorModelDisplay] = useState(false);
  const [mainMotorTipDisplay, setMainMotorTipDisplay] = useState(false);
  const [sliderShowState, setSliderShowState] = useState(false);
  const [mainMotorModelData, setMainMotorModelData] = useState([]);
  const [mainMotorTipsData, setMainMotorTipsData] = useState([]);

  const [mainHeavyCarBrandModalDisplay, setMainHeavyCarBrandModalDisplay] =
      useState(true);
  const [mainHeavyCarModelDisplay, setMainHeavyCarModelDisplay] = useState(false);
  const [mainHeavyCarTipDisplay, setMainHeavyCarTipDisplay] = useState(false);
  const [mainHeavyCarModelData, setMainHeavyCarModelData] = useState([]);
  const [mainHeavyCarTipsData, setMainHeavyCarTipsData] = useState([]);
  const [newTabId, setNewTabId] = useState("car");
  const [tabData,setTabData] = useState([ { title: "خودرو", id: "car" },
    { title: "موتورسیکلت", id: "motorSycle" },{ title: "وسیله سنگین", id: "heavy-car" }])
  const dispatch = useDispatch()

  useEffect(() => {
    if(props.modalName ==="motorModal"){
      setTabData([{ title: "موتورسیکلت", id: "motorSycle" }])
      setNewTabId("motorSycle")
    }
    if(props.modalName === "carModal"){
      setTabData([{ title: "خودرو", id: "car" }])
      setNewTabId("car")
    }
    if(props.modalName === "heavyCarModal"){
      setTabData([{ title: "وسیله سنگین", id: "heavy-car" }])
      setNewTabId("heavy-car")
    }
    if(hasCookie("Authorization")&&props.page === "homePage"){
      setTabData(prev=>[...prev,{ title: "خودرو من", id: "myVehicle" }])
    }
  }, [props.modalName,props.page]);

  const clickTabHandler = (event) => {
    setNewTabId(event.currentTarget.id);
  };

  const clickbrandHandler = (event, value, item) => {
    const id = event.currentTarget.getAttribute("id");
    dispatch(setSelectCarBrand(item))
    let models = "";
    id === "car_brand"
      ? (models = API_PATHS.MODELS)
      : id === "motor_brand"
      ? (models = API_PATHS.MOTORMODELS)
      : id === "heavyCar_brand"
      ?(models = API_PATHS.HEAVYCARMODELS)
      : null;
    setSliderShowState(true);
    axios
      .get(process.env.BASE_API + "/web" + models + "/" + value)
      .then((res) => {
        if (id === "car_brand") {
          setMainCarModelData(res.data.data);
          setMainBrandModalDisplay(false);
          setMainModelDisplay(true);
        } else if (id === "motor_brand") {
          setMainMotorModelData(res.data.data);
          setMainMotorBrandModalDisplay(false);
          setMainMotorModelDisplay(true);
        } else if(id === "heavyCar_brand"){
          setMainHeavyCarModelData(res.data.data);
          setMainHeavyCarBrandModalDisplay(false);
          setMainHeavyCarModelDisplay(true)
        }
      })
      .then(() => {
        setSliderShowState(false);
      })
      .catch((e) => {
        if (e.response.status === 422) {
          for (let key in e.response.data.errors) {
            error(e.response.data.errors[key][0]);
          }
        }
      });
  };

  const clickModelHandler = (event, value, image, item) => {
    const id = event.currentTarget.getAttribute("id");
    dispatch(setSelectCarModel(item))
    let tip = "";
    id === "car_model"
      ? (tip = API_PATHS.TIPS)
      : id === "motor_model"
      ? (tip = API_PATHS.MOTORTIPS)
      : id === "heavyCar_model"
      ?(tip = API_PATHS.HEAVYCARTIPS)
      : null;
    setSliderShowState(true);
    axios
      .get(process.env.BASE_API + "/web" + tip + "/" + value)
      .then((res) => {
        console.log(res.data.data)
        if (id === "car_model") {
          res.data.data.filter((item) => {
            if (item.id === value) {
              return (item.image = image);
            }
          });
          setMainCarTipsData(res.data.data);
          setMainTipDisplay(true);
          // setMainBrandModalDisplay(false);
          setMainModelDisplay(false);
          setSliderShowState(false);
        } else if (id === "motor_model") {
          res.data.data.filter((item) => {
            if (item.id === value) {
              return (item.image = image);
            }
          });
          setMainMotorTipsData(res.data.data);
          setMainMotorTipDisplay(true);
          setMainMotorModelDisplay(false);
          setSliderShowState(false);
        } else if (id === "heavyCar_model"){
          res.data.data.filter((item) => {
            if (item.id === value) {
              return (item.image = image);
            }
          });
          setMainHeavyCarTipsData(res.data.data);
          setMainHeavyCarTipDisplay(true);
          setMainHeavyCarModelDisplay(false);
          setSliderShowState(false)
        }
      })
      .catch((e) => {
        if (e.response.status === 422) {
          for (let key in e.response.data.errors) {
            error(e.response.data.errors[key][0]);
          }
        }
      });
  };

  return (
    <Fragment>
      <div
        className={`${props.modalPosition?"absolute inset-0 m-auto h-fit":"absolute top-[10px]"} ${
          props.style ? props.style : "size525:w-[393px] w-[320px]"
        } z-50 bg-white font-light px-4 py-4 rounded-lg`}
      >
        <div className="flex flex-col items-center">
          <span className="text-16">ثبت وسیله نقلیه</span>
          <ul className="flex justify-center gap-2 text-12 mt-4">
            {tabData.map((item) => (
              <li
                key={item.id}
                id={item.id}
                className={`border px-3 py-1 rounded-[5px] cursor-pointer flex gap-2 ${
                  item.id === newTabId ? "bg-red-500 text-white" : ""
                }`}
                onClick={clickTabHandler}
              >
                {item.id === newTabId ? <span>s</span> : ""}
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
        {
          {
            car: sliderShowState ? (
              <div className={"flex justify-center items-center h-[100px]"}>
                <Spinner width={"w-[44px]"} height={"h-[44px]"} />
              </div>
            ) : mainBrandModalDisplay ? (
              <MainCarBrand
                clickbrandHandler={clickbrandHandler}
                setSliderShowState={setSliderShowState}
              />
            ) : mainModelDisplay ? (
              <MainCarModel
                mainCarModelData={mainCarModelData}
                setMainBrandModalDisplay={setMainBrandModalDisplay}
                setMainModelDisplay={setMainModelDisplay}
                clickModelHandler={clickModelHandler}
              />
            ) : mainTipDisplay ? (
              <MainCarTip
                mainCarTipsData={mainCarTipsData}
                setMainTipDisplay={setMainTipDisplay}
                setMainModelDisplay={setMainModelDisplay}
                setMainBrandModalDisplay={setMainBrandModalDisplay}
                modalPosition={props.modalPosition}
                setModalState={props.setModalState}
              />
            ) : null,
            motorSycle: sliderShowState ? (
              <div className={"flex justify-center items-center h-[100px]"}>
                <Spinner width={"w-[44px]"} height={"h-[44px]"} />
              </div>
            ) : mainMotorBrandModalDisplay ? (
              <MainMotorSycleBrand
                clickbrandHandler={clickbrandHandler}
                setSliderShowState={setSliderShowState}
              />
            ) : mainMotorModelDisplay ? (
              <MainMotorSycleModel
                mainMotorModelData={mainMotorModelData}
                setMainMotorBrandModalDisplay={setMainMotorBrandModalDisplay}
                setMainMotorModelDisplay={setMainMotorModelDisplay}
                clickModelHandler={clickModelHandler}
              />
            ) : mainMotorTipDisplay ? (
              <MainMotorSycleTip
                mainMotorTipsData={mainMotorTipsData}
                setMainMotorTipDisplay={setMainMotorTipDisplay}
                setMainMotorModelDisplay={setMainMotorModelDisplay}
                setMainMotorBrandModalDisplay={setMainMotorBrandModalDisplay}
                modalPosition={props.modalPosition}
                setModalState={props.setModalState}
              />
            ) : null,
            "heavy-car":sliderShowState ? (
                <div className={"flex justify-center items-center h-[100px]"}>
                  <Spinner width={"w-[44px]"} height={"h-[44px]"} />
                </div>
            ) : mainHeavyCarBrandModalDisplay ? (
                <MainHeavyCarBrand
                    clickbrandHandler={clickbrandHandler}
                    setSliderShowState={setSliderShowState}
                />
            ) : mainHeavyCarModelDisplay ? (
                <MainHeavyCarModel
                    mainHeavyCarModelData={mainHeavyCarModelData}
                    setMainHeavyCarBrandModalDisplay={setMainHeavyCarBrandModalDisplay}
                    setMainHeavyCarModelDisplay={setMainHeavyCarModelDisplay}
                    clickModelHandler={clickModelHandler}
                />
            ) : mainHeavyCarTipDisplay ? (
                <MainHeavyCarTip
                    mainHeavyCarTipsData={mainHeavyCarTipsData}
                    setMainHeavyCarTipDisplay={setMainHeavyCarTipDisplay}
                    setMainHeavyCarModelDisplay={setMainHeavyCarModelDisplay}
                    setMainHeavyCarBrandModalDisplay={setMainHeavyCarBrandModalDisplay}
                    modalPosition={props.modalPosition}
                    setModalState={props.setModalState}
                />
            ) : null,
            myVehicle:<div>my vehicle</div>
          }[newTabId]
        }
      </div>
      <ToastContainer rtl={true} />
    </Fragment>
  );
};

export default VehicleRegistration;
