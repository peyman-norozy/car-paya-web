'use client'
import { API_PATHS } from "@/configs/routes.config";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const CarSelectComponent = () => {
    const [vehicleType , setVehicleType] = useState("car")
    const [level , setLevel] = useState(1)
    const [data,setData] = useState([])
    const [carSelected , setCarSelected] = useState(false)
    const [selectedCar,setSelectedCar] = useState({})
    useEffect(()=>{
        getBrandData("car")
        const object = localStorage.getItem("selectedVehicle")
        if (object) {
            setSelectedCar(JSON.parse(object))
            setCarSelected(true)
        }

    },[carSelected])

    function vehicleTypeFetch(model) {
        setVehicleType(model)
        getBrandData(model)
    }

    function getBrandData(model) {
        axios.get(process.env.BASE_API + "/web/"+model+"-brands").then((res)=>{
            setData(res.data.data);
        })
        setLevel(2)
    }

    function optionClickHandler(id ,item){
        if(level<=3){
            const route = level===2?"-models/":"-tips/"
            axios.get(process.env.BASE_API + "/web/"+vehicleType+route+id).then((res)=>{
                setData(res.data.data);
            })
            setLevel(level+1)
        }
        else{
            axios.post(process.env.BASE_API + "/web" + API_PATHS.ADDCAR, {"car_tip_id": id}).then((res)=>{
                console.log(res.status === 200);
                if(res.status === 200){
                    localStorage.setItem("selectedVehicle",JSON.stringify({id:item.id,title:item.title,image:item.image}))
                    setCarSelected(true)
                }
            })
        }
        
    }

    return ( 
        <div className="bg-[#383838A3] h-auto rounded-2xl w-[400px] fixed top-[123px] right-auto z-[2] backdrop-blur-[16px] py-4 px-4 hidden lg:flex flex-col gap-4">
        {carSelected?
            <div className="flex flex-col">
                    <Image src={process.env.BASE_API+"/web"+API_PATHS.FILE+"/"+selectedCar.image} width={200} height={150} className="w-[60%] aspect-auto m-auto"/>
                    <div className="flex justify-between items-center">
                        <span className="font-bold text-18 text-[#FEFEFE] border-r-[5px] border-[#c0c0c0] leading-6 pr-2">{selectedCar.title}</span>
                        <button className="text-[#F66B34] text-16 cursor-pointer font-medium" onClick={()=>{setCarSelected(false) , localStorage.removeItem("selectedVehicle")}}>تغییر خودرو</button>
                    </div>
            </div>
            :
            <>
                <span className="text-[#FEFEFE] text-20 font-bold text-center">ثبت وسیله نقلیه</span>
                <div className="rounded-lg bg-[#F66B3414] flex justify-between p-1"> 
                    <button className={`${vehicleType==="car"?"bg-[#F66B34] text-[#FEFEFE]":"text-[#F66B34]"} rounded-[4px] w-[100px] h-10 flex justify-center items-center font-medium text-14`} onClick={()=>{vehicleTypeFetch("car")}}>خودرو</button>
                    <div className="my-2 w-[1px] bg-[#F66B34]"></div>
                    <button className={`${vehicleType==="motor"?"bg-[#F66B34] text-[#FEFEFE]":"text-[#F66B34]"} rounded-[4px] w-[100px] h-10 flex justify-center items-center  font-medium text-14`} onClick={()=>{vehicleTypeFetch("motor")}}>موتورسیکلت</button>
                    <div className="my-2 w-[1px] bg-[#F66B34]"></div>
                    <button className={`${vehicleType==="heavy-car"?"bg-[#F66B34] text-[#FEFEFE]":"text-[#F66B34]"} rounded-[4px] w-[100px] h-10 flex justify-center items-center text-[#F66B34] font-medium text-14`} onClick={()=>{vehicleTypeFetch("heavy-car")}}>وسیله سنگین</button>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="text-center font-bold text-[#FEFEFE]">انتخاب برند</span>
                    <div className="flex gap-2 py-1 px-4 text-[#B0B0B0] bg-[#B0B0B01F] rounded-lg">
                        <i className="cc-search text-xl"/>
                        <input className="outline-none text-14 bg-[#ffffff01]" placeholder="جستجو..."/>
                    </div>
                    <div className="h-[363px] overflow-y-scroll mt-2">
                        <div className="grid grid-cols-3 gap-x-8 gap-y-[42px]">
                            {data.map((item,index)=>(
                                <div className="flex flex-col items-center gap-2" key={index} onClick={()=>{optionClickHandler(item.id , item)}}>
                                    <Image src={process.env.BASE_API+"/web"+API_PATHS.FILE+"/"+(item.logo?item.logo:item.image)} width={64} height={48} className="w-16 h-12"/>
                                    <span className="text-white font-bold line-clamp-1 text-center">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        }
        </div>
    );
}
 
export default CarSelectComponent;