import axios from "axios";

export function service() {
    axios.interceptors.request.use((request) => {
        request.baseURL = process.env.BASE_API
        request.headers = {
            // Authorization: "Bearer " + localStorage.getItem("Authorization"),
            Accept: "application/json"
        }
        return request
    })
}