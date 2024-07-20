import Image from "next/image";
import car from "@/public/assets/images/car.jpeg"
import Link from "next/link";

const Invoice = () => {
    return ( 
        <div className="relative h-full hidden lg:inline-block">
                <div className="w-[400px] p-4 flex flex-col gap-4 shadow-[0_0_10px_5px_rgba(0,0,0,0.15)] rounded-lg">
                    <span className="text-[#303030]">فاکتور فروش</span>
                    <Image src={car} width={200} height={150} className="w-[60%] aspect-auto m-auto"/>
                    <div className="flex justify-between items-center">
                        <span className="text-[#303030] text-18 border-r-[5px] border-[#303030] leading-6 pr-1">فورد موستانگ</span>
                        <Link className="text-red-500 text-16 cursor-pointer" href={"/periodic-service"}>تغییر خودرو</Link>
                    </div>
                    <div className="flex flex-col [&>*:first-child]:rounded-t-md [&>*:last-child]:rounded-b-md [&>*:not(:last-child)]:border-b-0 ">
                        <div className="flex justify-between border px-2 py-1">
                            <span className="font-medium">فیلتر هوا کاسپین</span>
                            <span className="">3.000.000 تومان</span>
                        </div>
                        <div className="flex justify-between border px-2 py-1">
                            <span className="font-medium">روغن موتور جنرال</span>
                            <span className="">2.500.000 تومان</span>
                        </div>
                        <div className="flex justify-between border px-2 py-1">
                            <span className="font-medium">لنت ترمز</span>
                            <span className="">1.000.000 تومان</span>
                        </div>
                        <div className="flex justify-between border px-2 py-1">
                            <span className="font-medium">سر والف 4x</span>
                            <span className="">200.000 تومان</span>
                        </div>
                    </div>
                    <hr/>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between">
                            <span className="font-medium">دستمزد:</span>
                            <span className="">200.000 تومان</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">ایاب ذهاب:</span>
                            <span className="">450.000 تومان</span>
                        </div>
                    </div>
                    <hr/>
                    <button className="bg-[#3AAB38] rounded-md flex justify-between py-2 px-4">
                        <span className="text-white font-bold ">تکمیل سفارش</span>
                        <span className="text-white font-bold ">6.000.000 تومان</span>
                    </button>
                </div>
            </div>
     );
}
 
export default Invoice;