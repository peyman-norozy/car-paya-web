'use client'

import Link from "next/link";
import { useState } from "react";

const SelectProduct = (props) => {
const [value , setValue] = useState("")
    return ( 
        <div className="w-full border border-[#EAEAEA] flex flex-col">
                <div className="bg-[#EAEAEA] items-start px-10 py-5 justify-between flex">
                    <h1 className="text-18">تعویض روغن موتور</h1>
                    <i className="cc-left text-[30px] pr-10"/>
                </div> 
                 <div className="flex flex-col gap-4 p-8">
                    <label className="shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] hover:scale-[102%] transition-transform duration-300 rounded-lg flex justify-between p-5 items-center cursor-pointer" for="1">
                        <div className="gap-4 flex items-center">
                            <div className="size-[55px] bg-red-500"></div>
                            <span className="text-18">روغن موتور کاستوی</span>
                        </div>
                        <div className="gap-4 flex items-center">
                            <span className="text-18">قیمت</span>
                            <span className="text-18 line-through">2.500.000 تومان</span>
                            <span className="text-18">1.800.000 تومان</span>
                            <input type="radio" id="1" name="radioButton" value={123} className="size-5" onChange={()=>{setValue("1")}} checked={value === "1"}/>
                        </div>
                    </label>
                    <label className="shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] hover:scale-[102%] transition-transform duration-300 rounded-lg flex justify-between p-5 items-center cursor-pointer" for="2">
                        <div className="gap-4 flex items-center">
                            <div className="size-[55px] bg-red-500"></div>
                            <span className="text-18">روغن موتور کاستوی</span>
                        </div>
                        <div className="gap-4 flex items-center">
                            <span className="text-18">قیمت</span>
                            <span className="text-18 line-through">2.500.000 تومان</span>
                            <span className="text-18">1.800.000 تومان</span>
                            <input type="radio" id="2" name="radioButton" value={456} className="size-5" onChange={()=>{setValue("2")}} checked={value === "2"}/>
                        </div>
                    </label>
                    <label className="shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] hover:scale-[102%] transition-transform duration-300 rounded-lg flex justify-between p-5 items-center cursor-pointer" for="3">
                        <div className="gap-4 flex items-center">
                            <div className="size-[55px] bg-red-500"></div>
                            <span className="text-18">روغن موتور کاستوی</span>
                        </div>
                        <div className="gap-4 flex items-center">
                            <span className="text-18">قیمت</span>
                            <span className="text-18 line-through">2.500.000 تومان</span>
                            <span className="text-18">1.800.000 تومان</span>
                            <input type="radio" id="3" name="radioButton" value={789} className="size-5" onChange={()=>{setValue("3")}} checked={value === "3"}/>
                        </div>
                    </label>
                 </div>
                <div className="flex justify-end px-10 w-full">
                    <Link href={value!==""?`/periodic-service/service-selection?product=${value}`:""}>
                        <button className={`${value!==""?"bg-[#3AAB38] cursor-pointer":"bg-gray-400 cursor-not-allowed"} rounded-md py-3 px-6`}>
                            <span className="text-white font-bold ">افزودن به سبد خرید</span>
                        </button>
                    </Link>
                </div> 
            </div> 
     );
}
 
export default SelectProduct;