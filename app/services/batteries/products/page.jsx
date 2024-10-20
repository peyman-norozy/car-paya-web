import BatteriesPage from "@/components/batteries/BatteriesPage";
import { META_PATHS } from "@/configs/routes.config";
import { getData } from "@/utils/api-function-utils";
import { Suspense } from "react";
import { revalidatePath } from "next/cache";
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
  const fetchState = props.filter.selectTipState?.split(",")[1];
  console.log(props.filter.attribute_value);
  await revalidatePath("/services/batteries/products");
  const fetchData = await getData(
    "/web/batteries",
    // + "?order_by=" + props.filter,
    {
      amp: props.filter.amp,
      brand: props.filter.brand,
      tip_id: fetchState,
      per_page: 2,
      page: props.filter.page || 1,
      attribute_slug: props.filter.attribute_slug,
      attribute_value: props.filter.attribute_value,
    },
  );
  return <BatteriesPage data={fetchData} searchParams={props.filter} />;
};

const Batteries = (props) => {
  return (
    <Suspense fallback={<div>....Loading</div>}>
      <BatteriesData filter={props.searchParams} />
    </Suspense>
  );
};

export default Batteries;
