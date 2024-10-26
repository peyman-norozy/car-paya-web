import HomePageArticles from "@/components/HomePage/HomePageArticles";
import HomePageArticleSlider from "@/components/HomePage/HomePageArticleSlider";
import HomePageMainSlider from "@/components/HomePage/HomePageMainSlider";
import HomePageParallaxSlider from "@/components/HomePage/HomePageParallaxSlider";
import HomePageServiceIntroduction from "@/components/HomePage/HomePageServiceIntroduction";
import MainPageServices from "@/components/HomePage/MainPageServices";
import LoginModal from "@/components/login/LoginModal";
import { API_PATHS } from "@/configs/routes.config";
import { getData, getDataWithRevalidate } from "@/utils/api-function-utils";
import { ToastContainer } from "react-toastify";
import HomeInspection from "@/components/HomeInspection";
import Counseling from "@/components/Counseling";
import HomPeriodicService from "@/components/HomPeriodicService";

const HomePage = async () => {
  const data = await getDataWithRevalidate(
    "https://carpaya.com/wp-json/api/v1/random-posts/8",
  );

  return (
    <div className="flex flex-col gap-4 lg:gap-[48px] w-full max-w-[1772px] m-auto lg:mt-6 relative">
      <HomePageMainSlider />
      <div className="flex flex-col gap-4 lg:gap-9 w-full self-end">
        <MainPageServices />
        <HomeInspection />
        <Counseling />
        <HomPeriodicService />
        {/* <HomePageParallaxSlider /> */}
        <HomePageServiceIntroduction />
        <HomePageArticleSlider data={data} />
        <HomePageArticles data={data} />
      </div>
      <ToastContainer rtl={true} />
    </div>
  );
};

export default HomePage;
