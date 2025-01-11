import React from "react";
import VehicleInspection from "@/components/VehicleInspection";

export const metadata = {
  title: "خدمات کارشناسی خودرو | کارپایا",
  description: "کارپایا مرجع تخصصی خدمات کارشناسی خودرو.",
  metadataBase: new URL("https://carpaya.com"),
  openGraph: {
    url: "https://carpaya.com",
    title: "خدمات کارشناسی خودرو | کارپایا",
    description: "کارپایا مرجع تخصصی خدمات کارشناسی خودرو.",
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
    ],
    siteName: "کارپایا",
    type: "website",
    locale: "fa_IR",
    updatedTime: "2024-11-04T21:03:28+00:00",
  },
  twitter: {
    cardType: "summary_large_image",
    title: "خدمات کارشناسی خودرو | کارپایا",
    description: "کارپایا مرجع تخصصی خدمات کارشناسی خودرو.",
  },
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxVideoPreview: -1,
    maxImagePreview: "large",
  },
};

// export const ldJsonData = {
//   "@context": "https://schema.org",
//   "@type": "website",
//   name: "دخترون",
//   url: "https://ccme.ir",
//   description: "کارشناسی خودرو در سریع ترین زمان در مراکز تخصصی کارچک",
//   logo: "https://ccme.ir/assets/icons/Image-1.svg",
// };

// const VehicleVerification = (props) => {
//   return (
//       <VehicleVerificationPage params={props.searchParams} />
//   );
// };

const Page = () => {
  return <VehicleInspection />;
};

export default Page;
