'use client'
import { API_PATHS } from "@/configs/routes.config";
import bmw from "@/public/assets/images/bmw.png"
import axios from "axios";
import Image from "next/image";
import { useMemo, useState } from "react";

const CarSelectComponent = () => {
    const array10 = [1,2,3,4,5,6,7,8,9,10]
    const [vehicleType , setVehicleType] = useState("car")
    const [level , setLevel] = useState(1)
    const [data,setData] = useState([])


    function vehicleTypeFetch(model) {
        setVehicleType(model)
        getBrandData(model)
    }

    function getBrandData(model) {
        console.log(model);
        axios.get(process.env.BASE_API + "/web/"+model+"-brands").then((res)=>{
            setData(res.data.data);
        })
        setLevel(2)
    }

    function optionClickHandler(id){
        const route = level===2?"-models/":"-tips/"
        axios.get(process.env.BASE_API + "/web/"+vehicleType+route+id).then((res)=>{
            setData(res.data.data);
        })
        setLevel(level+1)
    }

    return ( 
        <div className="bg-[#383838A3] h-[570px] rounded-2xl w-[400px] fixed top-[123px] right-auto z-[2] backdrop-blur-[16px] py-4 px-4 hidden lg:flex flex-col gap-4">
                    <span className="text-[#FEFEFE] text-20 font-bold text-center">ثبت وسیله نقلیه</span>
                    <div className="rounded-lg bg-[#F66B3414] flex justify-between p-1"> 
                        <button className="bg-[#F66B34] rounded-[4px] w-[100px] h-10 flex justify-center items-center text-[#FEFEFE] font-medium text-14" onClick={()=>{vehicleTypeFetch("car")}}>خودرو</button>
                        <div className="my-2 w-[1px] bg-[#F66B34]"></div>
                        <button className="rounded-[4px] w-[100px] h-10 flex justify-center items-center text-[#F66B34] font-medium text-14" onClick={()=>{vehicleTypeFetch("motor")}}>موتورسیکلت</button>
                        <div className="my-2 w-[1px] bg-[#F66B34]"></div>
                        <button className="rounded-[4px] w-[100px] h-10 flex justify-center items-center text-[#F66B34] font-medium text-14" onClick={()=>{vehicleTypeFetch("heavy-car")}}>وسیله سنگین</button>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-center font-bold text-[#FEFEFE]">انتخاب برند</span>
                        <div className="flex gap-2 py-1 px-4 text-[#B0B0B0] bg-[#B0B0B01F] rounded-lg">
                            <i className="cc-search text-xl"/>
                            <input className="outline-none text-14 bg-[#ffffff01]" placeholder="جستجو..."/>
                        </div>
                        <div className="h-[336px] overflow-y-scroll">
                            <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                            {data.map((item,index)=>(
                                <div className="flex flex-col items-center gap-2" key={index} onClick={()=>{optionClickHandler(item.id)}}>
                                    <Image src={process.env.BASE_API+"/web"+API_PATHS.FILE+"/"+item.logo} width={64} height={64}/>
                                    <span className="text-white font-bold line-clamp-1">{item.title}</span>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
     );
}
 
export default CarSelectComponent;