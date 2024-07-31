'use client'
import { API_PATHS } from "@/configs/routes.config";
import Image from "next/image";

const InvoicePage = () => {
    return ( 
        <div className="w-full flex rounded-2xl text-[#FEFEFE] mt-32 mb-6 overflow-hidden">
            <div className="w-[340px] flex flex-col gap-px">
                <div className="h-12 flex items-center justify-center bg-[#47505D] font-bold">مشخصات</div>
                <div className="flex flex-col gap-4 p-6 bg-[#707070]">
                    <Image src={process.env.BASE_API +"/web" +API_PATHS.FILE +"/" + JSON.parse(localStorage.getItem("selectedVehicle")).image} width={270} height={190}/>
                    <div className="flex gap-1">
                        <span className="font-semibold">نوع وسیله نقلیه:</span>
                        <span className="font-normal">خودرو</span>
                    </div>
                    <div className="flex gap-1">
                        <span className="font-semibold">نام وسیله نقلیه:</span>
                        <span className="font-normal">بی ام وه ام 5 پترول 2022</span>
                    </div>
                    <div className="flex gap-1">
                        <span className="font-semibold">نام مشتری:</span>
                        <span className="font-normal">حسام نژاد</span>
                    </div>
                    <div className="flex gap-1">
                        <span className="font-semibold">شماره موبایل:</span>
                        <span className="font-normal">09123622427</span>
                    </div>
                    <div className="flex gap-1">
                        <span className="font-semibold">آدرس:</span>
                        <span className="font-normal">خودرو</span>
                    </div>
                    <div className="flex gap-1">
                        <span className="font-semibold">کد فاکتور:</span>
                        <span className="font-normal">02165804056</span>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default InvoicePage;