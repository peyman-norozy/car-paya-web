// import {service} from "@/service/service";
// import axios from "axios";
import api from "@/service/service";

export async function getData(apiRoute) {
    try {
        return await api.get(apiRoute)
    } catch (error) {
        return error
    }
}
export async function postData(apiRoute, fd) {
    try {
        return await api.post(apiRoute, fd)
    } catch (error) {
        return error
    }
}
export async function putData(apiRoute, fd, configHeader) {
    try {
        return await api.put(apiRoute, fd, {headers: {configHeader}})
    } catch (error) {
        return error
    }
}
export async function getMultipleData(apiRoute, fd, configHeader) {
    try {
        return await api.put(apiRoute, fd, {headers: {configHeader}})
    } catch (error) {
        return error
    }
}
