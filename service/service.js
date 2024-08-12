import axios from "axios";

const baseURL = process.env.BASE_API,
  isServer = typeof window === undefined || typeof window === "undefined";

const api = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  if (isServer) {
    const { cookies } = await import("next/headers"),
      token = cookies().get("Authorization")?.value;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  } else {
    const { getCookie } = await import("cookies-next"),
      token = getCookie("Authorization");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  }
  return config;
});
export default api;
