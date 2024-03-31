"use client"

import {service} from "@/service/service";
import axios from "axios";

export async function postData(apiRoute,fd) {
    service()
    try {
        return await axios.post(apiRoute,fd)
    }catch (error){
        return error
    }
}