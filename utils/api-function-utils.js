
import axios from "axios";
// import {notFound} from "next/navigation";
import {service} from "@/service/service";
export async function getData(apiRoute) {
    service()
    try{
        const res = await axios.get(apiRoute)
        return res.data
    }catch (error){
        return error.response.status
    }
}
