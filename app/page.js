import { Fragment, Suspense } from "react";
import MainBanner from "@/components/MainBanner";
import SpecialOffersSlider from "@/components/SpecialOffersSlider";
import HowWorks from "@/components/HowWorks";
import ArticleSlider from "@/components/ArticleSlider";
import MainBannerCard from "@/components/cards/MainBannerCard";
import { getData } from "@/utils/api-function-utils";
import { API_PATHS } from "@/configs/routes.config";
import {
  HowWorksMockUpData,
  CarProductsMockUpData,
  serviceData,
} from "@/staticData/data";
import PwaModal from "@/components/PwaModal";

const SpecialOffersSliderData = async () => {
  return <SpecialOffersSlider data={CarProductsMockUpData} />;
};

const HowWorksData = async () => {
  return <HowWorks data={HowWorksMockUpData} />;
};

const ArticleSliderData = async () => {
  const ArticleSliderFetchData = await getData(`/web${API_PATHS.MAGSINDEX}`);
  return <ArticleSlider data={ArticleSliderFetchData} />;
};

export default function Home() {
  return (
    <div className={"max-w-[1600px] m-auto"}>
      <MainBanner>
        {serviceData.map((item, index) => (
          <MainBannerCard
            key={item.title + "-" + index}
            data={item}
            index={index}
          />
        ))}
      </MainBanner>
      <div>
        <Suspense fallback={<div>....Loading</div>}>
          <SpecialOffersSliderData />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<div>....Loading</div>}>
          <HowWorksData />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<div>....Loading</div>}>
          <ArticleSliderData />
        </Suspense>
      </div>
      <PwaModal />
    </div>
  );
}
