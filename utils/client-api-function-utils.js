"use client"

import {service} from "@/service/service";
import axios from "axios";

export async function getData(apiRoute) {
    service()
    try {
        return await axios.get(apiRoute)
    } catch (error) {
        return error
    }
}
export async function postData(apiRoute, fd) {
    service()
    try {
        return await axios.post(apiRoute, fd)
    } catch (error) {
        return error
    }
}
export async function putData(apiRoute, fd, configHeader) {
    service()
    try {
        return await axios.put(apiRoute, fd, {headers: {configHeader}})
    } catch (error) {
        return error
    }
}
export async function getMultipleData(apiRoute, fd, configHeader) {
    service()
    try {
        return await axios.put(apiRoute, fd, {headers: {configHeader}})
    } catch (error) {
        return error
    }
}
