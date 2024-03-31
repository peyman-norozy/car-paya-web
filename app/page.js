import MainBanner from "@/components/mainBanner";
import SpecialOffersSlider from "@/components/SpecialOffersSlider";
import HowWorks from "@/components/HowWorks";
import ArticleSlider from "@/components/ArticleSlider";

export default function Home() {
  return (
      <div>
        <MainBanner />
        <SpecialOffersSlider />
        <HowWorks />
        <ArticleSlider />
      </div>  );
}
