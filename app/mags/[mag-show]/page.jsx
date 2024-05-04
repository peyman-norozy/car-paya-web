import BreadCrumbMag from "@/components/mags/BreadCrumbMag";
import MagComments from "@/components/mags/MagComments";
import MagShowComments from "@/components/mags/MagShowComments";
import MagShowPage from "@/components/mags/MagShowPage";
import MagsCategorySection from "@/components/mags/MagsCategorySection";
import TrendMags from "@/components/mags/TrendMags";
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
const MagShowData = async (props) => {
  const fetchCategoryData = await getData(
    "/web" + API_PATHS.MAGS + "-" + props.slug
  );
  return <MagShowPage data={fetchCategoryData.data} slug={props.slug} />;
};

const TrendMagData = async (props) => {
  const fetchCategoryData = await getData(
    "/web" + API_PATHS.MAGS + "-" + props.slug
  );
  return <TrendMags data={fetchCategoryData.data} slug={props.slug} />;
};

const CommentData = async (props) => {
  const fetchCategoryData = await getData(
    "/web" + API_PATHS.MAGS + "-" + props.slug
  );
  return <MagComments id={fetchCategoryData.data.mag.id} />;
};

const ShowCommentData = async (props) => {
  const fetchCategoryData = await getData(
      "/web" + API_PATHS.MAGS + "-" + props.slug
  );
  return <MagShowComments id={fetchCategoryData.data.mag.id} />;
};

const BreadCrumbData = async (props) => {
  const fetchData = await getData("/web" + API_PATHS.MAGS + "-" + props.slug);
  return (
    <BreadCrumbMag
      data={[
        { name: "مقالات", url: "/mags" },
        { name: fetchData.data.mag.mag_category_id, url: "/mags" },
        { name: fetchData.data.mag.title, url: "/mags/" + props.categorySlug + '/' + props.slug },
      ]}
    />
  );
};

const MagShow = (props) => {
  return (
    <div className="w-[95%] size1000:w-[90%] m-auto">
      
      <div>
        <BreadCrumbData slug={props.params["mag-show"]} categorySlug={props.params["mag-category"]}/>
      </div>
      <MagCategoryData />
      <div className="flex mt-[2rem] gap-[2.5rem]">
        <div className="w-full size974:w-[55%] size1136:w-[65%]">
          <MagShowData slug={props.params["mag-show"]} />
          <div className="mt-[2rem]">
            <CommentData slug={props.params["mag-show"]} />
          </div>
          <div  className="mt-[2rem]">
            <ShowCommentData slug={props.params["mag-show"]}/>
          </div>
        </div>
        <div className="hidden size974:block w-[40%]">
          <TrendMagData slug={props.params["mag-show"]} />
        </div>
      </div>
    </div>
  );
};

export default MagShow;
