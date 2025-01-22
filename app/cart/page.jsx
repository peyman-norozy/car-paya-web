const CartPage = () => {
    return ( 
        <div className="flex flex-col lg:flex-row max-w-[1676px] w-full m-auto px-4 mt-6 lg:mt-28 mb-6 lg:mb-10 gap-6">
            <div className="bg-white sm:shadow-[0_0_8px_0_rgba(151,151,151,0.25)] flex flex-col w-full lg:w-[calc(100%-340px)] rounded-2xl sm:p-6 gap-4 sm:gap-8">
                <div className="overflow-x-scroll shadow-[0_0_8px_0_rgba(151,151,151,0.25)] rounded-lg">
                    <div className="flex items-center  p-4 gap-2">
                        <div className="flex items-center text-[#354597] gap-1">
                            <i className="text-2xl xl:text-[32px] cc-buy"/>
                            <span className="text-base xl:text-xl w-max">سبد خرید</span>
                        </div>
                        <hr className="border-0 border-t-[2px] border-dashed w-full border-[#354597]"/>
                        <div className="flex items-center text-[#B0B0B0] gap-1">
                            <i className="text-2xl xl:text-[32px] cc-location"/>
                            <span className="text-base xl:text-xl w-max">آدرس تحویل</span>
                        </div>
                        <hr className="border-0 border-t-[2px] border-dashed w-full border-[#B0B0B0]"/>
                        <div className="flex items-center text-[#B0B0B0] gap-1">
                            <i className="text-2xl xl:text-[32px] cc-timer"/>
                            <span className="text-base xl:text-xl w-max">زمان ارسال</span>
                        </div>
                        <hr className="border-0 border-t-[2px] border-dashed w-full border-[#B0B0B0]"/>
                        <div className="flex items-center text-[#B0B0B0] gap-1">
                            <i className="text-2xl xl:text-[32px] cc-wallet"/>
                            <span className="text-base xl:text-xl w-max">پرداخت</span>
                        </div>
                    </div>
                </div>
                 <div className="w-full bg-white sm:bg-[#ECEEF880] flex flex-col sm:flex-row sm:gap-1 rounded-lg items-end sm:items-center shadow-[0_0_8px_0_rgba(162,162,162,0.25)]">
                    <i className="i-close-circle text-2xl pt-2 px-2 sm:pb-2"/>
                    <div className="w-full bg-white rounded-lg flex justify-between px-4 pb-4 sm:pt-4 relative flex-col min-[1350px]:flex-row gap-4">
                        <div className="flex gap-4 items-center">
                            <div className="bg-yellow-200 rounded-lg size-20"></div>
                            <span className="font-medium text-14 sm:text-base line-clamp-2">روغن موتور خودرو بهران مدل تکتاز 20W50 حجم 3.785 لیتر</span>
                        </div>
                        <div className="flex min-[1350px]:flex-row flex-row-reverse justify-between min-[1350px]:justify-start gap-10 items-center ">
                             <div className="flex gap-3 items-center text-[#0E0E0E]">
                                <p className="text-18 sm:text-3xl shadow-[0_0_8px_0_rgba(162,162,162,0.25)] px-2 rounded-md">+</p>
                                <input className="border-b-2 border-[#0E0E0E] outline-none w-6 sm:w-8 text-center text-base sm:text-lg font-medium" value={1}/>
                                <p className="text-18 sm:text-3xl shadow-[0_0_8px_0_rgba(162,162,162,0.25)] px-2 rounded-md">-</p>
                             </div>
                             <div className="flex flex-col gap-1 sm:gap-2 items-start">
                                 <span className="text-base sm:text-xl font-semibold text-[#354597]">۴۳۰,۰۰۰ تومان</span>
                                 <span className="text-[#A3A2A2] line-through font-medium min-[1350px]:absolute left-4 bottom-2 text-14 sm:text-base">۵۷۰،۰۰۰</span>
                            </div>
                        </div>
                    </div>
                 </div>
                 <div className="w-full bg-white sm:bg-[#ECEEF880] flex flex-col sm:flex-row sm:gap-1 rounded-lg items-end sm:items-center shadow-[0_0_8px_0_rgba(162,162,162,0.25)]">
                    <i className="i-close-circle text-2xl pt-2 px-2 sm:pb-2"/>
                    <div className="w-full bg-white rounded-lg flex justify-between px-4 pb-4 sm:pt-4 relative flex-col min-[1350px]:flex-row gap-4">
                        <div className="flex gap-4 items-center">
                            <div className="bg-yellow-200 rounded-lg size-20"></div>
                            <span className="font-medium text-14 sm:text-base line-clamp-2">روغن موتور خودرو بهران مدل تکتاز 20W50 حجم 3.785 لیتر</span>
                        </div>
                        <div className="flex min-[1350px]:flex-row flex-row-reverse justify-between min-[1350px]:justify-start gap-10 items-center ">
                             <div className="flex gap-3 items-center text-[#0E0E0E]">
                                <p className="text-18 sm:text-3xl shadow-[0_0_8px_0_rgba(162,162,162,0.25)] px-2 rounded-md">+</p>
                                <input className="border-b-2 border-[#0E0E0E] outline-none w-6 sm:w-8 text-center text-base sm:text-lg font-medium" value={1}/>
                                <p className="text-18 sm:text-3xl shadow-[0_0_8px_0_rgba(162,162,162,0.25)] px-2 rounded-md">-</p>
                             </div>
                             <div className="flex flex-col gap-1 sm:gap-2 items-start">
                                 <span className="text-base sm:text-xl font-semibold text-[#354597]">۴۳۰,۰۰۰ تومان</span>
                                 <span className="text-[#A3A2A2] line-through font-medium min-[1350px]:absolute left-4 bottom-2 text-14 sm:text-base">۵۷۰،۰۰۰</span>
                            </div>
                        </div>
                    </div>
                 </div> 
                 <div className="w-full bg-white sm:bg-[#ECEEF880] flex flex-col sm:flex-row sm:gap-1 rounded-lg items-end sm:items-center shadow-[0_0_8px_0_rgba(162,162,162,0.25)]">
                    <i className="i-close-circle text-2xl pt-2 px-2 sm:pb-2"/>
                    <div className="w-full bg-white rounded-lg flex justify-between px-4 pb-4 sm:pt-4 relative flex-col min-[1350px]:flex-row gap-4">
                        <div className="flex gap-4 items-center">
                            <div className="bg-yellow-200 rounded-lg size-20"></div>
                            <span className="font-medium text-14 sm:text-base line-clamp-2">روغن موتور خودرو بهران مدل تکتاز 20W50 حجم 3.785 لیتر</span>
                        </div>
                        <div className="flex min-[1350px]:flex-row flex-row-reverse justify-between min-[1350px]:justify-start gap-10 items-center ">
                             <div className="flex gap-3 items-center text-[#0E0E0E]">
                                <p className="text-18 sm:text-3xl shadow-[0_0_8px_0_rgba(162,162,162,0.25)] px-2 rounded-md">+</p>
                                <input className="border-b-2 border-[#0E0E0E] outline-none w-6 sm:w-8 text-center text-base sm:text-lg font-medium" value={1}/>
                                <p className="text-18 sm:text-3xl shadow-[0_0_8px_0_rgba(162,162,162,0.25)] px-2 rounded-md">-</p>
                             </div>
                             <div className="flex flex-col gap-1 sm:gap-2 items-start">
                                 <span className="text-base sm:text-xl font-semibold text-[#354597]">۴۳۰,۰۰۰ تومان</span>
                                 <span className="text-[#A3A2A2] line-through font-medium min-[1350px]:absolute left-4 bottom-2 text-14 sm:text-base">۵۷۰،۰۰۰</span>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
            <div className="shadow-[0_0_10px_0_rgba(128,117,248,0.3)] px-6 py-4 gap-5 flex-col items-center h-fit rounded-lg min-w-[320px] flex">
                <span className="text-2xl font-medium text-[#262626]">جمع کل سبد خرید</span>
                <div className="flex justify-between items-center w-full">
                    <span className="font-medium text-[#262626]">قیمت کالاها (3)</span>
                    <span className="font-medium text-[#888888]">۷۹۲/۰۰۰ تومان</span>
                </div>
                <hr className="text-[#E7E7E7] w-full"/>
                <div className="flex justify-between items-center w-full">
                    <span className="font-medium text-[#262626] text-18">جمع کل</span>
                    <span className="font-medium text-[#888888]">۷۹۲/۰۰۰ تومان</span>
                </div>
                <button className="w-full p-[10px] text-[#FEFEFE] bg-[#354597] rounded-[8px] text-14">انتخاب موقعیت</button>
            </div>
        </div>
     );
}
 
export default CartPage;