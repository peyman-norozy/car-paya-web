import React, { useEffect, useState } from "react";
import Button from "./Button";
import GreenCheckInput from "./GreenCheckInput";
import { error, numberWithCommas } from "@/utils/function-utils";
import ProfileEditeSelectInput from "@/components/ProfileEditeSelectInput";
import { useSelector } from "react-redux";
import {
  getCurrentData,
  getData,
  getDataWithFullErrorRes,
} from "@/utils/api-function-utils";
import useSetQuery from "@/hook/useSetQuery";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import nProgress from "nprogress";
import { postData } from "@/utils/client-api-function-utils";

const PurchaseBatteryModal = (props) => {
  const { setBatteryIsSelected } = props;
  const searchParams = useSearchParams();
  const allParams = new URLSearchParams(searchParams.toString());
  const [isSelected, setIsSelected] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [provinces, setProvinces] = useState("");
  const [selectOption, setSelectOption] = useState("");
  const [cityId, setCityId] = useState("");
  const [totalPrice, setTotalPrice] = useState({
    price: 0,
    productId: "",
    vehicle_tip_id: 0,
  });
  const batteriesData = useSelector((data) => data.todo.batteriesData);
  const [nobatteriesData, setNobatteriesData] = useState({});
  const [sameAmpBattery, setSameAmpBattery] = useState({});
  const [amperSelectData, setAmperSelectData] = useState([]);
  const router = useRouter();
  const pathName = usePathname();
  const setQuery = useSetQuery();
  const attributeSlug = searchParams.get("attribute_slug");
  const attributeValue = searchParams.get("attribute_value");
  const [purchseOptions, setPurchseOption] = useState([
    {
      title: "باتری سوزوکی 70 آمپر",
      price: 0,
      id: "oldSameAmperBattery",
      productId: "",
    },
    {
      title: "باتری سوزوکی 70 آمپر با باتری فرسوده آمپر متفاوت",
      price: 0,
      id: "selectAmper",
      productId: "",
    },
    {
      title: "باتری سوزوکی 70 آمپر",
      price: 1200000,
      id: "noneOldBattery",
      productId: "",
    },
  ]);

  console.log(cityId, batteriesData);

  const selectOptionHandler = (index, totalPrice, productId, id) => {
    setIsSelected(index);
    console.log(totalPrice, productId, id);
    if (id === "noneOldBattery") {
      if (pathName.startsWith("/batteries")) {
        if (props.batteryIsSelected) {
          setQuery.updateQueryParams({ type_service: "NO_BATTERY" });
          localStorage.setItem(
            "batteryTotalPrice",
            JSON.stringify({
              price: nobatteriesData.calculation?.payment_price,
              productId: batteriesData.id,
              vehicle_tip_id: JSON.parse(
                localStorage.getItem("selectedVehicle"),
              )?.id,
            }),
          );
        }
      }
      setTotalPrice({
        price: nobatteriesData.calculation?.payment_price,
        productId: productId,
        vehicle_tip_id: JSON.parse(localStorage.getItem("selectedVehicle"))?.id,
      });
    } else if (id === "selectAmper") {
      console.log(cityId);
      setQuery.updateQueryParams({ type_service: "SWING_AMP" });
      localStorage.removeItem("batteryTotalPrice");
      // if (pathName.startsWith("/batteries")) {
      //   if (props.batteryIsSelected) {
      //     localStorage.setItem(
      //       "batteryTotalPrice",
      //       JSON.stringify({
      //         price: 0,
      //         productId: batteriesData.id,
      //         vehicle_tip_id: JSON.parse(
      //           localStorage.getItem("selectedVehicle"),
      //         )?.id,
      //       }),
      //     );
      //   }
      // }
      // setTotalPrice({
      //   price: 0,
      //   productId: batteriesData.id,
      //   vehicle_tip_id: JSON.parse(localStorage.getItem("selectedVehicle"))?.id,
      // });
    } else if (id === "oldSameAmperBattery") {
      if (pathName.startsWith("/batteries")) {
        if (props.batteryIsSelected) {
          setQuery.updateQueryParams({ type_service: "SAME_AMP" });
          localStorage.setItem(
            "batteryTotalPrice",
            JSON.stringify({
              price: sameAmpBattery.calculation,
              productId: batteriesData.id,
              vehicle_tip_id: JSON.parse(
                localStorage.getItem("selectedVehicle"),
              )?.id,
            }),
          );
        }
      }
      setTotalPrice({
        price: sameAmpBattery.calculation,
        productId: batteriesData.id,
        vehicle_tip_id: JSON.parse(localStorage.getItem("selectedVehicle"))?.id,
      });
    }
  };
  const selectPriceHandler = (event) => {
    setSelectedPrice(event.target.getAttribute("price"));
  };

  const clickSelectTimeHandler = async () => {
    console.log(batteriesData.id);
    console.log(allParams.get("provience_city_id"));

    // const data = await postData("/web/cart/remove", {
    //   cartable_id: JSON.parse(localStorage.getItem("batteryTotalPrice"))
    //     ?.productId,
    //   cartable_type: "BATTERIES",
    //   vehicle_tip_id: JSON.parse(localStorage.getItem("selectedVehicle"))?.id,
    // });

    // if (data.status === 200) {
    //   localStorage.setItem("batteryTotalPrice", JSON.stringify(totalPrice));
    // }
    // console.localStorageog(data);

    // if (pathName.startsWith("/batteries")) {
    //   if (props.batteryIsSelected) {
    //     localStorage.setItem("batteryTotalPrice", JSON.stringify(totalPrice));
    //   }
    // }
    nProgress.start();
    router.push(
      `/batteries/products/newSelectLocation?attribute_slug=${attributeSlug}&attribute_value=${attributeValue}&city_id=${JSON.parse(localStorage.getItem("city")).cityId}&type=MOVING&vehicle_tip_id=${JSON.parse(localStorage.getItem("selectedVehicle"))?.id}&amper=${searchParams.get("amper")}&type_service=${searchParams.get("type_service")}&item_id=${batteriesData.id}`,
    );

    // const cartData = await postData("/web/cart/add", {
    //   cartable_id: JSON.parse(localStorage.getItem("batteryTotalPrice"))
    //     ?.productId,
    //   cartable_type: pathName.split("/")[1].toUpperCase().split("-").join("_"),
    //   vehicle_tip_id: JSON.parse(localStorage.getItem("selectedVehicle"))?.id,
    //   step: "step-1",
    // });
    // console.log(cartData);
    // if (cartData.status === 200 || cartData.status === 201) {
    //   console.log(cartData.data);
    //   nProgress.start();
    //   router.push(
    //     `/batteries/products/newSelectLocation?attribute_slug=${attributeSlug}&attribute_value=${attributeValue}&city_id=${JSON.parse(localStorage.getItem("city")).cityId}&type=MOVING&vehicle_tip_id=${JSON.parse(localStorage.getItem("selectedVehicle"))?.id}&amper=${searchParams.get("amper")}&type_service=${searchParams.get("type_service")}`,
    //   );
    // } else if (cartData.response.status === 422) {
    //   console.log(cartData.response.data);
    //   error(cartData.response.data.message);
    // } else if (cartData.response.status === 401) {
    //   nProgress.start();
    //   router.push("/login?backurl=" + pathName + "&" + searchParams.toString());
    // }
  };

  useEffect(() => {
    if (!cityId && batteriesData?.amp) {
      setQuery.updateQueryParams({ amper: batteriesData.amp });
    } else if (cityId) {
      setQuery.updateQueryParams({ amper: cityId });
    }
  }, [cityId, batteriesData]);

  useEffect(() => {
    if (cityId) {
      (async () => {
        const selectAmpBatteriesData = await getData(
          "/web/reservation/battery?step=step-1",
          {
            product_id: batteriesData.id,
            battery_type: "SWING_AMP",
            amp: cityId,
            city_id: JSON.parse(localStorage.getItem("city"))?.cityId,
            vehicle_tip_id: JSON.parse(localStorage.getItem("selectedVehicle"))
              ?.id,
          },
        );
        console.log(selectAmpBatteriesData);
        purchseOptions.map((option) => {
          if (option.id === "selectAmper") {
            return (option.price =
              selectAmpBatteriesData.calculation.difference_same_amp);
          } else {
            return option;
          }
        });
        setTotalPrice({
          price: selectAmpBatteriesData.calculation.payment_price,
          productId: batteriesData.id,
          vehicle_tip_id: JSON.parse(localStorage.getItem("selectedVehicle"))
            ?.id,
        });
        if (selectAmpBatteriesData === 500) {
          console.log(selectAmpBatteriesData, "server error");
        } else if (selectAmpBatteriesData === 404) {
          console.log(selectAmpBatteriesData, "route not corect");
        }
      })();
    }
  }, [cityId]);

  useEffect(() => {
    if (
      Object.keys(batteriesData).length > 0 &&
      Object.keys(nobatteriesData).length > 0 &&
      Object.keys(sameAmpBattery).length > 0
    ) {
      console.log(batteriesData);
      console.log(nobatteriesData);
      const newbatteriesOption = purchseOptions.map((option) => {
        if (option.id === "oldSameAmperBattery") {
          option.title = ` باتری ${sameAmpBattery.product_name} آمپر (با باتری فرسوده هم آمپر) `;
          option.productId = batteriesData.id;
          console.log(sameAmpBattery, batteriesData);
          setTotalPrice({
            price: sameAmpBattery.calculation,
            productId: batteriesData.id,
            vehicle_tip_id: JSON.parse(localStorage.getItem("selectedVehicle"))
              ?.id,
          });
          return option;
        } else if (option.id === "selectAmper") {
          option.title = ` باتری ${batteriesData.name} ${batteriesData.amp} آمپر با باتری فرسوده آمپر متفاوت `;
          option.productId = batteriesData.id;
          return option;
        } else if (option.id === "noneOldBattery") {
          option.title = ` باتری ${nobatteriesData["product_name"]} آمپر (بدون باتری فرسوده) `;
          option.productId = batteriesData.id;
          option.price = nobatteriesData.calculation.difference_same_amp;
          return option;
        }
      });
      setPurchseOption(newbatteriesOption);
    }
  }, [nobatteriesData, batteriesData]);

  useEffect(() => {
    if (props.batteryIsSelected) {
      console.log(batteriesData);
      // setIsSelected(0);
      (async () => {
        const getBatteriesData = await getDataWithFullErrorRes(
          "/web/reservation/battery?step=step-1",
          {
            product_id: batteriesData.id,
            battery_type: "NO_BATTERY",
            city_id: JSON.parse(localStorage.getItem("city"))?.cityId,
            vehicle_tip_id: JSON.parse(localStorage.getItem("selectedVehicle"))
              ?.id,
            amp_user: batteriesData.amp,
          },
        );
        console.log(getBatteriesData);

        if (getBatteriesData.response?.status === 422) {
          return;
        } else if (getBatteriesData.response?.status === 500) {
          console.log(getBatteriesData.response?.status, "server error");
          return;
        } else if (getBatteriesData.response?.status === 404) {
          console.log(getBatteriesData.response?.status, "route not corect");
          return;
        }

        const newAmperOptions = getBatteriesData.amp.map((item) => {
          return { title: item.label, id: item.value };
        });
        const filterAmperOptions = newAmperOptions.filter((item) => {
          if (batteriesData.amp !== Number(item.id)) {
            return item;
          }
        });
        setAmperSelectData(filterAmperOptions);

        const getSameAmpBattery = await getData(
          "/web/reservation/battery?step=step-1",
          {
            product_id: batteriesData.id,
            battery_type: "SAME_AMP",
            amp_user: batteriesData.amp,
            city_id: JSON.parse(localStorage.getItem("city"))?.cityId,
            vehicle_tip_id: JSON.parse(localStorage.getItem("selectedVehicle"))
              ?.id,
          },
        );
        setNobatteriesData(getBatteriesData);
        setSameAmpBattery(getSameAmpBattery);
      })();
    }
  }, [props.batteryIsSelected]);

  useEffect(() => {
    setCityId("");
    setSelectOption("");
  }, [isSelected]);

  useEffect(() => {
    setPurchseOption((prev) =>
      prev.map((item) => {
        if (item.id === "selectAmper") {
          item.price = 0;
        }
        return item;
      }),
    );
  }, [isSelected]);

  // useEffect(() => {
  //   if (pathName.startsWith("/batteries")) {
  //     if (props.batteryIsSelected) {
  //       localStorage.setItem("batteryTotalPrice", JSON.stringify(totalPrice));
  //     }
  //   }
  // }, [totalPrice]);

  useEffect(() => {
    if (isSelected === 1) {
      localStorage.setItem("batteryTotalPrice", JSON.stringify(totalPrice));
    }
  }, [totalPrice]);

  const closeClickHandler = () => {
    props.setBatteryIsSelected(false);
    setIsSelected(false);
    localStorage.removeItem("batteryTotalPrice");
    // localStorage.setItem(
    //   "batteryTotalPrice",
    //   JSON.stringify({ price: 0, productId: "", vehicle_tip_id: 0 }),
    // );
  };

  return (
    <>
      <div
        className={`${!props.batteryIsSelected ? "hidden" : "fixed"} top-0 right-0 h-screen w-screen bg-[#4c4c4caa] z-[20000] transition-all`}
        onClick={closeClickHandler}
      ></div>
      <div
        className={`fixed transition-all w-full sm:w-[658px] duration-1000 ${props.batteryIsSelected ? "bottom-0" : "-bottom-full"} left-[50%] translate-x-[-50%] sm:-translate-y-[50%] z-[20000]`}
      >
        <div className="w-full h-fit sm:w-[658px] bg-white rounded-10 overflow-hidden shadow-[0_0_5px_0_rgba(0,0,0,0.4)]">
          <div className="bg-[#F6FBFF] flex items-center justify-between p-4">
            <h2 className="text-18">{sameAmpBattery.product_name}</h2>
            <i
              className={"cc-close-circle text-[24px]"}
              onClick={closeClickHandler}
            />
          </div>
          <div className="bg-white w-full p-4">
            <div>
              {purchseOptions.map((item, index) => (
                <div
                  key={index}
                  className="flex size746:pb-[10px] flex-col items-start justify-between gap-2.5 mb-[0.25rem] [&:not(:last-child)]:border-b-[1px] border-b-[#C0C0C0] [&:not(:first-child)]:pt-[16px]"
                  onClick={selectPriceHandler}
                  price={item.price}
                >
                  <div className={"flex items-center gap-2"}>
                    <GreenCheckInput
                      isSelected={isSelected === index}
                      on_click={() =>
                        selectOptionHandler(
                          index,
                          item.price,
                          item.productId,
                          item.id,
                        )
                      }
                      class_name="rounded-[50%] cursor-pointer self-start"
                    />
                    <h3 className={`text-12 size1000:text-14`}>
                      <span className={""}> {item.title}</span>
                      {item.id === "selectAmper" ? (
                        <div className={"mt-4"}>
                          <ProfileEditeSelectInput
                            type={"text"}
                            icon={"cc-edit"}
                            title={"انتخاب آمپر"}
                            data={amperSelectData}
                            height={"h-[200px]"}
                            inputHeight={"h-[40px]"}
                            iconSize={"text-[18px]"}
                            disabled={isSelected !== 1}
                            // star={true}
                            relation={false}
                            // setCitiesData={setCitiesData}
                            // setProvinces={setProvinces}
                            setCity={setSelectOption}
                            setCityId={setCityId}
                            selectOptionData={selectOption}
                            // setProvincesId={setProvincesId}
                            name={"select_amper"}
                            id={"select_amper"}
                          />
                        </div>
                      ) : (
                        ""
                      )}
                    </h3>
                  </div>
                  <div className="flex justify-end w-full">
                    <p className="flex items-center gap-2 text-16">
                      {item.price.toString().split("")[0] === "-"
                        ? numberWithCommas(item.price)
                        : "+" + numberWithCommas(item.price)}
                      <span>تومان</span>
                    </p>
                    {/*<Image src={Toman} alt="" width={20} height={20} />*/}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex size746:gap-0 gap-4 items-center justify-between py-[1.5rem] shadow-[0_0_5px_0_rgba(0,0,0,0.4)] px-4">
            <div className="flex items-center gap-[0.25rem] size1000:gap-[0.5rem]">
              <p className={"size746:text-[16px] text-14"}>
                مبلغ قابل پرداخت:{" "}
              </p>
              <div className="flex size1000:mr-[1rem]">
                <p className="size746:text-[16px] text-14">
                  <span> {numberWithCommas(totalPrice.price)} </span>
                  <span>تومان </span>
                </p>
                {/*<Image src={Toman} alt="" width={20} height={20}/>*/}
              </div>
            </div>
            <Button
              class_name={`${isSelected === false ? "bg-[#ecb8a3]" : "bg-[#F66B34]"} rounded-10 hover:shadow-[0_0_5px_0_rgba(0,0,0,0.4)] flex items-center justify-center ga-[0.25rem] text-white px-2 py-2 text-12`}
              disabled_btn={isSelected === false}
              on_click={clickSelectTimeHandler}
            >
              <p>اضافه به سبد خرید</p>
              {/*<Image src={arrowLeft} alt="" height={20} width={20} />*/}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchaseBatteryModal;
