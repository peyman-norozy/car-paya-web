import { useEffect, useState } from "react";
import iransFlag from "@/public/assets/images/iransFlag.png";
import Image from "next/image";

const PlaqueModal = (props) => {
  const [type, setType] = useState("car");
  const [plaque, setPlaque] = useState({
    plaque0: "",
    plaque1: "",
    plaque2: "الف",
    plaque3: "",
  });

  useEffect(() => {
    setType(JSON.parse(localStorage.getItem("selectedVehicle"))?.type);
  }, []);

  const handlePlaqueChange = (key, value) => {
    const data = { ...plaque, [key]: value };
    const plaqueArray = [
      data.plaque0,
      data.plaque1,
      data.plaque2,
      data.plaque3,
    ];
    const selectedVehicle = JSON.parse(localStorage.getItem("selectedVehicle"));
    selectedVehicle.plaque = plaqueArray;
    localStorage.setItem("selectedVehicle", JSON.stringify(selectedVehicle));
    setPlaque(data);
  };

  return (
    <div
      className={`w-screen h-screen flex items-center justify-center bg-[#0000007a] fixed top-0 right-0 ${props.openPlaqueModal ? "" : "hidden"}`}
      onClick={() => setOpenPlaqueModal(false)}
    >
      <div
        className="w-[300px] p-4 bg-white rounded-lg flex flex-col gap-4"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <span className="font-medium text-base">
          لطفا پلاک خود را وارد کنید
        </span>
        {type === "motor" ? (
          <div className="bg-[#FEFEFE] text-[#0E0E0E] flex-col w-28 rounded-md overflow-hidden border border-[#B0B0B0]">
            <div className="flex">
              <input
                className="w-full tracking-[16px] flex justify-center items-center pl-2 font-bold outline-none text-center"
                placeholder="999"
                type="number"
                value={plaque.plaque0}
                onChange={(e) =>
                  handlePlaqueChange("plaque0", e.target.value.slice(0, 3))
                }
              />
              <Image
                className=""
                src={iransFlag}
                width={15}
                height={30}
                alt="پلاک"
              />
            </div>
            <input
              className="w-full tracking-[11px] flex justify-center items-center pl-2 font-bold outline-none text-center"
              placeholder="99999"
              type="number"
              value={plaque.plaque1}
              onChange={(e) =>
                handlePlaqueChange("plaque1", e.target.value.slice(0, 5))
              }
            />
          </div>
        ) : (
          <div className="w-full flex items-center justify-between border border-[#B0B0B0] rounded-lg h-10 pr-[11px] overflow-hidden">
            <input
              className="outline-none w-10 text-center"
              placeholder="99"
              type="number"
              value={plaque.plaque0}
              onChange={(e) =>
                handlePlaqueChange("plaque0", e.target.value.slice(0, 2))
              }
            />
            <div className="h-6 w-px bg-slate-400 my-2"></div>
            <input
              className="outline-none w-10 text-center"
              placeholder="999"
              value={plaque.plaque1}
              onChange={(e) =>
                handlePlaqueChange("plaque1", e.target.value.slice(0, 3))
              }
            />
            <select
              className="outline-none w-10 text-center bg-transparent text-sm"
              value={plaque.plaque2}
              onChange={(e) =>
                handlePlaqueChange("plaque2", e.target.value.slice(0, 2))
              }
            >
              <option value={"الف"}>الف</option>
              <option value={"ب"}>ب</option>
              <option value={"پ"}>پ</option>
              <option value={"ت"}>ت</option>
              <option value={"ث"}>ث</option>
              <option value={"ج"}>ج</option>
              <option value={"ج"}>ج</option>
              <option value={"چ"}>چ</option>
              <option value={"ح"}>ح</option>
              <option value={"خ"}>خ</option>
              <option value={"د"}>د</option>
              <option value={"ذ"}>ذ</option>
              <option value={"ر"}>ر</option>
              <option value={"ز"}>ز</option>
              <option value={"ژ"}>ژ</option>
              <option value={"س"}>س</option>
              <option value={"ش"}>ش</option>
              <option value={"ص"}>ص</option>
              <option value={"ض"}>ض</option>
              <option value={"ط"}>ط</option>
              <option value={"ظ"}>ظ</option>
              <option value={"ع"}>ع</option>
              <option value={"غ"}>غ</option>
              <option value={"ف"}>ف</option>
              <option value={"ق"}>ق</option>
              <option value={"ک"}>ک</option>
              <option value={"گ"}>گ</option>
              <option value={"ل"}>ل</option>
              <option value={"م"}>م</option>
              <option value={"ن"}>ن</option>
              <option value={"و"}>و</option>
              <option value={"ه"}>ه</option>
              <option value={"ی"}>ی</option>
            </select>
            <input
              className="outline-none w-10 text-center"
              placeholder="99"
              value={plaque.plaque3}
              onChange={(e) =>
                handlePlaqueChange("plaque3", e.target.value.slice(0, 2))
              }
            />
            <div className="w-12 px-2 h-full bg-[#3360FF] flex items-center justify-center">
              <Image src={iransFlag} className="" />
            </div>
          </div>
        )}
        <button
          className={`bg-[#F66B34] rounded-[8px] text-white text-[16px] font-medium w-full h-10`}
          onClick={props.registerClickHandler}
        >
          ثبت درخواست
        </button>
      </div>
    </div>
  );
};

export default PlaqueModal;
