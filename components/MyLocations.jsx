import React, { useEffect, useRef, useState } from "react";
import MapSelection from "./MapSelection";
import AddAddressModal from "@/components/vehicle-verification/AddAddressModal";
import axios from "axios";
import { API_PATHS } from "@/configs/routes.config";

const MyLocations = (props) => {
  const {
    isSelected,
    on_click,
    id,
    title,
    province,
    city,
    address,
    map,
    setFetchData,
  } = props;

  const [showOption, setShowOption] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState();
  const kebabRef = useRef(null);

  const latitude = map.split(",")[0];
  const longitude = map.split(",")[1];

  const location = latitude.toString() + "," + longitude.toString();

  const showOptionHandler = () => {
    setShowOption((prevState) => !prevState);
  };
  const deleteLocationHandler = () => {
    // axios
    //   .get(process.env.BASE_API + API_PATHS.DASHBOARDUSERADDRESS)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  };
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target !== kebabRef.current) {
        setShowOption(false);
      }
    });
    return () => {
      window.removeEventListener("click", () => {
        setShowOption(false);
      });
    };
  }, []);
  return (
    <div
      className={`relative p-[0.75rem] size411:p-[1rem] flex flex-col gap-[1.25rem] size900:gap-0 size900:flex-row justify-between rounded-10 shadow-[0_0_7px_0_rgba(209,209,209,0.3)] border cursor-pointer ${isSelected === id && "border-BLUE_600"}`}
      onClick={on_click}
    >
      {modalIsOpen && (
        <div>
          <div>
            <div className={"fixed  w-[45%] m-auto inset-0 z-[10000000000]"}>
              <AddAddressModal
                getDataFetch={setFetchData}
                pageType={"edite"}
                setModalIsOpen={setModalIsOpen}
                addressEditId={id}
              />
            </div>
            <div
              onClick={() => {
                setModalIsOpen(false);
              }}
              className={
                "w-full h-[100vh] fixed top-0 right-0 bg-black opacity-[0.5] z-[100000000]"
              }
            ></div>
          </div>
        </div>
      )}
      <i className={"cc-menu-kebab text-24 self-end size900:hidden"} />
      <div>
        <div className="flex items-center gap-[0.25rem] mb-[0.63rem]">
          <i className={"cc-location text-[24px]"} />
          <h2 className="text-18">{title}</h2>
        </div>
        <ul className="flex flex-col items-start gap-[0.75rem] text-14 mb-[2rem]">
          <li>
            <span className="font-bold">استان :</span> {province}
          </li>
          <li>
            <span className="font-bold">شهر :</span> {city}
          </li>
          <li>
            <span className="font-bold">آدرس :</span> {address}
          </li>
        </ul>
      </div>
      <div className="h-[150px] w-full flex gap-[1rem] size900:w-[360px] rounded-[0.5rem] overflow-hidden">
        <div className="h-full w-full">
          <MapSelection location={location} setLocation={null} />
        </div>
        <i
          ref={kebabRef}
          className={"cc-menu-kebab text-18 hidden size900:block"}
          onClick={showOptionHandler}
        />
      </div>
      {showOption && (
        <div
          className={
            "py-2 px-4 flex flex-col bg-white rounded-2xl shadow-[0_0_8px_rgba(2.6,2.6,2.6,0.5)] absolute top-[35px] left-[15px] z-[20000]"
          }
        >
          <div
            className={
              "flex items-center gap-2 w-full p-1 rounded-lg hover:bg-gray-300"
            }
            onClick={() => setModalIsOpen(true)}
          >
            <i className={"cc-edit text-16"} />
            <p className={"text-14"}>ویرایش</p>
          </div>
          <div
            onClick={deleteLocationHandler}
            className={
              "flex items-center gap-2 w-full p-1 rounded-lg text-RED_400 hover:bg-gray-300"
            }
          >
            <i className={"cc-close-circle text-16"} />
            <p className={"text-14"}>حذف</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyLocations;
