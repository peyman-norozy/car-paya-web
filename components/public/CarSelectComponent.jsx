"use client";
import { API_PATHS } from "@/configs/routes.config";
import axios from "axios";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import invoice from "@/public/assets/images/invoice.png";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useSetQuery from "@/hook/useSetQuery";
import { postData } from "@/utils/client-api-function-utils";
import { numberWithCommas } from "@/utils/function-utils";
import {
  getCurrentData,
  getDataWithFullErrorRes,
} from "@/utils/api-function-utils";
import nProgress from "nprogress";
import { renderSetCar, setBatteriesBasketLength } from "@/store/todoSlice";
const CarSelectComponent = (props) => {
  const [vehicleType, setVehicleType] = useState("car");
  const [carSelectedType, setCarSelectedType] = useState("انتخاب برند");
  const [level, setLevel] = useState(1);
  const [data, setData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);
  const [carSelected, setCarSelected] = useState(false);
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

  useEffect(() => {
    getBrandData("car");
    const object = localStorage.getItem("selectedVehicle");
    if (object) {
      setSelectedCar(JSON.parse(object));
      setCarSelected(true);
    }
  }, [carSelected]);

  useEffect(() => {
    (async () => {
      const data = await getDataWithFullErrorRes(
        process.env.BASE_API + "/web/my-vehicles",
      );
      if (data.status && data.status === "success") {
        setMyVehicleData(data.data);
      }
    })();
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(process.env.BASE_API + "/web/geo/province-cities")
  //     .then((res) => {
  //       if (res.data.status === "success") {
  //         setProvienceCity(res.data.data);
  //         setSearchCity(res.data.data);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  //   document.addEventListener("click", (e) => {
  //     if (
  //       e.target.parentElement !== optionRef.current &&
  //       e.target !== inputRef.current
  //     ) {
  //       setOptionState(false);
  //     }
  //   });
  //   const object = localStorage.getItem("city");
  //   if (object) {
  //     setSelectedCity(JSON.parse(object).label);
  //   } else {
  //     setSelectedCity("");
  //   }
  // }, []);
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
    console.log(data);
    if (data.data?.status === "success") {
      let totalPrice = 0;
      for (let item of data.data.data) {
        totalPrice = totalPrice + item.item.item?.price;
      }
      console.log(totalPrice);
      setInvoiceData({ data: data.data.data, totalPrice: totalPrice });
      if (cartableType === "BATTERIES") {
        dispatch(setBatteriesBasketLength(data.data.data.length));
      }
    }
  }

  async function removeClickHandler(id, serviceType) {
    console.log(id);
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
        nProgress.start();
        router.push(
          `/batteries/products?attribute_slug=type_vehicle&attribute_value=${attributeValue ? attributeValue : "car"}`,
        );
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
          console.log(item.item.item.discounted_price);
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
    } else {
      getBrandData(model);
    }
    // setQuery.updateQueryParams(
    //   {
    //     attribute_slug: "type_vehicle",
    //     attribute_value: model,
    //   },
    //   "",
    // );
  }

  function getBrandData(model) {
    axios
      .get(process.env.BASE_API + "/web/" + model + "-brands")
      .then((res) => {
        setData(res.data.data);
        setSearchedData(res.data.data);
        setCarSelectedType("انتخاب برند");
      });
    setLevel(2);
    setBackurl([model]);
  }

  function optionClickHandler(id, item, state) {
    console.log(id, item, state);
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
            setCarSelectedType("انتخاب مدل");
          } else {
            setCarSelectedType("انتخاب تیپ");
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
          image: item.image,
        }),
      );
      setCarSelected(true);
      dispatch(renderSetCar());
      // axios
      //   .post(process.env.BASE_API + "/web" + API_PATHS.ADDCAR, {
      //     car_tip_id: id,
      //   })
      //   .then((res) => {
      //     console.log(res.status === 200);
      //     if (res.status === 200) {
      //       setQuery.updateQueryParams({ selectTipState: `true,${id}` }, "");
      //       localStorage.setItem(
      //         "selectedVehicle",
      //         JSON.stringify({
      //           id: item.id,
      //           title: item.title,
      //           image: item.image,
      //         }),
      //       );
      //       setCarSelected(true);
      //       dispatch(renderSetCar());
      //     }
      //   });
    }
  }
  // function inputChangeHandler(value) {
  //   setSelectedCity(value);
  //   setSearchCity(provienceCity.filter((i) => i.label.includes(value)));
  // }

  // function cityClickHandler(item) {
  //   setSelectedCity(item.label);
  //   setOptionState(false);
  //   localStorage.setItem("city", JSON.stringify(item));
  // }

  async function changeVehicleClickHandler() {
    setCarSelected(false);
    setVehicleType("car");
    if (JSON.parse(localStorage.getItem("batteryTotalPrice"))?.productId) {
      await removeClickHandler(
        JSON.parse(localStorage.getItem("batteryTotalPrice")).productId,
        "BATTERIES",
      );
      setCarSelected(false);
      localStorage.removeItem("batteryTotalPrice");
    }
    if (pathname.startsWith("/batteries/battery-assistant")) {
      localStorage.removeItem("selectedVehicle");
      setQuery.updateQueryParams({ selectTipState: null }, "");
      return null;
    } else if (pathname.startsWith("/batteries")) {
      if (JSON.parse(localStorage.getItem("batteryTotalPrice"))?.productId) {
        await removeClickHandler(
          JSON.parse(localStorage.getItem("batteryTotalPrice")).productId,
        );
      } else {
        setCarSelected(false);
        nProgress.start();
        router.push(
          `/batteries/products?attribute_slug=type_vehicle&attribute_value=${attributeValue ? attributeValue : "car"}`,
        );
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
  }

  function backClickHandler() {
    if (level === 4) {
      setLevel(2);
      optionClickHandler(backurl[1], {}, 2);
    } else if (level === 3) {
      getBrandData(backurl[0]);
    }
  }

  console.log(invoiceData);

  if (
    !pathname.includes("/invoice") &&
    !pathname.includes("/panel") &&
    pathname !== "/login"
  ) {
    return (
      <div className="absolute h-full top-0 right-auto pb-10">
        <div
          className={`bg-[#383838A3] h-[605px] rounded-2xl w-[400px] sticky ${showHeaderData ? "top-[123px]" : "top-[10px]"} right-auto z-[2] backdrop-blur-[16px] p-4 ${props.isMobile ? "flex lg:hidden" : "hidden lg:flex"} flex-col gap-4`}
        >
          {carSelected ? (
            <div className="flex flex-col gap-4">
              <Image
                src={
                  process.env.BASE_API +
                  "/web" +
                  API_PATHS.FILE +
                  "/" +
                  selectedCar.image
                }
                width={200}
                height={150}
                className="w-[60%] aspect-auto m-auto"
              />
              <div className="flex justify-between items-center">
                <span className="font-bold text-18 text-[#FEFEFE] border-r-[5px] border-[#c0c0c0] leading-6 pr-2">
                  {selectedCar.title}
                </span>
                <button
                  className="text-[#F66B34] text-16 cursor-pointer font-medium"
                  onClick={changeVehicleClickHandler}
                >
                  تغییر وسیله نقلیه
                </button>
              </div>
              {showInvoice ? (
                <>
                  <div className={`flex flex-col gap-4 mt-12 items-center`}>
                    <Image
                      src={invoice}
                      className="m-auto size-52 opacity-70"
                    />
                    <span className="text-white">
                      در حال حاضر سرویسی انتخاب نکرده اید
                    </span>
                  </div>
                </>
              ) : (
                <div>
                  <div
                    className={`flex flex-col gap-4 ${invoiceData.data && invoiceData.data.length ? "" : "hidden"}`}
                  >
                    <div className="flex flex-col gap-3 h-[292px] overflow-y-scroll">
                      {invoiceData.data &&
                        invoiceData.data.map((item, index) => {
                          console.log(item);
                          return item.vehicle_tip_id ===
                            JSON.parse(localStorage.getItem("selectedVehicle"))
                              ?.id ? (
                            <div
                              className="flex flex-col px-3 py-2 bg-[#888888] rounded-lg"
                              key={index}
                            >
                              <div className="flex justify-between">
                                <span className="font-bold text-[#FEFEFE]">
                                  {item.item.item?.name}
                                </span>
                                <div
                                  className="bg-[#FEFEFE] rounded-full size-5 text-[#888888] font-bold pr-[5px] cursor-pointer"
                                  onClick={() => {
                                    removeClickHandler(item.item.item.id);
                                    setVehicleType("car");
                                  }}
                                >
                                  X
                                </div>
                              </div>
                              <div className="flex justify-start gap-2 items-center">
                                {/*<span className="text-[#ececec] line-through text-12 ">*/}
                                {/*  {numberWithCommas(item.item.item?.price)}{" "}*/}
                                {/*  تومان*/}
                                {/*</span>*/}
                                {/*<span*/}
                                {/*  className={*/}
                                {/*    "size-1 bg-[#B0B0B0] rounded-full "*/}
                                {/*  }*/}
                                {/*></span>*/}
                                <div className="text-[#FEFEFE] text-14 font-bold flex items-center gap-2">
                                  <span>
                                    {pathname.startsWith("/batteries")
                                      ? item.item.item?.id ===
                                          JSON.parse(
                                            localStorage.getItem(
                                              "batteryTotalPrice",
                                            ),
                                          )?.productId &&
                                        numberWithCommas(
                                          JSON.parse(
                                            localStorage.getItem(
                                              "batteryTotalPrice",
                                            ),
                                          ).price,
                                        )
                                      : numberWithCommas(
                                          item.item.item?.discounted_price,
                                        )}
                                  </span>
                                  <span>تومان</span>
                                </div>
                              </div>
                            </div>
                          ) : (
                            index === 0 && <div></div>
                          );
                        })}
                    </div>
                    <hr />
                    <div className="flex justify-between">
                      <span className="text-white font-bold text-18">
                        مجموع سفارش
                      </span>
                      <div className="text-[#FEFEFE] text-14 font-bold flex items-center gap-2">
                        <span>
                          {pathname.startsWith("/batteries")
                            ? numberWithCommas(
                                JSON.parse(
                                  localStorage.getItem("batteryTotalPrice"),
                                )?.price,
                              )
                            : numberWithCommas(invoiceData.totalPrice)}
                        </span>
                        <span>تومان</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`flex flex-col mt-10 items-center ${invoiceData.data && invoiceData.data.length ? "hidden" : ""}`}
                  >
                    <Image
                      src={invoice}
                      className="m-auto size-52 opacity-70"
                    />
                    <span className="text-white">
                      در حال حاضر فاکتور شما خالی می باشد
                    </span>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <span className="text-[#FEFEFE] text-20 font-bold text-center">
                {pathname === "/" ? "ثبت وسیله نقلیه" : "انتخاب وسیله نقلیه"}
              </span>
              <div className="rounded-lg bg-[#F66B3414] flex flex-wrap justify-between gap-1 p-1">
                <button
                  className={`${vehicleType === "car" ? "bg-[#F66B34] text-[#FEFEFE]" : "text-[#F66B34]"} rounded-[4px] w-[100px] h-10 flex justify-center items-center font-medium text-14`}
                  onClick={() => {
                    vehicleTypeFetch("car");
                  }}
                >
                  خودرو
                </button>
                <div className="my-2 w-[1px] bg-[#F66B34]"></div>
                <button
                  className={`${vehicleType === "motor" ? "bg-[#F66B34] text-[#FEFEFE]" : "text-[#F66B34]"} rounded-[4px] w-[100px] h-10 flex justify-center items-center  font-medium text-14`}
                  onClick={() => {
                    vehicleTypeFetch("motor");
                  }}
                >
                  موتورسیکلت
                </button>
                <div className="my-2 w-[1px] bg-[#F66B34]"></div>
                <button
                  className={`${vehicleType === "heavy-car" ? "bg-[#F66B34] text-[#FEFEFE]" : "text-[#F66B34]"} rounded-[4px] w-[100px] h-10 flex justify-center items-center text-[#F66B34] font-medium text-14`}
                  onClick={() => {
                    vehicleTypeFetch("heavy-car");
                  }}
                >
                  وسیله سنگین
                </button>
                {myVehicleData.length ? (
                  <div className="flex items-center m-auto gap-4">
                    <div className="my-2 w-[1px] h-6 bg-[#F66B34]"></div>
                    <button
                      className={`${vehicleType === "my-car" ? "bg-[#F66B34] text-[#FEFEFE]" : "text-[#F66B34]"} rounded-[4px] w-[100px] h-10 flex justify-center items-center text-[#F66B34] font-medium text-14`}
                      onClick={() => {
                        vehicleTypeFetch("my-car");
                      }}
                    >
                      وسیله من
                    </button>
                    <div className="my-2 w-[1px] h-6 bg-[#F66B34]"></div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-center font-bold text-[#FEFEFE]">
                  {carSelectedType}
                </span>
                <div className="flex gap-2 py-1 pr-4 pl-1 text-[#dddddd] bg-[#B0B0B01F] rounded-lg">
                  <i className="cc-search text-xl" />
                  <input
                    className="outline-none text-14 font-medium bg-[#ffffff01] w-full text-[#dddddd] placeholder:text-[#dddddd]"
                    placeholder="جستجو..."
                    onChange={(e) => {
                      searchChangeHandler(e.target.value);
                    }}
                  />
                  <i
                    className={`cc-arrow-right text-2xl rotate-180 text-[#ffffff] bg-[#ffffff38] px-2 rounded-md h-7 leading-7 ${level > 2 || !myVehicleData.length ? "" : "hidden"} cursor-pointer hover:bg-[#ffffff20] transition-all duration-200`}
                    onClick={backClickHandler}
                  />
                </div>
                <div
                  className={`${myVehicleData.length ? "h-[320px]" : "h-[363px]"} overflow-y-scroll mt-2 overflow-x-hidden`}
                >
                  <div className="grid grid-cols-3 gap-x-8 gap-y-[42px]">
                    {searchedData.map((item, index) => (
                      <div
                        className="flex flex-col items-center gap-2 cursor-pointer hover:scale-110 transition-all duration-300"
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
                          width={64}
                          height={48}
                          className="w-16 h-12"
                        />
                        <span className="text-white font-bold line-clamp-1 text-center">
                          {item.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
};

export default CarSelectComponent;
