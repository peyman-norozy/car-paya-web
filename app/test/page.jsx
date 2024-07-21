'use client'
import HomePageMainSlider from "@/components/HomePage/HomePageMainSlider";
import Image from "next/image";
import bmw from "@/public/assets/images/bmw.png"
const HomePage = () => {
    return ( 
        <div className="flex flex-col gap-9 w-full max-w-[1676px] p-12 m-auto relative">
            <div className="relative">
                <HomePageMainSlider/>
                <div className="w-1/3 absolute bg-[#5D697A52] backdrop-blur-[16px] h-fit left-8 top-8 flex flex-col z-[2] gap-6 p-4 rounded-lg">
                    <span className="text-[#FEFEFE] font-bold">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</span>
                    <button className="bg-[#F66B34] text-[rgb(254,254,254)] px-4 py-[8px] w-fit rounded-[6px] self-end text-xs">مشاهده بیشتر</button>
                </div>
            </div>
            <div className="flex gap-6 justify-end">
                <div className="bg-[#383838A3] h-[570px] rounded-2xl w-[360px] fixed top-[123px] right-[calc(50%-790px)] z-[2] backdrop-blur-[16px] py-4 px-4 flex flex-col gap-4">
                    <span className="text-[#FEFEFE] text-20 font-bold text-center">ثبت وسیله نقلیه</span>
                    <div className="rounded-lg bg-[#F66B3414] flex justify-between p-1">
                        <button className="bg-[#F66B34] rounded-[4px] w-[100px] h-10 flex justify-center items-center text-[#FEFEFE] font-medium text-14">خودرو</button>
                        <div className="my-2 w-[1px] bg-[#F66B34]"></div>
                        <button className="rounded-[4px] w-[100px] h-10 flex justify-center items-center text-[#F66B34] font-medium text-14">موتورسیکلت</button>
                        <div className="my-2 w-[1px] bg-[#F66B34]"></div>
                        <button className="rounded-[4px] w-[100px] h-10 flex justify-center items-center text-[#F66B34] font-medium text-14">وسیله سنگین</button>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-center font-bold text-[#FEFEFE]">انتخاب برند</span>
                        <div className="flex gap-2 py-1 px-4 text-[#B0B0B0] bg-[#B0B0B01F] rounded-lg">
                            <i className="cc-search text-xl"/>
                            <input className="outline-none text-14 bg-[#ffffff01]" placeholder="جستجو..."/>
                        </div>
                        <div className="h-[336px] overflow-y-scroll">
                            <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                                <div className="flex flex-col items-center gap-2">
                                    <Image src={bmw} width={64} height={64}/>
                                    <span className="text-white font-bold">بی ام وه</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <Image src={bmw} width={64} height={64}/>
                                    <span className="text-white font-bold">بی ام وه</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <Image src={bmw} width={64} height={64}/>
                                    <span className="text-white font-bold">بی ام وه</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <Image src={bmw} width={64} height={64}/>
                                    <span className="text-white font-bold">بی ام وه</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <Image src={bmw} width={64} height={64}/>
                                    <span className="text-white font-bold">بی ام وه</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <Image src={bmw} width={64} height={64}/>
                                    <span className="text-white font-bold">بی ام وه</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <Image src={bmw} width={64} height={64}/>
                                    <span className="text-white font-bold">بی ام وه</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <Image src={bmw} width={64} height={64}/>
                                    <span className="text-white font-bold">بی ام وه</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <Image src={bmw} width={64} height={64}/>
                                    <span className="text-white font-bold">بی ام وه</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-9 w-[calc(100%-384px)] overflow-y-scroll">
                    <div className="grid grid-cols-4 gap-6 max-h-[245px]">
                        <div className="w-full p-4 flex flex-col bg-[#E7E7E7] items-center gap-3 rounded-lg">
                            <div className="size-10 bg-[#0E0E0E] rounded-md"></div>
                            <span className="text-[#0E0E0E]">کارشناسی</span>
                        </div>
                        <div className="w-full p-4 flex flex-col bg-[#E7E7E7] items-center gap-3 rounded-lg">
                            <div className="size-10 bg-[#0E0E0E] rounded-md"></div>
                            <span className="text-[#0E0E0E]">کارشناسی</span>
                        </div><div className="w-full p-4 flex flex-col bg-[#E7E7E7] items-center gap-3 rounded-lg">
                            <div className="size-10 bg-[#0E0E0E] rounded-md"></div>
                            <span className="text-[#0E0E0E]">کارشناسی</span>
                        </div><div className="w-full p-4 flex flex-col bg-[#E7E7E7] items-center gap-3 rounded-lg">
                            <div className="size-10 bg-[#0E0E0E] rounded-md"></div>
                            <span className="text-[#0E0E0E]">کارشناسی</span>
                        </div><div className="w-full p-4 flex flex-col bg-[#E7E7E7] items-center gap-3 rounded-lg">
                            <div className="size-10 bg-[#0E0E0E] rounded-md"></div>
                            <span className="text-[#0E0E0E]">کارشناسی</span>
                        </div><div className="w-full p-4 flex flex-col bg-[#E7E7E7] items-center gap-3 rounded-lg">
                            <div className="size-10 bg-[#0E0E0E] rounded-md"></div>
                            <span className="text-[#0E0E0E]">کارشناسی</span>
                        </div><div className="w-full p-4 flex flex-col bg-[#E7E7E7] items-center gap-3 rounded-lg">
                            <div className="size-10 bg-[#0E0E0E] rounded-md"></div>
                            <span className="text-[#0E0E0E]">کارشناسی</span>
                        </div><div className="w-full p-4 flex flex-col bg-[#E7E7E7] items-center gap-3 rounded-lg">
                            <div className="size-10 bg-[#0E0E0E] rounded-md"></div>
                            <span className="text-[#0E0E0E]">کارشناسی</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HomePage;