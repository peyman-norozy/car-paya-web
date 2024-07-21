'use client'
import HomePageMainSlider from "@/components/HomePage/HomePageMainSlider";

const HomePage = () => {
    return ( 
        <div className="flex flex-col gap-9 w-full max-w-[1676px] p-12 m-auto">
            <div className="relative">
                <HomePageMainSlider/>
                <div className="w-1/3 absolute bg-[#5D697A52] backdrop-blur-[16px] h-fit left-8 top-8 flex flex-col z-[2] gap-6 p-4 rounded-lg">
                    <span className="text-[#FEFEFE] font-bold">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</span>
                    <button className="bg-[#F66B34] text-[#FEFEFE] px-4 py-[8px] w-fit rounded-[6px] self-end text-xs">مشاهده بیشتر</button>
                </div>
            </div>
            <div className="flex gap-6">
                <div className="flex flex-col gap-9">
                    <div className=" "></div>
                </div>
            </div>
        </div>
    );
}
 
export default HomePage;