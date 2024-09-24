import React, { useEffect, useState } from "react";
import Image from "next/image";
import { API_PATHS } from "@/configs/routes.config";
import invoice from "@/public/assets/images/invoice.png";
import { numberWithCommas } from "@/utils/function-utils";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useSetQuery from "@/hook/useSetQuery";
import {
  getCurrentData,
  getDataWithFullErrorRes,
} from "@/utils/api-function-utils";
import {
  renderSetCar,
  setBatteriesBasketLength,
  setPeriodicServiceBasketLength,
  setVehicleVerificationBasketLength,
} from "@/store/todoSlice";
import { postData } from "@/utils/client-api-function-utils";
import nProgress from "nprogress";
import axios from "axios";

const CarSelect = (props) => {
  const [vehicleType, setVehicleType] = useState("car");
  const [carSelectedType, setCarSelectedType] = useState("برند");
  const [level, setLevel] = useState(1);
  const [data, setData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);
  // const [carSelected, setCarSelected] = useState(false);
  const [selectedCar, setSelectedCar] = useState({});
  const [myVehicleData, setMyVehicleData] = useState([]);
  // const [provienceCity, setProvienceCity] = useState([]);
  // const [searchCity, setSearchCity] = useState([]);
  // const [optionState, setOptionState] = useState(false);
  // const [selectedCity, setSelectedCity] = useState({});
  const [showInvoice, setShowInvoice] = useState(false);
  const [invoiceData, setInvoiceData] = useState({ data: [], totalPrice: 0 });
  const [backurl, setBackurl] = useState([]);
  const showHeaderData = useSelector((state) => state.todo.showHeader);
  const renderInvoice = useSelector((state) => state.todo.renderInvoice);

  // const optionRef = useRef(null);
  // const inputRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();
  const setQuery = useSetQuery();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const params = new URLSearchParams(searchParams.toString());

  const attributeValue = searchParams.get("attribute_value");

  useEffect(() => {
    getInvoiceData();
  }, [renderInvoice, pathname, searchParams]);

  useEffect(() => {
    if (pathname === "/" || pathname === "/periodic-service") {
      setShowInvoice(true);
    } else {
      setShowInvoice(false);
    }
  }, [pathname]);

  useEffect(
    () => {
      getBrandData("car");
      const object = localStorage.getItem("selectedVehicle");
      if (object) {
        setSelectedCar(JSON.parse(object));
        // setCarSelected(true);
      }
    },
    [
      // carSelected
    ],
  );

  useEffect(() => {
    setQuery.updateQueryParams(
      {
        attribute_slug: "type_vehicle",
        attribute_value: "car",
      },
      "",
    );
    (async () => {
      const data = await getDataWithFullErrorRes(
        process.env.BASE_API + "/web/my-vehicles",
      );
      if (data.status && data.status === "success") {
        setMyVehicleData(data.data);
      }
    })();
  }, []);

  function searchChangeHandler(value) {
    setSearchedData(
      data.filter((item) => {
        return item.title.includes(value);
      }),
    );
  }

  async function getInvoiceData() {
    const cartableType = pathname
      .split("/")[1]
      .toUpperCase()
      .split("-")
      .join("_");
    const data = await getCurrentData("/web/segmentation/cart", {
      cartable_type: cartableType,
      vehicle_tip_id: JSON.parse(localStorage.getItem("selectedVehicle"))?.id,
    });
    if (data.data?.status === "success") {
      let totalPrice = 0;
      for (let item of data.data.data) {
        totalPrice =
          totalPrice + item.item.item?.discounted_price
            ? item.item.item?.discounted_price
            : item.item.item?.price;
      }
      setInvoiceData({ data: data.data.data, totalPrice: totalPrice });
      if (cartableType === "BATTERIES") {
        dispatch(setBatteriesBasketLength(data.data.data.length));
      } else if (cartableType === "PERIODIC_SERVICE") {
        dispatch(setPeriodicServiceBasketLength(data.data.data.length));
      } else if (cartableType === "VEHICLE_VERIFICATION") {
        dispatch(setVehicleVerificationBasketLength(data.data.data));
      }
    }
  }

  async function removeClickHandler(id, serviceType) {
    const carTableType = pathname
      .split("/")[1]
      .toUpperCase()
      .split("-")
      .join("_");
    const data = await postData("/web/cart/remove", {
      cartable_id: id,
      cartable_type: serviceType ? serviceType : carTableType,
      vehicle_tip_id: JSON.parse(localStorage.getItem("selectedVehicle"))?.id,
    });
    // console.log(data.data.data.cart_items);
    if (data.status === 200) {
      if (carTableType === "BATTERIES") {
        // setCarSelected(false);
        // localStorage.removeItem("selectedVehicle");
        localStorage.removeItem("batteryTotalPrice");
        // nProgress.start();
        // router.push(
        //   `/batteries/products?attribute_slug=type_vehicle&attribute_value=${attributeValue ? attributeValue : "car"}`,
        // );
      } else if (carTableType === "PERIODIC_SERVICE") {
        console.log(data.data.data.cart_items);
        let len = 0;
        for (let item of data.data.data.cart_items) {
          if (item.type === carTableType) {
            len = data.data.data.cart_items.length;
          }
        }
        dispatch(setPeriodicServiceBasketLength(len));
      } else if (carTableType === "VEHICLE_VERIFICATION") {
        dispatch(setVehicleVerificationBasketLength({}));
      }
      let totalPrice = 0;
      let newData = [];
      if (data.data.data.cart_items.length === 0) {
        setInvoiceData({
          data: [],
          totalPrice: 0,
        });
      }

      for (let item of data.data.data.cart_items) {
        if (item.type === carTableType) {
          totalPrice = totalPrice + item.item.item.discounted_price;
          newData.push(item);
        } else if (item.type === carTableType) {
          setInvoiceData({
            data: [],
            totalPrice: 0,
          });
        } else if (item.type === carTableType) {
          newData.push(item);
        }
      }
      setInvoiceData({
        data: newData,
        totalPrice: totalPrice,
      });
      // setInvoiceData(data.data.data.cart_item);
    }
  }

  function vehicleTypeFetch(model) {
    setVehicleType(model);
    if (model === "my-car") {
      setData(myVehicleData);
      setSearchedData(myVehicleData);
      setLevel(4);
      console.log(pathname.includes("/batteries"));
      if (pathname.includes("/batteries")) {
        // setQuery.deleteSingleQuery(
        //   [
        //     {
        //       key: "attribute_slug",
        //       value: searchParams.get("attribute_slug"),
        //     },
        //     {
        //       key: "attribute_value",
        //       value: searchParams.get("attribute_value"),
        //     },
        //   ],
        //   params,
        //   "",
        //   pathname.includes("/batteries/battery-assistant")
        //     ? "/batteries/battery-assistant"
        //     : "/batteries/products",
        // );
      }
      return;
    } else {
      getBrandData(model);
    }
    setQuery.updateQueryParams(
      {
        attribute_slug: "type_vehicle",
        attribute_value: model === "heavy-car" ? "heavy_car" : model,
      },
      "",
    );
  }

  function getBrandData(model) {
    axios
      .get(process.env.BASE_API + "/web/" + model + "-brands")
      .then((res) => {
        setData(res.data.data);
        setSearchedData(res.data.data);
        setCarSelectedType("برند");
      });
    setLevel(2);
    setBackurl([model]);
  }

  function optionClickHandler(id, item, state) {
    const level2 = state ? state : level;
    if (level2 <= 3) {
      let array = [...backurl];
      array[level2 - 1] = id;
      setBackurl(array);
      const route = level2 === 2 ? "-models/" : "-tips/";
      axios
        .get(process.env.BASE_API + "/web/" + vehicleType + route + id)
        .then((res) => {
          setData(res.data.data);
          if (level2 === 2) {
            setCarSelectedType("مدل");
          } else {
            setCarSelectedType("تیپ");
          }
          setSearchedData(res.data.data);
        });
      setLevel(level2 + 1);
    } else {
      setQuery.updateQueryParams({ selectTipState: `true,${id}` }, "");

      localStorage.setItem(
        "selectedVehicle",
        JSON.stringify({
          id: item.id,
          title: item.title,
          brand: item.title_brand,
          model: item.title_model,
          image: item.image,
          type: searchParams.get("attribute_value"),
        }),
      );
      // setCarSelected(true);
      props.setAsideStatus("car_city");
      // props.setModalIsOpen && props.setModalIsOpen(false);
      dispatch(renderSetCar());
    }
  }

  async function changeVehicleClickHandler() {
    // setCarSelected(false);
    setVehicleType("car");
    if (JSON.parse(localStorage.getItem("batteryTotalPrice"))?.productId) {
      await removeClickHandler(
        JSON.parse(localStorage.getItem("batteryTotalPrice")).productId,
        "BATTERIES",
      );
      // setCarSelected(false);
      localStorage.removeItem("batteryTotalPrice");
    }
    if (pathname.startsWith("/batteries/battery-assistant")) {
      localStorage.removeItem("selectedVehicle");
      // setQuery.updateQueryParams({ selectTipState: null }, "");
      return null;
    } else if (pathname.startsWith("/batteries")) {
      if (JSON.parse(localStorage.getItem("batteryTotalPrice"))?.productId) {
        await removeClickHandler(
          JSON.parse(localStorage.getItem("batteryTotalPrice")).productId,
        );
      } else {
        // setCarSelected(false);
        // nProgress.start();
        // router.push(
        //   `/batteries/products?attribute_slug=type_vehicle&attribute_value=${attributeValue ? attributeValue : "car"}`,
        // );
        localStorage.removeItem("selectedVehicle");
      }
    } else if (pathname.startsWith("/detailing")) {
      localStorage.removeItem("selectedVehicle");
      nProgress.start();
      router.push(
        `/detailing?attribute_slug=type_vehicle&attribute_value=${attributeValue ? attributeValue : "car"}`,
      );
    } else if (pathname.startsWith("/periodic-service")) {
      localStorage.removeItem("selectedVehicle");
      nProgress.start();
      router.push(
        `/periodic-service?attribute_slug=type_vehicle&attribute_value=${attributeValue ? attributeValue : "car"}`,
      );
    } else if (pathname.startsWith("/")) {
      localStorage.removeItem("selectedVehicle");
    }
    dispatch(renderSetCar());
  }

  function backClickHandler() {
    console.log(level);
    if (level === 4) {
      setLevel(2);
      optionClickHandler(backurl[1], {}, 2);
    } else if (level === 3) {
      getBrandData(backurl[0]);
    }
  }

  return (
    <div className={"absolute right-0.5 h-full"}>
      <section
        className={
          "bg-[#FDFDFD] w-[409px] h-[485px] sticky right-2 top-32 rounded-[16px] flex flex-col justify-between overflow-hidden gap-4 shadow-[0_0_6px_6px_rgba(125,125,125,0.5)]"
        }
      >
        <div className={"pt-6 pb-4 px-8"}>
          <div className={"flex items-center justify-between mb-4"}>
            <span className="inline-block text-[#4F4F4F] text-14 font-medium lg:font-bold">
              انتخاب وسیله نقلیه
            </span>
            <button
              onClick={() => props.setAsideStatus("car_city")}
              className={"text-14 font-bold text-red-500"}
            >
              بازگشت
            </button>
          </div>
          <div className="rounded-lg border border-[#cfcfcf] flex flex-wrap justify-between gap-1 p-1 mb-[12px]">
            <button
              className={`${vehicleType === "car" ? "bg-[#F58052] text-[#FEFEFE]" : "text-[#888888]"} rounded-[8px] w-[100px] h-8 flex justify-center items-center font-medium text-14`}
              onClick={() => {
                vehicleTypeFetch("car");
              }}
            >
              خودرو
            </button>
            <div className="my-2 w-[1px] bg-[#D7DBE0]"></div>
            <button
              className={`${vehicleType === "motor" ? "bg-[#F58052] text-[#FEFEFE]" : "text-[#888888]"} rounded-[8px] w-[100px] h-8 flex justify-center items-center  font-medium text-14`}
              onClick={() => {
                vehicleTypeFetch("motor");
              }}
            >
              موتورسیکلت
            </button>
            <div className="my-2 w-[1px] bg-[#D7DBE0]"></div>
            <button
              className={`${vehicleType === "heavy-car" ? "bg-[#F58052] text-[#FEFEFE]" : "text-[#888888]"} rounded-[8px] w-[100px] h-8 flex justify-center items-center font-medium text-14`}
              onClick={() => {
                vehicleTypeFetch("heavy-car");
              }}
            >
              وسیله سنگین
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-2">
              <div className={"flex items-center"}>
                <i
                  className={`cc-arrow-right text-2xl text-[#000000] px-2 rounded-md h-7 leading-7 ${level > 2 || !myVehicleData.length ? "" : "hidden"} cursor-pointer hover:bg-[#ffffff20] transition-all duration-200`}
                  onClick={backClickHandler}
                />
                <span className="font-medium text-[#000000] text-14">
                  {carSelectedType}
                </span>
              </div>
              {myVehicleData.length ? (
                <div
                  className={`text-left ${vehicleType !== "my-car" && "border border-[#cfcfcf]"} rounded-8`}
                >
                  <button
                    className={`${vehicleType === "my-car" ? "bg-[#F58052] text-[#FEFEFE]" : "text-[#888888]"} rounded-[8px] w-[100px] h-8 flex justify-center items-center font-medium text-14`}
                    onClick={() => {
                      vehicleTypeFetch("my-car");
                    }}
                  >
                    وسیله من
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="flex gap-2 py-1 pr-4 pl-1 text-[#B0B0B0] border border-[#BBBBBB] rounded-lg">
              <i className="cc-search text-xl" />
              <input
                className="outline-none text-14 font-medium w-full"
                placeholder="جستجو..."
                onChange={(e) => {
                  searchChangeHandler(e.target.value);
                }}
              />
            </div>
            <div
              className={`h-[260px] overflow-y-scroll mt-2 overflow-x-hidden`}
            >
              <div className={`grid grid-cols-3 gap-x-7 gap-y-2`}>
                {searchedData.map((item, index) => (
                  <div
                    className="flex flex-col bg-[#FFFFFF] items-center gap-2 cursor-pointer hover:scale-110 transition-all duration-300 shadow-[0_1px_4px_0_rgba(235,235,235,0.25)] p-2 rounded-[4px]"
                    key={index}
                    onClick={() => {
                      optionClickHandler(item.id, item);
                    }}
                  >
                    <Image
                      src={
                        process.env.BASE_API +
                        "/web" +
                        API_PATHS.FILE +
                        "/" +
                        (item.logo ? item.logo : item.image)
                      }
                      width={88}
                      height={66}
                      className="w-[88px] h-[66px]"
                    />
                    <span className="text-[#000000] font-medium text-sm line-clamp-1 text-center">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarSelect;
