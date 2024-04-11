import axios from "axios";
import {getCookie} from "cookies-next";

export function service() {
    axios.interceptors.request.use((request) => {
        request.baseURL = process.env.BASE_API
        request.headers = {
            Authorization: "Bearer " + getCookie("Authorization"),
            Accept: "application/json"
        }
        return request
    })
}