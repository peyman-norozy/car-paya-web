"use client";
import React, { useState } from "react";
import Input from "../Input";
import Image from "next/image";
import Button from "../Button";
import axios from "axios";
import { API_PATHS } from "@/configs/routes.config";
import { hasCookie } from "cookies-next";
import { error, success } from "@/utils/function-utils";
import {ToastContainer} from "react-toastify";

const MagComments = ({id}) => {
  const [nameValue, setNameValue] = useState(null);
  const [emailValue, setEmailValue] = useState("");
  const [contentValue, setContentValue] = useState("");

  console.log(id);

  const nameInputHandler = (event) => {
    setNameValue(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmailValue(event.target.value);
  };

  const contentChangeHandler = (event) => {
    setContentValue(event.target.value);
  };

  const commentSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post(
        process.env.BASE_API + "/web" + API_PATHS.MAGCOMMENTS + "/store",
        {
          name: nameValue,
          email: emailValue,
          comment: contentValue,
          mag_id : id
        },
        {
          headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMDlkOTgyYTY5ZDhiMjM0OWQ0NTljMDNlYzNjYjI0ZTA5YzcwNGNjMGVjNDI0ZGM4NDU1YjkyOTY3N2RiOWQ1NTQ3MzhlNGExNTU1M2M3NDciLCJpYXQiOjE3MTI4NzY1NDMuNTk4MTksIm5iZiI6MTcxMjg3NjU0My41OTgyMDIsImV4cCI6MTcyODY4Nzc0My41ODI3OTksInN1YiI6IjciLCJzY29wZXMiOltdfQ.BOlnzFP7WF7PNfktkHZ5wc7thJBc4-JO2k14Lgcpg7RwPffLTEklxuLPeC8FxIulnAjws_sKerfZ5YT8hr76mQKcb1Jlys0S-w1bT853_qfnffqhCrfmAsqoQy2FJHKV9wUQayTK_3f5-zWFX_nrqRn3yrAD_BhUCyxdbv3V8RTziWCQ7L5o1WexW0ibnmZkjxbk9GfkTPD7nHGxMe2-TFvXxOQPUB8mQwrq7iodrEPuKe9k2Ik2YarHGX1ZXNajqC02Yh8-nFcbNjRayoSFAMtb6FiN2lP0jzNSUXMUfp2lSdUP7w5HYQ5Qi4vAHnP-q25XNQjYLcStJvnfDBFP26H95_v9O8wne6F740q1l2zoyVl3MXu1a7Pmt9aL2pwTfLTHbQLfu9sR8zSYubmsMiQniwFRIEY5mT-usPpXQyWWO4xMxZyLGe1M8NZ9hal_NBgPcwe_2nBo9T-8HsKouWh0a9lT4_32SrqBikTQxaEXiE1MP5BdFo9MwZheA7F_DNB0yn8UbfRxy33cgzinjqqTqXhB2JNkPzB5mZt_N3AQ5YoNoqJQkVRXoz8s-9SgBOIHHX3QbL5wcNgGqoHkj4Bd7NIO7bXZa5KhCvPCA1t9faLEehjgEE5ylgLe1DZsWg3lHLPEn0fP-a3l3do41To2LIysA9kv8ChFhzsVcg8`,
          },
        }
      )
      .then((res) => {
        success('پیام شما ذخیره شد')
      })
      .catch((err) => {
        error('دیدگاه شما ثبت نشد')
      });
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-[22px]">دیدگاهتان را بنویسید</h3>
        <div>star rating</div>
      </div>
      <textarea
        onChange={contentChangeHandler}
        className="mt-[1.5rem] min-h-[9rem] max-h-[9rem] rounded-[0.5rem] border border-[#B0B0B0] w-full"
      ></textarea>
      <form
        onSubmit={commentSubmitHandler}
        className="flex flex-col size752:flex-row items-start size752:items-center gap-[2rem] mt-[2rem]"
      >
        <div className="flex flex-col size752:flex-row items-start size752:items-center gap-[1.5rem] w-[80%]">
          <div className="relative flex items-center w-full h-[3rem] border border-[#B0B0B0] rounded-[0.5rem]">
            <p className="absolute top-[-12px] right-[4%] px-[0.25rem] bg-white text-[#454545] text-14">
              نام کاربری
            </p>
            <Image
              src="/assets/icons/user-edit.png"
              alt=""
              width={18}
              height={18}
              className="mr-[10px] ml-[5px]"
            />
            <Input
              className="outline-none pr-[5px] border-r-[2px] border-r-[#B0B0B0]"
              type="text"
              placeholder="مثال : ایمان"
              on_change={nameInputHandler}
            />
          </div>
          <div className="relative flex items-center w-full h-[3rem] border border-[#B0B0B0] rounded-[0.5rem]">
            <p className="absolute top-[-12px] right-[4%] px-[0.25rem] bg-white text-[#454545] text-14">
              ایمیل
            </p>
            <Image
              src="/assets/icons/user-edit.png"
              alt=""
              width={18}
              height={18}
              className="mr-[10px] ml-[5px]"
            />
            <Input
              className="outline-none pr-[5px] border-r-[2px] border-r-[#B0B0B0]"
              type="text"
              placeholder="مثال : iman@gmail.com"
              on_change={emailChangeHandler}
            />
          </div>
        </div>
        <Button
          type="submit"
          class_name="bg-BLUE_600 text-white h-[3rem] rounded-[0.5rem] font-bold text-center w-[20%]"
        >
          ثبت دیدگاه
        </Button>
      </form>
      <ToastContainer rtl={true}/>
    </div>
  );
};

export default MagComments;
