const peyment = () => {
    return ( 
        <div className="flex flex-col lg:flex-row max-w-[1676px] w-full m-auto px-4 mt-6 lg:mt-28 mb-6 lg:mb-10 gap-6">
            <div className="bg-white sm:shadow-[0_0_8px_0_rgba(151,151,151,0.25)] flex flex-col w-full lg:w-[calc(100%-340px)] rounded-2xl sm:p-6 gap-4 sm:gap-8">
                <div className="overflow-x-scroll shadow-[0_0_8px_0_rgba(151,151,151,0.25)] rounded-lg">
                    <div className="flex items-center p-4 gap-2">
                        <div className="flex items-center text-[#354597] gap-1">
                            <i className="text-2xl xl:text-[32px] cc-buy"/>
                            <span className="text-base xl:text-xl w-max">سبد خرید</span>
                        </div>
                        <hr className="border-0 border-t-[2px] border-dashed w-full border-[#354597]"/>
                        <div className="flex items-center text-[#354597] gap-1">
                            <i className="text-2xl xl:text-[32px] cc-location"/>
                            <span className="text-base xl:text-xl w-max">آدرس تحویل</span>
                        </div>
                        <hr className="border-0 border-t-[2px] border-dashed w-full border-[#354597]"/>
                        <div className="flex items-center text-[#354597] gap-1">
                            <i className="text-2xl xl:text-[32px] cc-timer"/>
                            <span className="text-base xl:text-xl w-max">زمان ارسال</span>
                        </div>
                        <hr className="border-0 border-t-[2px] border-dashed w-full border-[#354597]"/>
                        <div className="flex items-center text-[#B0B0B0] gap-1">
                            <i className="text-2xl xl:text-[32px] cc-wallet"/>
                            <span className="text-base xl:text-xl w-max">پرداخت</span>
                        </div>
                    </div>
                </div>
               <div className="flex flex-col gap-6">
                    <div className="border-b border-[#6878CA] py-1">
                        <span className="text-18 font-medium">روش پرداخت</span>
                    </div>
                <div className="shadow-[0_0_8px_0_rgba(151,151,151,0.25)] rounded-lg p-2 sm:p-4 flex gap-2 items-center">
                    <i className="cc-wallet text-2xl text-[#354597]"/>
                    <div className="flex flex-col gap-1">
                        <span className="text-[#717171] font-medium">پرداخت اینترنتی</span>
                        <span className="text-xs text-[#717171]">پرداخت آنلاین با تمامی کارت‌های بانکی</span>
                    </div>
                </div>
                <div className="shadow-[0_0_8px_0_rgba(151,151,151,0.25)] flex flex-col rounded-lg p-2 sm:p-4 gap-4">
                    <span className="text-base sm:text-18 font-medium text-[#354597]">خلاصه سفارش</span>
                    <div className="flex  items-center gap-2 sm:gap-4">
                        <div className="bg-RED_200 rounded-lg size-14 sm:size-20"></div>
                        <div className="xl:flex grid grid-cols-2 gap-4 items-center justify-between w-[calc(100%-68px)] sm:w-[calc(100%-96px)]">
                            <span className="font-medium text-12 md:text-base">روغن موتور خودرو بهران </span>
                            <span className="font-bold text-[#354597] text-12 md:text-xl">۴۳۰,۰۰۰ تومان</span>
                            <span className="font-medium text-12 md:text-base">سه شنبه ۵ تیر -بازه ۱۸-۲۱</span>
                            <span className="font-medium text-12 md:text-base">ارسال عادی</span>
                        </div>
                    </div>
                </div>
               </div>
            </div>
            <div className="shadow-[0_0_10px_0_rgba(128,117,248,0.3)] px-6 py-4 gap-5 flex-col items-center h-fit rounded-lg min-w-[320px]">
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
                <button className="w-full p-[10px] text-[#FEFEFE] bg-[#354597] rounded-[8px] text-14">تایید و تکمیل سفارش</button>
            </div>
        </div>
     );
}
 
export default peyment;