"use client";
import React, { useState } from "react";
import Input from "../Input";
import Image from "next/image";
import Button from "../Button";
import axios from "axios";
import { API_PATHS } from "@/configs/routes.config";
import { getCookie, hasCookie } from "cookies-next";
import { error, success } from "@/utils/function-utils";
import { ToastContainer } from "react-toastify";

const MagComments = ({ id }) => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [commentError, serCommentError] = useState("");

  const nameInputHandler = (event) => {
    setNameValue(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmailValue(event.target.value);
  };

  const contentChangeHandler = (event) => {
    setContentValue(event.target.value);
    if (event.target.value.length > 0) {
      serCommentError("");
    }
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
          mag_id: id,
        },
        {
          headers: {
            Authorization: `Bearer ${getCookie("Authorization")}`,
          },
        }
      )
      .then((res) => {
        success("پیام شما ذخیره شد");
        setContentValue("");
        setEmailValue("");
        setNameValue("");
      })
      .catch((err) => {
        console.log(err);

        if (err.response.data.message.msg.error) {
          error(err.response.data.message.msg.error[0]);
        } else if (err.response.data.errors.comment) {
          serCommentError("فیلد کامنت الزامی است.");
          error("دیدگاه شما ثبت نشد");
        } else {
          error("دیدگاه شما ثبت نشد");
        }
      });
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-[22px]">دیدگاهتان را بنویسید</h3>
        <div>star rating</div>
      </div>
      <div className="h-[10rem]">
        <textarea
          value={contentValue}
          onChange={contentChangeHandler}
          className={`mt-[1.5rem] min-h-[9rem] max-h-[9rem] rounded-[0.5rem] border ${
            commentError !== "" ? "border-RED_500" : "border-[#B0B0B0]"
          } w-full`}
        ></textarea>
        {commentError !== "" && (
          <p className="text-12 text-RED_500">{commentError}</p>
        )}
      </div>
      <form
        onSubmit={commentSubmitHandler}
        className="flex flex-col size1000:flex-row items-start size1000:items-center gap-[2rem] mt-[3rem]"
      >
        <div className="flex flex-col size1000:flex-row items-start size1000:items-center gap-[1.5rem] w-full size1000:w-[80%]">
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
              value={nameValue}
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
              value={emailValue}
              className="outline-none pr-[5px] border-r-[2px] border-r-[#B0B0B0]"
              type="text"
              placeholder="مثال : iman@gmail.com"
              on_change={emailChangeHandler}
            />
          </div>
        </div>
        <Button
          type="submit"
          class_name="bg-BLUE_600 text-14 size752:text-[1rem] text-white h-[3rem] rounded-[0.5rem] self-end font-bold text-center w-[40%] size752:w-[20%]"
        >
          ثبت دیدگاه
        </Button>
      </form>
      <ToastContainer rtl={true} />
    </div>
  );
};

export default MagComments;
