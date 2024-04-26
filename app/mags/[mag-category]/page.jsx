import BreadCrumbMag from "@/components/mags/BreadCrumbMag";
import MagCategoryItems from "@/components/mags/MagCategoryItems";
import MagsCategorySection from "@/components/mags/MagsCategorySection";
import SearchMags from "@/components/mags/SearchMags";
import { API_PATHS, META_PATHS } from "@/configs/routes.config";
import { getData } from "@/utils/api-function-utils";
import React from "react";

export const metadata = {
  title: "مجلات",
  description:
    "مجلات کاربردی و مفید درباره نگهداری و بهبود وضعیت خودرو و افزایش اطلاعات در این موضوع",
  metadataBase: new URL(META_PATHS.BASEURL + META_PATHS.MAGS),
  alternates: {
    canonical: META_PATHS.BASEURL,
  },
  keywords: "محصولات",
  robots: "index,follow",
  openGraph: {
    title: "مجلات",
    description:
      "مجلات کاربردی و مفید درباره نگهداری و بهبود وضعیت خودرو و افزایش اطلاعات در این موضوع",
    locale: "fa-ir",
    type: "website",
    url: META_PATHS.BASEURL,
    images: [
      {
        url: `${META_PATHS.BASEURL}/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcluch-bumpers.fc3975bb.png&w=64&q=75`,
        width: 32, // Specify the width of the image
        height: 32, // Specify the height of the image
      },
    ],
  },
};

const MagCategoryData = async (props) => {
  const fetchCategoryData = await getData("/web" + API_PATHS.MAGCATEGORY);
  return <MagsCategorySection data={fetchCategoryData.data} />;
};

const MagBreadCrumbData = async (props) => {
  const fetchData = await getData("/web" + API_PATHS.MAGS + "/" + props.slug);
  return (
    <BreadCrumbMag
      data={[
        { name: "مقالات", url: "/mags" },
        { name: fetchData.data.magCategoryTitle, url: "/mags/" + props.slug },
      ]}
    />
  );
};

const MagCategoryItemsData = async (props) => {
  const fetchCategoryData = await getData(
    "/web" + API_PATHS.MAGS + "/" + props.slug
  );
  return <MagCategoryItems data={fetchCategoryData} slug={props.slug} />;
};
const MagCategory = (props) => {
  return (
    <div className="w-[95%] m-auto size720:w-[90%]">
      <p>iman</p>
      {/* <div>
        <MagBreadCrumbData slug={props.params["mag-category"]} />
      </div>
      <MagCategoryData />
      <MagCategoryItemsData slug={props.params["mag-category"]} /> */}
    </div>
  );
};

export default MagCategory;
