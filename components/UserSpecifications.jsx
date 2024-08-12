import React from "react";
import Image from "next/image";

const UserSpecifications = (props) => {
  const profileData = JSON.parse(localStorage.getItem("profileData"));
  return (
    <div className={`flex self-center px-[26px] pt-[24px] ${props.style}`}>
      <div className="flex items-center w-full gap-2">
        {/*<Image*/}
        {/*  src="/assets/icons/profile.svg"*/}
        {/*  alt="user icon"*/}
        {/*  width={100}*/}
        {/*  height={100}*/}
        {/*/>*/}
        <div className={"relative"}>
          <span
            className={
              "bg-[#6878CA] w-[88px] h-[88px] text-white rounded-full flex justify-center items-center"
            }
          >
            {profileData?.name.slice(0,1)}
          </span>
          {/*<div className={"absolute top-0 bottom-0"}>*/}
          {/*    <Image*/}
          {/*        src="/assets/icons/edit.svg"*/}
          {/*        alt="edit icon"*/}
          {/*        width={24}*/}
          {/*        height={24}*/}
          {/*    />*/}
          {/*</div>*/}
        </div>
        <div className={"flex flex-col text-[#FEFEFE]"}>
          <span>{profileData?.name}</span>
          <span>{profileData?.mobile}</span>
        </div>
      </div>
    </div>
  );
};

export default UserSpecifications;
