import HomePageMainSlider from "@/components/HomePage/HomePageMainSlider";
import HomePageParallaxSlider from "@/components/HomePage/HomePageParallaxSlider";
import HomePageArticleSlider from "@/components/HomePage/HomePageArticleSlider";
import CarSelectComponent from "@/components/public/CarSelectComponent";
import MainPageServices from "@/components/HomePage/MainPageServices";
import { getData } from "@/utils/api-function-utils";
import { API_PATHS } from "@/configs/routes.config";

const HomePage = async () => {
    const data = await getData(`/web${API_PATHS.MAGSINDEX}`)
    return ( 
        <div className="flex flex-col gap-4 lg:gap-9 w-full max-w-[1676px] md:p-12 m-auto">
            <CarSelectComponent/>
            <HomePageMainSlider/>
            <div className="flex flex-col gap-4 lg:gap-9 w-full lg:w-[calc(100%-424px)] self-end">
                <MainPageServices/>
                <HomePageParallaxSlider/>
                <span className="text-2xl font-bold text-[#383838] text-center">مقالات</span>
                <HomePageArticleSlider data={data}/>
            </div>
            
        </div>
    );
}

export default HomePage;