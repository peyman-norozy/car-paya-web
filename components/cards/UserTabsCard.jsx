import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {useParams, usePathname, useRouter} from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {setTriangleState} from "@/store/todoSlice";

const UserTabsCard = (props) => {
  const accordionRef = useRef();
  const [newRouter, setNewRouter] = useState("");
  const router = useRouter();
  const params = useParams()
  const pathName = usePathname().split("/")[1]
  const dispatch = useDispatch();
  const triangleState = useSelector((state) => state.todo.triangleState);

  const tabClickHandler = (event) => {
    const id = event.currentTarget.getAttribute("tab_id");

    if (id === "my-vehicle") {
      dispatch(setTriangleState(!triangleState));
    }

    if (id === "logout") {
      setLogoutModalState(true);
    } else if (id === "profile") {
      router.push("/" + id, undefined, { scroll: false });
    } else if (id !== "my-vehicle") {
      router.push("/profile" + "/" + id, undefined, { scroll: false });
    }
  };

  const exitClickHandler = () => {
    props.setLogoutModalState(true);
  };

  useEffect(() => {
    setNewRouter(
        params["all-panel-tab"]
        ? params["all-panel-tab"].join("/")
        : pathName,
    );
  }, [router, newRouter,params,pathName]);

  useEffect(() => {
    for (let key of accordionRef.current.children) {
      if (key.getAttribute("tab_id") === newRouter) {
        dispatch(setTriangleState(true));
        return;
      } else {
        dispatch(setTriangleState(false));
      }
    }
  }, [newRouter, dispatch]);

  return (
    <ul className="flex flex-col gap-1 w-full">
      <li className={"font-light text-14 px-6 flex items-center justify-between mx-2"}>
        <div
            className="flex items-center gap-4 py-2"
        >
          <Image src={"/assets/icons/Vector.svg"} alt={"vector icon"} width={20} height={20} />
          <span>کیف پول</span>
        </div>
        <span>۰ تومان</span>
      </li>
      {props.data.map((item, index) => (
        <li
          key={item.id + index}
          className={`flex flex-col font-light text-14 cursor-pointer`}
        >
          <div
            className={`flex items-center gap-4 hover:bg-[#EFF2FF] rounded-10 mx-2 py-4 px-6 ${
                newRouter === item.id &&
                newRouter !== "my-vehicle" &&
                newRouter !== "logout"
                ? "bg-[#EFF2FF]"
                : ""}`}
            tab_id={item.id}
            onClick={tabClickHandler}
          >
            <Image src={item.imgSrc} alt={item.alt} width={20} height={20} />
            <span>{item.title}</span>
            {item.id === "my-vehicle" && (
              <div
                className={`flex-1 flex justify-end`}
              >
                <Image
                  src="/assets/icons/angle-left.svg"
                  alt="angle left"
                  className={`${
                      triangleState ? "rotate-90" : "rotate-0"
                  } transition-all`}
                  width={22}
                  height={22}
                />
              </div>
            )}
          </div>

          {item.id === "my-vehicle" && (
            <ul
              className={`overflow-hidden transition-all duration-700`}
              style={
                triangleState
                  ? {
                      height:
                        accordionRef.current &&
                        accordionRef.current.scrollHeight + "px",
                    }
                  : { height: "0px" }
              }
              ref={accordionRef}
            >
              {item.children &&
                item.children.map((item) => (
                  <li
                    key={item.id}
                    className={`mx-10 px-6 rounded-10 py-[14px] text-12 hover:bg-[#EFF2FF] flex flex-col justify-center ${
                      newRouter === item.id ? "bg-[#EFF2FF]" : ""
                    }`}
                    tab_id={item.id}
                    onClick={tabClickHandler}
                  >
                    {item.title}
                  </li>
                ))}
            </ul>
          )}
        </li>
      ))}
      <li
        className="flex items-center gap-4 font-light text-14 cursor-pointer hover:bg-[#EFF2FF] rounded-10 px-6 py-4 mx-2 mb-4"
        onClick={exitClickHandler}
      >
        <Image
          src={"/assets/icons/login.svg"}
          alt={"logout icon"}
          width={20}
          height={20}
        />
        <span>خروج</span>
      </li>
    </ul>
  );
};

export default UserTabsCard;
