"use client";
import { API_PATHS } from "@/configs/routes.config";
import PanelContainer from "@/layouts/PanelContainer";
import { getDataWithFullErrorRes } from "@/utils/api-function-utils";
import { postData } from "@/utils/client-api-function-utils";
import { success } from "@/utils/function-utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    getProfileData();
  }, []);

  async function getProfileData() {
    const res = await getDataWithFullErrorRes("user/profile");
    console.log(res.data);
    setData({
      image_id: res.data.image_id,
      first_name: res.data.profile.first_name,
      last_name: res.data.profile.last_name,
      mobile: res.data.mobile,
      gender: res.data.profile.gender,
      national_code: res.data.profile.national_code,
      email: res.data.email,
    });
  }

  async function postProfileData() {
    const res = postData("/user/profile", data);
    success("اطلاعات با موفقیت ویرایش شد");
    console.log(res);
  }

  async function imageChangeHandler(e) {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      console.log(file);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("type", "USER");
      // for (let [key, value] of formData.entries()) {
      //   console.log(`${key}: ${value.name}`);
      // }

      const response = await fetch(`${process.env.BASE_API}/web/files`, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const res = await response.json();
        setData({ ...data, image_id: res.data.id });
      } else {
        console.error("Upload failed");
      }
    }
  }

  return (
    <PanelContainer>
      <div className="bg-[#fefefe] rounded-lg shadow-[0_0_8px_0_rgba(143,143,143,0.25)] min-h-[500px] flex flex-col gap-6 lg:gap-9 p-4 lg:p-12">
        <div className="flex gap-2 items-center lg:hidden">
          <Link href={"/panel"} className="flex items-center">
            <i className="cc-arrow-right text-xl leading-3" />
          </Link>
          <span className="font-medium text-sm">پروفایل</span>
        </div>
        <div className="flex items-center gap-4 lg:gap-10 ">
          <Image
            src={process.env.BASE_API + "/web/file/" + data.image_id}
            width={112}
            height={112}
            className="rounded-full bg-stone-500"
          />
          <div className="h-28 rounded-lg flex justify-center items-center border border-[#D6D6D6] w-[calc(100%-144px)] relative">
            <span className="text-[#6D6D6D] text-sm font-medium">
              افزودن عکس
            </span>
            <input
              className="absolute w-full h-28 opacity-0 z-[2] cursor-pointer"
              type="file"
              onChange={imageChangeHandler}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-6 lg:gap-y-10 gap-x-4 lg:gap-x-16">
          <div className="relative border border-[#B0B0B0] rounded-lg px-3 py-3">
            <input
              className="w-full h-full outline-none text-xs"
              value={data.first_name}
              onChange={(e) => {
                setData({ ...data, first_name: e.target.value });
              }}
            />
            <span className="text-sm font-medium text-[#6D6D6D] absolute bg-white px-px -top-3 right-2">
              نام
            </span>
          </div>
          <div className="relative border border-[#B0B0B0] rounded-lg px-3 py-3">
            <input
              className="w-full h-full outline-none text-xs"
              value={data.last_name}
              onChange={(e) => {
                setData({ ...data, last_name: e.target.value });
              }}
            />
            <span className="text-sm font-medium text-[#6D6D6D] absolute bg-white px-px -top-3 right-2">
              نام خانوادگی
            </span>
          </div>
          <div className="relative border border-[#B0B0B0] rounded-lg px-3 py-3">
            <input
              className="w-full h-full outline-none text-xs"
              value={data.mobile}
              onChange={(e) => {
                setData({ ...data, mobile: e.target.value });
              }}
              type="number"
            />
            <span className="text-sm font-medium text-[#6D6D6D] absolute bg-white px-px -top-3 right-2">
              شماره تماس
            </span>
          </div>
          <div className="relative border border-[#B0B0B0] rounded-lg px-3 py-3">
            <select
              className="w-full h-full outline-none text-xs bg-inherit"
              value={data.gender}
              onChange={(e) => {
                setData({ ...data, gender: e.target.value });
              }}
            >
              <option value={"male"}>مرد</option>
              <option value={"female"}>زن</option>
            </select>
            <span className="text-sm font-medium text-[#6D6D6D] absolute bg-white px-px -top-3 right-2">
              جنسیت
            </span>
          </div>
          {/* <div className="relative border border-[#B0B0B0] rounded-lg px-3 py-3">
            <input
              className="w-full h-full outline-none text-xs"
              value={data.birthday}
              onChange={(e) => {
                setData({ ...data, birthday: e.target.value });
              }}
            />
            <span className="text-sm font-medium text-[#6D6D6D] absolute bg-white px-px -top-3 right-2">
              تاریخ تولد
            </span>
          </div> */}
          <div className="relative border border-[#B0B0B0] rounded-lg px-3 py-3">
            <input
              className="w-full h-full outline-none text-xs"
              value={data.email}
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
            />
            <span className="text-sm font-medium text-[#6D6D6D] absolute bg-white px-px -top-3 right-2">
              ایمیل
            </span>
          </div>
          <div className="relative border border-[#B0B0B0] rounded-lg px-3 py-3">
            <input
              className="w-full h-full outline-none text-xs"
              value={data.national_code}
              onChange={(e) => {
                setData({ ...data, national_code: e.target.value });
              }}
              type="number"
            />
            <span className="text-sm font-medium text-[#6D6D6D] absolute bg-white px-px -top-3 right-2">
              کد ملی
            </span>
          </div>
        </div>
        <div className="w-full bg-[#BBBBBB] h-px"></div>
        <button
          className="w-fit py-2 px-9 font-medium text-[#FEFEFE] bg-[#F66B34] rounded-lg self-end"
          onClick={postProfileData}
        >
          ثبت تغییرات
        </button>
      </div>
    </PanelContainer>
  );
};

export default ProfilePage;
