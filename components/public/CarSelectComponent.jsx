"use client";
import { API_PATHS } from "@/configs/routes.config";
import axios from "axios";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import invoice from "@/public/assets/images/invoice.png";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useSetQuery from "@/hook/useSetQuery";
import { getData, postData } from "@/utils/client-api-function-utils";
import { numberWithCommas } from "@/utils/function-utils";
const CarSelectComponent = () => {
  const [vehicleType, setVehicleType] = useState("car");
  const [level, setLevel] = useState(1);
  const [data, setData] = useState([]);
  const [carSelected, setCarSelected] = useState(false);
  const [selectedCar, setSelectedCar] = useState({});
  // const [provienceCity, setProvienceCity] = useState([]);
  // const [searchCity, setSearchCity] = useState([]);
  // const [optionState, setOptionState] = useState(false);
  // const [selectedCity, setSelectedCity] = useState({});
  const [showInvoice, setShowInvoice] = useState(false);
  const [invoiceData, setInvoiceData] = useState([]);
  const [backurl, setBackurl] = useState([]);
  const showHeaderData = useSelector((state) => state.todo.showHeader);
  const renderInvoice = useSelector((state) => state.todo.renderInvoice);

  // const optionRef = useRef(null);
  // const inputRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();
  const setQuery = useSetQuery();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const attributeValue = searchParams.get("attribute_value");

  useEffect(()=>{
    getInvoiceData()
  },[renderInvoice])

  
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

  async function getInvoiceData() {
    const data = await getData("/web/cart")
    setInvoiceData(data.data.data)
  }

  async function removeClickHandler(id) {
    const data = await postData("/web/cart/remove", { product_id: id });
    setInvoiceData(data.data.data);
  }

  function vehicleTypeFetch(model) {
    setVehicleType(model);
    getBrandData(model);
    setQuery.updateQueryParams(
      {
        attribute_slug: "type_vehicle",
        attribute_value: model,
      },
      "",
    );
  }

  function getBrandData(model) {
    axios
      .get(process.env.BASE_API + "/web/" + model + "-brands")
      .then((res) => {
        setData(res.data.data);
      });
    setLevel(2);
    setBackurl([model])
  }

  function optionClickHandler(id, item , state) {
    console.log(id,item,state);
    const level2 = state?state:level;
    if ((level2) <= 3) {
      let array = [...backurl];
      array[level2-1] = id;
      setBackurl(array)
      const route = level2 === 2 ? "-models/" : "-tips/";
      axios
        .get(process.env.BASE_API + "/web/" + vehicleType + route + id)
        .then((res) => {
          setData(res.data.data);
        });
      setLevel(level2 + 1);
    } else {
      axios
        .post(process.env.BASE_API + "/web" + API_PATHS.ADDCAR, {
          car_tip_id: id,
        })
        .then((res) => {
          console.log(res.status === 200);
          if (res.status === 200) {
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
          }
        });
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

  function backClickHandler() {
    if (level === 4) {
      setLevel(2)
      optionClickHandler(backurl[1] , {} , 2)
    }else if (level === 3){
      getBrandData(backurl[0])
    }
  }
    useEffect(() => {
        console.log(attributeValue);
        if (attributeValue) {
            setVehicleType(attributeValue);
        } else {
            setVehicleType("car");
        }
    }, [attributeValue]);

  if (pathname.search("/invoice")&&pathname.search("/panel")&&pathname !== "/login"){return (
    <div className="absolute h-full top-0 right-auto pb-10">
      <div
        className={`bg-[#383838A3] h-[605px] rounded-2xl w-[400px] sticky ${showHeaderData ? "top-[123px]" : "top-[10px]"} right-auto z-[2] backdrop-blur-[16px] p-4 hidden lg:flex flex-col gap-4`}
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
                onClick={() => {
                  setCarSelected(false);
                    localStorage.removeItem("selectedVehicle");
                    setQuery.deleteQuery(
                        "selectTipState",
                        searchParams.get("selectTipState"),
                    );
                }}
              >
                تغییر خودرو
              </button>
            </div>
            {showInvoice ? (
              <>
                {/* <div
                  className="flex flex-col gap-3 items-start relative"
                  onFocusCapture={() => {
                    setOptionState(true);
                  }}
                >
                  <span className="text-[#FEFEFE] font-bold">
                    محله
                  </span>
                  <input
                    className="w-full bg-[#FEFEFE] rounded-lg text-[#0E0E0E] h-10 outline-none px-2"
                    value={selectedCity}
                    onChange={(e) => {
                      inputChangeHandler(e.target.value);
                    }}
                    ref={inputRef}
                  />
                  {optionState && (
                    <div className="absolute w-[calc(100%-32px)] overflow-y-scroll bg-[#FEFEFE] rounded-b-lg top-[76px] z-[2]">
                      <div
                        className="max-h-[200px] flex flex-col"
                        ref={optionRef}
                      >
                        {searchCity.map((item,index) => (
                          <span
                            className="cursor-pointer hover:bg-slate-200 py-1 px-2"
                            value={item.id}
                            onClick={(e) => {
                              cityClickHandler(item);
                            }}
                            key={index}
                          >
                            {item.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div> */}
                <div className={`flex flex-col gap-4 mt-12 items-center`}>
                  <Image src={invoice} className="m-auto size-52 opacity-70" />
                  <span className="text-white">
                    در حال حاضر سرویسی انتخاب نکرده اید
                  </span>
                </div>
              </>
            ) : (
              <div>
                <div className={`flex flex-col gap-4 ${invoiceData.cart_items&&invoiceData.cart_items.length?"":"hidden"}`}>
                  <div className="flex flex-col gap-3 h-[292px] overflow-y-scroll">
                    {invoiceData.cart_items&&invoiceData.cart_items.map((item,index)=>(
                    <div className="flex flex-col px-3 py-2 bg-[#888888] rounded-lg" key={index}>
                      <div className="flex justify-between">
                        <span className="font-bold text-[#FEFEFE]">{item.product.name}</span>
                        <div className="bg-[#FEFEFE] rounded-full size-5 text-[#888888] font-bold pr-[5px] cursor-pointer" onClick={()=>{removeClickHandler(item.product.id)}}>X</div>
                      </div>
                      <div className="flex justify-start gap-2 items-center">
                        <span className="text-[#ececec] line-through text-12 ">{numberWithCommas(item.product.price)} تومان</span>
                        <span className={"size-1 bg-[#B0B0B0] rounded-full "}></span>
                        <span className="text-[#FEFEFE] text-14 font-bold">{numberWithCommas(item.product.discounted_price)} تومان</span>
                      </div>
                    </div>
                    ))}
                  </div>
                  <hr />
                  {/* <div className="flex flex-col gap-2">
                    <div className="text-[#fefefe] flex justify-between">
                      <span className="text-14 font-bold">دستمزد</span>
                      <span className="font-bold text-14">200.000 تومان</span>
                    </div>
                    <div className="text-[#fefefe] flex justify-between">
                      <span className="text-14 font-bold">ایاب ذهاب</span>
                      <span className="font-bold text-14">450.000 تومان</span>
                    </div>
                  </div>
                  <hr /> */}
                    <div className="flex justify-between">
                      <span className="text-white font-bold text-18">
                        مجموع سفارش
                      </span>
                      <span className="text-white font-bold text-18">
                        {numberWithCommas(invoiceData.price_total)} تومان
                      </span>
                    </div>
                  </div>
                  <div
                    className={`flex flex-col mt-10 items-center ${invoiceData.cart_items && invoiceData.cart_items.length ? "hidden" : ""}`}
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
                ثبت وسیله نقلیه
              </span>
              <div className="rounded-lg bg-[#F66B3414] flex justify-between p-1">
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
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-center font-bold text-[#FEFEFE]">
                  انتخاب برند
                </span>
                <div className="flex gap-2 py-1 pr-4 pl-1 text-[#B0B0B0] bg-[#B0B0B01F] rounded-lg">
                  <i className="cc-search text-xl" />
                  <input
                    className="outline-none text-14 bg-[#ffffff01] w-full"
                    placeholder="جستجو..."
                  />
                <i className={`cc-arrow-right text-2xl rotate-180 text-[#ffffff] bg-[#ffffff38] px-2 rounded-md h-7 leading-7 ${level>2?"":"hidden"}`} onClick={backClickHandler}/>
                </div>
                <div className="h-[363px] overflow-y-scroll mt-2">
                  <div className="grid grid-cols-3 gap-x-8 gap-y-[42px]">
                    {data.map((item, index) => (
                      <div
                        className="flex flex-col items-center gap-2"
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
