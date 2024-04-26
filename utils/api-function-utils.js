
// import axios from "axios";
// import {notFound} from "next/navigation";
// import {service} from "@/service/service";
import api from "@/service/service";
export async function getData(apiRoute) {
    try{
        const res = await api.get(apiRoute)
        return res.data
    }catch (error){
        return error.response.status
    }
}
