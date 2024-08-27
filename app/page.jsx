import HomePageArticles from "@/components/HomePage/HomePageArticles";
import HomePageArticleSlider from "@/components/HomePage/HomePageArticleSlider";
import HomePageMainSlider from "@/components/HomePage/HomePageMainSlider";
import HomePageParallaxSlider from "@/components/HomePage/HomePageParallaxSlider";
import HomePageServiceIntroduction from "@/components/HomePage/HomePageServiceIntroduction";
import MainPageServices from "@/components/HomePage/MainPageServices";
import { API_PATHS } from "@/configs/routes.config";
import { getData } from "@/utils/api-function-utils";
import { ToastContainer } from "react-toastify";

const HomePage = async () => {
  const data = await getData(`/web/mags`);
  return (
    <div className="flex flex-col gap-4 lg:gap-9 w-full max-w-[1772px] m-auto lg:mt-32">
      <HomePageMainSlider />
      <div className="flex flex-col gap-4 lg:gap-9 w-full lg:w-[calc(100%-424px)] self-end">
        <MainPageServices />
        {/* <HomePageParallaxSlider /> */}
        <HomePageServiceIntroduction/>
        <HomePageArticleSlider data={data} />
        <HomePageArticles data={data}/>
      </div>
      <ToastContainer rtl={true} />
    </div>
  );
};

export default HomePage;
