"use client";
import React, { useEffect } from "react";
import MagSliderCard from "./MagSliderCard";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import { API_PATHS } from "@/configs/routes.config";
import axios from "axios";
import nProgress from "nprogress";

const MagCategoryItems = (props) => {
  const router = useRouter();
  const { data } = props;
  if (data === 500) {
    nProgress.start();
    router.push("/not-found");
  }

  const categoryData = data.data.mags.data;

  return (
    <>
      {categoryData.length > 0 ? (
        <div className="mt-[2.5rem] grid grid-cols-2 size752:grid-cols-3  size1136:grid-cols-4 gap-x-[0.5rem] size720:gap-x-[1rem] gap-y-[1.25rem]">
          {categoryData.map((item, index) => (
            <MagSliderCard key={index} data={item} />
          ))}
        </div>
      ) : (
        <p className="text-center mt-[3rem]">
          مجله ای برای این دسته بندی یافت نشد
        </p>
      )}
    </>
  );
};

export default MagCategoryItems;
