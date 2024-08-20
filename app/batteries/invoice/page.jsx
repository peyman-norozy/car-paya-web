'use client'
import Image from "next/image";

const InvoicePage = () => {
    return ( 
        <div className="w-full flex flex-col lg:flex-row lg:rounded-2xl text-[#FEFEFE] mt-8 lg:mt-32 mb-6 overflow-hidden gap-4 lg:gap-px">
            <div className="w-full lg:max-w-[400px] max-w-[600px] flex flex-col gap-px m-auto lg:m-0">
                <h1 className="h-12 hidden lg:flex items-center justify-center bg-[#47505D] font-bold">مشخصات</h1>
                <div className="flex flex-col gap-2 bg-[#707070] h-[calc(100%-49px)] rounded-2xl lg:rounded-none overflow-hidden m-4 lg:m-0">
                    <Image src={"/assets/images/car6.png"} width={270} height={190} className="mx-auto"/>
                    <div className="px-6 flex flex-col gap-4 bg-[#47505D] py-4 h-full">
                        <div className="font-normal">
                            <span className="font-semibold ml-1">نوع وسیله نقلیه:</span>
                            <span className="font-normal">خودرو</span>
                        </div>
                        <div className="font-normal">
                            <span className="font-semibold ml-1">نام وسیله نقلیه:</span>
                            <span className="font-normal">بی ام وه ام 5 پترول 2022</span>
                        </div>
                        <div className="font-normal">
                            <span className="font-semibold ml-1">نام مشتری:</span>
                            <span className="font-normal">حسام نژاد</span>
                        </div>
                        <div className="font-normal">
                            <span className="font-semibold ml-1">شماره موبایل:</span>
                            <span className="font-normal">09123622427</span>
                        </div>
                        <div className="font-normal">
                            <span className="font-semibold ml-1">آدرس:</span>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
                        </div>
                        <div className="font-normal">
                            <span className="font-semibold ml-1">کد فاکتور:</span>
                            <span className="font-normal">02165804056</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex flex-col gap-px w-full">
                <div className="flex flex-row gap-px w-full font-bold">
                    <div className="h-12 flex items-center justify-center bg-[#47505D] flex-1">ردیف</div>
                    <div className="h-12 flex items-center justify-center bg-[#47505D] flex-[3_3_0%]">کد کالا و خدمات</div>
                    <div className="h-12 flex items-center justify-center bg-[#47505D] flex-[3_3_0%]">شرح خدمات</div>
                    <div className="h-12 flex items-center justify-center bg-[#47505D] flex-[3_3_0%]">عنوان</div>
                    <div className="h-12 flex items-center justify-center bg-[#47505D] flex-1">واحد</div>
                    <div className="h-12 flex items-center justify-center bg-[#47505D] flex-1">تعداد</div>
                    <div className="h-12 flex items-center justify-center bg-[#47505D] flex-[3_3_0%]">قیمت واحد</div>
                    <div className="h-12 flex items-center justify-center bg-[#47505D] flex-[3_3_0%]">مبلغ</div>
                </div>
                <div className="flex flex-row gap-px w-full font-normal">
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1">1</div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]">8964521</div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]">تعویض روغن</div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]">روغن موتور اسپیدی</div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1">عدد</div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1">1</div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]">1،500،000</div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]">1،500،000</div>
                </div>
                <div className="flex flex-row gap-px w-full font-normal">
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1">2</div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]">8964521</div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]">تعویض روغن</div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]">روغن موتور اسپیدی</div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1">عدد</div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1">1</div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]">1،500،000</div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]">1،500،000</div>
                </div>
                <div className="flex flex-row gap-px w-full font-normal">
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1">3</div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]">8964521</div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]">تعویض روغن</div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]">روغن موتور اسپیدی</div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1">عدد</div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1">1</div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]">1،500،000</div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]">1،500،000</div>
                </div>
                <div className="flex flex-row gap-px w-full font-normal">
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1">4</div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1"></div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1"></div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
                </div>
                <div className="flex flex-row gap-px w-full font-normal">
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1">5</div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1"></div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1"></div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
                </div>
                <div className="flex flex-row gap-px w-full font-normal">
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1">6</div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1"></div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1"></div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
                </div>
                <div className="flex flex-row gap-px w-full font-normal">
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1">8</div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1"></div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1"></div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
                </div>
                <div className="flex flex-row gap-px w-full font-normal">
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1">9</div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1"></div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1"></div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
                    <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
                </div>
                <div className="flex flex-row gap-px w-full font-bold">
                    <div className="h-12 flex items-center justify-center bg-[#383838] flex-[15_15_0%]">مبلغ کل</div>
                    <div className="h-12 flex items-center justify-center bg-[#383838] flex-[3_3_0%]">2,000,000 تومان</div>
                </div>
                <div className="flex flex-row gap-px w-full font-bold">
                    <div className="h-12 flex items-center justify-center bg-[#383838] flex-[15_15_0%]">تخفیف</div>
                    <div className="h-12 flex items-center justify-center bg-[#383838] flex-[3_3_0%]">2,000,000 تومان</div>
                </div>
                <div className="flex flex-row gap-px w-full font-bold">
                    <div className="h-12 flex items-center justify-center bg-[#383838] flex-[15_15_0%]">مبلغ نهایی</div>
                    <div className="h-12 flex items-center justify-center bg-[#383838] flex-[3_3_0%]">2,000,000 تومان</div>
                </div>
            </div>
            <div className="flex lg:hidden flex-col gap-4 m-auto w-full max-w-[600px]">
                <div className="grid grid-cols-2 p-4 bg-[#383838A3] rounded-2xl gap-4 m-4">
                    <div className="flex gap-1 items-center col-span-full">
                        <span className="font-bold">عنوان:</span>
                        <span className="text-sm">پولیش</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <span className="font-bold">کد کالا و خدمات:</span>
                        <span className="text-sm">8964521</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <span className="font-bold">شرح خدمات:</span>
                        <span className="text-sm">تعویض روغن</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <span className="font-bold">تعداد:</span>
                        <span className="text-sm">1</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <span className="font-bold">واحد:</span>
                        <span className="text-sm">لیتر</span>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <span className="font-bold">قیمت کل:</span>
                        <span className="text-sm">2,000,000 تومان</span>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <span className="font-bold">قیمت واحد:</span>
                        <span className="text-sm">2,000,000 تومان</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 p-4 bg-[#383838A3] rounded-2xl gap-4 m-4">
                    <div className="flex gap-1 items-center col-span-full">
                        <span className="font-bold">عنوان:</span>
                        <span className="text-sm">پولیش</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <span className="font-bold">کد کالا و خدمات:</span>
                        <span className="text-sm">8964521</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <span className="font-bold">شرح خدمات:</span>
                        <span className="text-sm">تعویض روغن</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <span className="font-bold">تعداد:</span>
                        <span className="text-sm">1</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <span className="font-bold">واحد:</span>
                        <span className="text-sm">لیتر</span>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <span className="font-bold">قیمت کل:</span>
                        <span className="text-sm">2,000,000 تومان</span>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <span className="font-bold">قیمت واحد:</span>
                        <span className="text-sm">2,000,000 تومان</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 p-4 bg-[#383838A3] rounded-2xl gap-4 m-4">
                    <div className="flex gap-1 items-center col-span-full">
                        <span className="font-bold">عنوان:</span>
                        <span className="text-sm">پولیش</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <span className="font-bold">کد کالا و خدمات:</span>
                        <span className="text-sm">8964521</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <span className="font-bold">شرح خدمات:</span>
                        <span className="text-sm">تعویض روغن</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <span className="font-bold">تعداد:</span>
                        <span className="text-sm">1</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <span className="font-bold">واحد:</span>
                        <span className="text-sm">لیتر</span>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <span className="font-bold">قیمت کل:</span>
                        <span className="text-sm">2,000,000 تومان</span>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <span className="font-bold">قیمت واحد:</span>
                        <span className="text-sm">2,000,000 تومان</span>
                    </div>
                </div>
                <div className="flex flex-col p-4 bg-[#383838] rounded-2xl gap-4 m-4">
                    <div className="flex items-center justify-between">
                        <span className="font-bold">مبلغ کل</span>
                        <span className="text-sm">2,000,000 تومان</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="font-bold">تخفیف</span>
                        <span className="text-sm">1,000,000 تومان</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="font-bold">مبلغ نهایی</span>
                        <span className="text-sm">1,000,000 تومان</span>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default InvoicePage;