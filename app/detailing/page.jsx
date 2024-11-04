import React from "react";

export const metadata = {
  title: "خدمات دیتیلینگ خودرو | کارپایا",
  description: "کارپایا مرجع تخصصی خدمات دیتیلینگ خودرو.",
  metadataBase: new URL("https://carpaya.com"),
  openGraph: {
    url: "https://carpaya.com/batteries",
    title: "خدمات دیتیلینگ خودرو | کارپایا",
    description: "کارپایا مرجع تخصصی خدمات دیتیلینگ خودرو.",
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
    title: "خدمات دیتیلینگ خودرو | کارپایا",
    description: "کارپایا مرجع تخصصی خدمات دیتیلینگ خودرو.",
  },
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxVideoPreview: -1,
    maxImagePreview: "large",
  },
};

// import PeriodicServiceIndex from "@/components/PeriodicServiceIndex/PeriodicServiceIndex";
import DetailingIndex from "@/components/DetailingIndex/DetailingIndex";
// const servics = [
//   "پولیش",
//   "صفر شویی",
//   "کاور",
//   "سرامیک ۳ ساله",
//   "سرامیک ۵ ساله",
//   "سرامیک ۷ ساله",
// ];

const Page = () => {
  return (
    // <div className="lg:flex items-start gap-8 max-w-[1772px] m-auto pb-4 relative">
    //   <div className={"w-full lg:w-[calc(100%-424px)] mr-auto"}>
    // <PeriodicServiceIndex
    // title={"دیتیلینگ"}
    // servics={servics}
    // ImageAddress1={"/assets/images/detailingIndex1.jpg"}
    // ImageAddress2={"/assets/images/auto-detailing01.jpg"}
    // icon={"/assets/icons/detailingIconservices.png"}
    // />
    //   </div>
    // </div>
    <DetailingIndex />
  );
};

export default Page;
