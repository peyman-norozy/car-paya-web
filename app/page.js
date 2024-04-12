import {Fragment, Suspense} from "react";
import MainBanner from "@/components/MainBanner";
import SpecialOffersSlider from "@/components/SpecialOffersSlider";
import HowWorks from "@/components/HowWorks";
import ArticleSlider from "@/components/ArticleSlider";
import MainBannerCard from "@/components/cards/MainBannerCard";
import {getData} from "@/utils/api-function-utils";
import {API_PATHS} from "@/configs/routes.config";


const SpecialOffersSliderData = async () => {
    const CarProductsMockUpData = [
        {
            discount: "تخفیف ۲۰٪",
            imgSrc: "/assets/images/hiclipart.com (2).png",
            alt: "oil",
            title: "روغن موتور بوش مدل لاکچری SN حجم ۴ لیتر",
            newPrice: "",
            oldPrice: "",
        },
        {
            discount: "تخفیف ۲۰٪",
            imgSrc: "/assets/images/hiclipart.com (3).png",
            alt: "oil",
            title: "روغن موتور بوش مدل لاکچری SN حجم ۴ لیتر",
            newPrice: "",
            oldPrice: "",
        },
        {
            discount: "تخفیف ۲۰٪",
            imgSrc: "/assets/images/hiclipart.com.png",
            alt: "oil",
            title: "فیلتر هوا جک 3s 65746",
            newPrice: "",
            oldPrice: "",
        },
        {
            discount: "تخفیف ۲۰٪",
            imgSrc: "/assets/images/hiclipart.com (1).png",
            alt: "oil",
            title: "فیلتر هوا جک 3s 65746",
            newPrice: "",
            oldPrice: "",
        },
        {
            discount: "تخفیف ۲۰٪",
            imgSrc: "/assets/images/hiclipart.com (1).png",
            alt: "oil",
            title: "فیلتر هوا جک 3s 65746",
            newPrice: "",
            oldPrice: "",
        },
        {
            discount: "تخفیف ۲۰٪",
            imgSrc: "/assets/images/hiclipart.com (1).png",
            alt: "oil",
            title: "فیلتر هوا جک 3s 65746",
            newPrice: "",
            oldPrice: "",
        },
        {
            discount: "تخفیف ۲۰٪",
            imgSrc: "/assets/images/hiclipart.com (1).png",
            alt: "oil",
            title: "فیلتر هوا جک 3s 65746",
            newPrice: "",
            oldPrice: "",
        },
    ];
    return <SpecialOffersSlider data={CarProductsMockUpData} />;
};

const HowWorksData = async () => {
    const HowWorksMockUpData = [
        {
            title: "انتخاب وسیله نقلیه",
            description:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. ",
            img: "/assets/icons/Perfect-Car-Service.png",
        },
        {
            title: "انتخاب خدمات مورد نیاز",
            description:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. ",
            img: "/assets/icons/Doorstep-Pick-up.png",
        },
        {
            title: "انتخاب مکان دریافت خدمات",
            description:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. ",
            img: "/assets/icons/service-real-time.png",
        },
        {
            title: "انتخاب زمان دریافت خدمات",
            description:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. ",
            img: "/assets/icons/Doorstep-Pick-up.png",
        },
        {
            title: "دریافت خدمات",
            description:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. ",
            img: "/assets/icons/Earn-While-We-Service.png",
        },
    ];
    return <HowWorks data={HowWorksMockUpData} />;
};

const ArticleSliderData = async () => {
    const ArticleSliderFetchData = await getData(`/web${API_PATHS.MAGSINDEX}`)
    return <ArticleSlider data={ArticleSliderFetchData} />;
};

export default function Home() {
    const MainBannerData = [
        {
            title: "کارشناسی خودرو",
            iconSrc: "/assets/icons/Car-Inspection.png",
            href: "/vehicle-verification",
            id:"vehicleVerification"
        },
        {
            title: "بیمه",
            iconSrc: "/assets/icons/Group.png",
            href: "#",
            id:"insurance"
        },
        {
            title: "شناسنامه و سوابق خودرو",
            iconSrc: "/assets/icons/8.png",
            href: "/profile/my-vehicle/my-car",
            id:"myVehicleMyCar"
        },
        {
            title: "سرویس دوره ای",
            iconSrc: "/assets/icons/1.png",
            href: "/periodic-service",
            id:"periodicService"
        },
        {
            title: "فروشگاه باتری",
            iconSrc: "/assets/icons/battery-v3 1.png",
            href: "/batteries",
            id:"batteries"
        },
        {
            title: "فیلتر روغن(لوازم یدکی)",
            iconSrc: "/assets/icons/ClutchBumpers.png",
            href: "/products",
            id:"products"
        },
    ];
    return (
      <Fragment>
          <MainBanner>
              {MainBannerData.map((item, index) => (
                  <MainBannerCard key={item.title + "-" + index} data={item}/>
              ))}
          </MainBanner>
          <div>
              <Suspense fallback={<div>....Loading</div>}>
                  <SpecialOffersSliderData/>
              </Suspense>
          </div>
          <div>
              <Suspense fallback={<div>....Loading</div>}>
                  <HowWorksData/>
              </Suspense>
          </div>
          <div>
              <Suspense fallback={<div>....Loading</div>}>
                  <ArticleSliderData/>
              </Suspense>
          </div>

      </Fragment>  );
}
