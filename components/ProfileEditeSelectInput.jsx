import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import useClickOutside from "@/hook/useClickOutside";
import { getData } from "@/utils/api-function-utils";
import { API_PATHS } from "@/configs/routes.config";
import { useRouter } from "next/navigation";

const ProfileEditeSelectInput = (props) => {
  const [optiontitle, setOptiontitle] = useState("");
  const [optionValue, setOptionValue] = useState("");
  const [optionHeightHandler, setOptionHeightHandler] = useState(false);
  const [heightState, setHeightState] = useState(0);
  const [id, setId] = useState("");

  const selectGenderRef = useRef();
  const liHeightRef = useRef();

  const router = useRouter();

  const close = useCallback(() => setOptionHeightHandler(false), []);
  useClickOutside(selectGenderRef, close);

  const inputTypeHandler = (e) => {
    e.preventDefault();
    return false;
  };

  const clickOptionHandler = async (event) => {
    const value = event.target.getAttribute("value");
    const idAt = event.target.id;
    if (props.relation) {
      props.setCity("");
      props.setCityId("");
      const getCity = await getData("web" + API_PATHS.GEOCITIES + "/" + idAt);
      if (getCity.status === "success") {
        setOptionValue(idAt);
        props.setProvinces(event.target.innerText);
        setOptionHeightHandler(false);
        props.setCitiesData(getCity.data);
        props.setProvincesId(idAt.toString());
      } else if (getCity.status === 404) {
        console.log(getCity);
      } else if (getCity.status === 401) {
        router.push("login");
      } else if (getCity.status === 422) {
        console.log(getCity.data.error);
      }
    } else {
      if (props.ticket) {
        setOptionValue(idAt);
        props.setSection(event.target.innerText);
        setOptionHeightHandler(false);
        props.setSectionValue(value);
      } else {
        setOptionValue(idAt);
        props.setCity(event.target.innerText);
        setOptionHeightHandler(false);
        props.setCityId(event.target.id.toString());
      }
    }
  };

  const inputClickHandler = () => {
    setOptionHeightHandler((prev) => !prev);
  };

  useEffect(() => {
    let heightScroll = liHeightRef.current && liHeightRef.current.scrollHeight;
    setHeightState(heightScroll);
  }, []);

  useEffect(() => {
    if (props.profileData) {
      if (props.profileData === "MALE") {
        setOptionValue(props.profileData);
        setOptiontitle("مرد");
      } else if (props.profileData === "FEMALE") {
        setOptionValue(props.profileData);
        setOptiontitle("زن");
      }
    }
  }, [props.profileData]);

  return (
    <div
      className={`${props.containderClassName} flex flex-col relative ${props.disabled ? "opacity-40" : "opacity-100"}`}
    >
      <div className={"relative"} ref={selectGenderRef}>
        <i
          className={`${props.icon} absolute text-[20px] top-[15px] right-[10px] border-l border-l-stone-500 pl-2 z-10`}
        />
        <input
          type={props.type}
          name={props.name}
          id={props.id}
          disabled={props.disabled}
          autoComplete={"off"}
          className={
            "border border-1 border-[#B0B0B0] rounded-[8px] h-[48px] w-full outline-none pr-[50px] caret-transparent relative"
          }
          onKeyDown={inputTypeHandler}
          onClick={inputClickHandler}
          value={props.selectOptionData}
        />
        <i
          className={`cc-arrow-down text-[24px] absolute left-1 top-[13px] ${optionHeightHandler && props.data.length > 0 ? "rotate-[-90deg]" : "rotate-0"} transition-all`}
        />
        <label
          className={
            "text-[12px] absolute top-[-9px] right-[10px] px-1 bg-white"
          }
        >
          {props.title}{" "}
          {props.star && (
            <span
              className={
                "inline-block text-red-500 text-[14px] absolute bg-white left-[-9px]"
              }
            >
              *
            </span>
          )}
        </label>
      </div>
      <div
        className={`bg-stone-100 rounded-[5px] transition-all overflow-y-scroll ${
          optionHeightHandler
            ? props.data.length > 0
              ? `${props.height}`
              : "h-0"
            : "h-0"
        } absolute top-[48px] w-full`}
        ref={liHeightRef}
      >
        <ul>
          {props.data &&
            props.data.map((item) => (
              <li
                key={item.id}
                id={item.id}
                value={props.ticket ? item.value : item.slug}
                onClick={clickOptionHandler}
                className={`px-2 py-2 cursor-pointer hover:bg-stone-200 ${
                  optionValue === item.slug ? "bg-stone-300" : ""
                }`}
              >
                {props.ticket ? item.label : item.title}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileEditeSelectInput;
