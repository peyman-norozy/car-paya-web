import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import UserTabsCardChildren from "@/components/cards/UserTabsCardChildren";
import { useParams, usePathname, useRouter } from "next/navigation";
import nProgress from "nprogress";

const TabsCard = (props) => {
  const [newRouter, setNewRouter] = useState("");
  const [triangleState, setTriangleState] = useState(false);
  const accordionRef = useRef();
  const router = useRouter();
  const params = useParams();
  const pathName = usePathname().split("/")[1];

  useEffect(() => {
    setNewRouter(
      params["all-panel-tab"] ? params["all-panel-tab"].join("/") : pathName,
    );
  }, [router, newRouter, params, pathName]);

  useEffect(() => {
    if (accordionRef.current) {
      for (let key of accordionRef.current.children) {
        if (key.getAttribute("tab_id") === newRouter) {
          setTriangleState(true);
          return;
        } else {
          setTriangleState(false);
        }
      }
    }
  }, [newRouter]);

  const tabClickHandler = (event) => {
    const id = event.currentTarget.getAttribute("tab_id");

    if (id === "my-vehicle") {
      setTriangleState((prev) => !prev);
      return;
    }
    if (id === "destination") {
      setTriangleState((prev) => !prev);
      return;
    }

    if (id === "logout") {
      props.setLogoutModalState(true);
    } else if (id === "panel") {
      nProgress.start();
      router.push("/" + id, undefined, { scroll: false });
    } else if (id !== "my-vehicle" || id !== "destination") {
      nProgress.start();
      router.push("/panel" + "/" + id, undefined, { scroll: false });
    }
  };

  return (
    <li
      className={`flex flex-col font-light text-14 cursor-pointer text-[#FEFEFE]`}
    >
      <div
        className={`flex items-center gap-4 hover:bg-[#eff2ff4f] font-medium rounded-10 mx-2 py-4 px-6 ${
          newRouter === props.item.id &&
          newRouter !== "my-vehicle" &&
          newRouter !== "logout"
            ? "bg-[#F66B3429] text-[#F66B34]"
            : "text-[#FEFEFE]"
        }`}
        tab_id={props.item.id}
        onClick={tabClickHandler}
      >
        {/* <Image
          src={props.item.imgSrc}
          alt={props.item.alt}
          width={20}
          height={20}
        /> */}
        <span className="line-clamp-1">{props.item.title}</span>
        {/* {(props.item.id === "my-vehicle" ||
          props.item.id === "destination") && (
          <div className={`flex-1 flex justify-end`}>
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
        )} */}
      </div>

      {(props.item.id === "my-vehicle" || props.item.id === "destination") && (
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
          {props.item.children &&
            props.item.children.map((item) => (
              <UserTabsCardChildren
                key={item.id}
                item={item}
                newRouter={newRouter}
                tabClickHandler={tabClickHandler}
              />
            ))}
        </ul>
      )}
    </li>
  );
};

export default TabsCard;
