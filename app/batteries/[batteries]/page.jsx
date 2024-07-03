import BatteriesPage from "@/components/batteries/BatteriesPage";
import { META_PATHS } from "@/configs/routes.config";
import { getData } from "@/utils/api-function-utils";
import ProductShow from "@/components/ProductShow/ProductShow";
import { Suspense } from "react";
export const metadata = {
  title: " فروشگاه باطری",
  description:
    "با کیفیت ترین باطری ها با ضمانت تعویض کارچک همراه با نصب و دریافت باطری فرسوده",
  metadataBase: new URL(META_PATHS.BASEURL + META_PATHS.BATTERIES),
  alternates: {
    canonical: META_PATHS.BASEURL,
  },
  keywords: "باطری،خودرو",
  robots: "index,follow",
  openGraph: {
    title: " فروشگاه باطری",
    description:
      "با کیفیت ترین باطری ها با ضمانت تعویض کارچک همراه با نصب و دریافت باطری فرسوده",
    locale: "fa-ir",
    type: "website",
    url: META_PATHS.BASEURL,
    images: [
      {
        url: `${META_PATHS.BASEURL}/_next/static/media/battery-product.abcd07be.svg`,
        width: 32, // Specify the width of the image
        height: 32, // Specify the height of the image
      },
    ],
  },
};

const BatteriesData = async (props) => {
  const fetchData = await getData(
    "/web/battery" + "/" + props.params,
    // + "?order_by=" + props.filter,
  );
  return <ProductShow data={fetchData} />;
};

const Batteries = (props) => {
  return (
    <Suspense fallback={<div>....Loading</div>}>
      <BatteriesData
        filter={props.searchParams.order_by}
        params={props.params.batteries}
      />
    </Suspense>
  );
};

export default Batteries;
