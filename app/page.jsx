import HomePageArticleSlider from "@/components/HomePage/HomePageArticleSlider";
import HomePageMainSlider from "@/components/HomePage/HomePageMainSlider";
import HomePageParallaxSlider from "@/components/HomePage/HomePageParallaxSlider";
import MainPageServices from "@/components/HomePage/MainPageServices";
import { API_PATHS } from "@/configs/routes.config";
import { getData } from "@/utils/api-function-utils";
import { ToastContainer } from "react-toastify";

const HomePage = async () => {
  const data = await getData(`/web${API_PATHS.MAGSINDEX}`);
  return (
    <div className="flex flex-col gap-4 lg:gap-9 w-full max-w-[1772px] m-auto mt-32">
      <HomePageMainSlider />
      <div className="flex flex-col gap-4 lg:gap-9 w-full lg:w-[calc(100%-424px)] self-end">
        <MainPageServices />
        <HomePageParallaxSlider />
        <span className="text-2xl font-bold text-[#383838] text-center">
          مقالات
        </span>
        <HomePageArticleSlider data={data} />
      </div>
      <ToastContainer rtl={true} />
    </div>
  );
};

export default HomePage;
