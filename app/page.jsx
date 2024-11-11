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
import Benefits from "@/components/‌‌Benefits";
import HomeBatteries from "@/components/HomeBatteries";
import PriceEstimate from "@/components/PriceEstimate";
import QuestionMark from "@/components/QuestionMark";

export const metadata = {
  title: "خدمات خودرویی | کارپایا",
  description:
    "کارپایا مرجع تخصصی سرویس دوره ای و شناسنامه خودرو و خدمات خودرو و موتورسیکلت مانند کارشناسی،باتری، گزارش قیمت و ... .",
  metadataBase: new URL("https://carpaya.com"),
  openGraph: {
    url: "https://carpaya.com",
    title: "خدمات خودرویی | کارپایا",
    description:
      "کارپایا مرجع تخصصی سرویس دوره ای و شناسنامه خودرو و خدمات خودرو و موتورسیکلت مانند کارشناسی،باتری، گزارش قیمت و ... .",
    images: [
      {
        url: "/assets/icons/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Og Image Alt",
        type: "image/png",
      },
      {
        url: "/assets/icons/android-chrome-192x192.png",
        width: 192,
        height: 192,
        alt: "Og Image Alt Second",
        type: "image/png",
      },
      { url: "/assets/icons/apple-touch-icon.png" },
      {
        url: "/assets/icons/favicon-32x32.png",
        width: 32,
        height: 32,
        type: "image/png",
      },
      {
        url: "/assets/icons/favicon-16x16.png",
        width: 16,
        height: 16,
        type: "image/png",
      },
    ],
    siteName: "کارپایا",
    type: "website",
    locale: "fa_IR",
    updatedTime: "2024-11-04T21:03:28+00:00",
  },
  twitter: {
    cardType: "summary_large_image",
    title: "خدمات خودرویی | کارپایا",
    description:
      "کارپایا مرجع تخصصی سرویس دوره ای و شناسنامه خودرو و خدمات خودرو و موتورسیکلت مانند کارشناسی،باتری، گزارش قیمت و ... .",
  },
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxVideoPreview: -1,
    maxImagePreview: "large",
  },
};

const HomePage = async () => {
  const data = await getDataWithRevalidate(
    "https://carpaya.com/blog/wp-json/api/v1/random-posts/8"
  );

  return (
    <div className="flex flex-col gap-4 lg:gap-[48px] w-full max-w-[1772px] m-auto lg:mt-6 relative">
      <HomePageMainSlider />
      <div className="flex flex-col gap-6 lg:gap-9 w-full self-end">
        <MainPageServices />
        <HomeInspection />
        <Counseling />
        <HomPeriodicService />
        <Benefits />
        <PriceEstimate />
        <HomeBatteries />
        <HomePageArticles data={data} />
        <QuestionMark />
        {/* <HomePageParallaxSlider /> */}
        {/*<HomePageServiceIntroduction />*/}
        <HomePageArticleSlider data={data} />
      </div>
      <ToastContainer rtl={true} />
    </div>
  );
};

export default HomePage;
