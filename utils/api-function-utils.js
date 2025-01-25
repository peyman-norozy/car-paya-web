// import axios from "axios";
// import {notFound} from "next/navigation";
// import {service} from "@/service/service";
import api from "@/service/service";
export async function getData(apiRoute, params) {
  try {
    const res = await api.get(apiRoute, { params: params });
    return res.data;
  } catch (error) {
    return error.response?.status;
  }
}

export async function getDataWithFullErrorRes(apiRoute, params) {
  try {
    const res = await api.get(apiRoute, { params: params });
    return res.data;
  } catch (error) {
    return error;
  }
}

export async function getCurrentData(apiRoute, params) {
  try {
    const res = await api.get(apiRoute, { params: params });
    return { data: res.data, success: true };
  } catch (error) {
    console.error(`Error fetching data from ${apiRoute}:`, error);
    return { error: error.response || error.message, success: false };
  }
}

export async function getDataWithRevalidate(apiRoute, params) {
  try {
    const response = await fetch(apiRoute, {
      method: "GET", // می‌توانید این خط را اضافه کنید
      // cache: "no-store", // برای جلوگیری از کش
      next: { revalidate: 60 }, // کش داده‌ها برای ۶۰ ثانیه
    });

    if (!response.ok) {
      if (response.status === 404) {
        return { error: { code: 404, message: "404: منبع پیدا نشد" } };
      }
      throw new Error(`HTTP error! status: ${response.status}`); // بررسی وضعیت پاسخ
    }

    const data = await response.json();
    return data; // برگرداندن داده
  } catch (error) {
    console.log("Error fetching data:", error);
    return null; // در صورت بروز خطا
  }
}

export async function deleteData(apiRoute) {
  try {
    const res = await api.delete(apiRoute);
    return res;
  } catch (error) {
    return error.response.status;
  }
}
