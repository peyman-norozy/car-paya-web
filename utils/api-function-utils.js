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

export async function deleteData(apiRoute) {
  try {
    const res = await api.delete(apiRoute);
    return res;
  } catch (error) {
    return error.response.status;
  }
}
