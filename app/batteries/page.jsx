import BatteriesPage from "@/components/batteries/BatteriesPage";
import { META_PATHS } from "@/configs/routes.config";
import { getData } from "@/utils/api-function-utils";
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
  // console.log(props.filter.selectTipState.split(","), "dddddd");
  const filterFetchData = await getData("/web/get/filter");
  console.log(filterFetchData);
  const fetchState = props.filter.selectTipState?.split(",");
  if (fetchState && fetchState.length > 0 && fetchState[0] === "true") {
    const getFilterBatteries = await getData(
      `/web/attach/car/battery/${fetchState[1]}`,
    );
    return (
      <BatteriesPage
        data={getFilterBatteries}
        searchParams={props.filter}
        filterData={filterFetchData}
      />
    );
  } else {
    const fetchData = await getData(
      "/web/batteries",
      // + "?order_by=" + props.filter,
    );
    console.log(fetchData, "asdfsadfsadfsdfsdfsdfsdf");
    return (
      <BatteriesPage
        data={fetchData}
        searchParams={props.filter}
        filterData={filterFetchData}
      />
    );
  }
};

const Batteries = (props) => {
  console.log(props, "aaaaaa");
  return (
    <Suspense fallback={<div>....Loading</div>}>
      <BatteriesData filter={props.searchParams} />;
    </Suspense>
  );
};

export default Batteries;
