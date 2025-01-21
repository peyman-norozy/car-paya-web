import React from "react";
import BatteriesMainPage from "@/components/BatteriesMainPage/BatteriesMainPage";

export const metadata = {
  title: "خدمات باتری خودرو | کارپایا",
  description: "کارپایا مرجع تخصصی خدمات باتری خودرو.",
  metadataBase: new URL("https://carpaya.com"),
  openGraph: {
    url: "https://carpaya.com/batteries",
    title: "خدمات باتری خودرو | کارپایا",
    description: "کارپایا مرجع تخصصی خدمات باتری خودرو.",
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
      { url: "/assets/icons/apple-touch-icon.png" }
    ],
    siteName: "کارپایا",
    type: "website",
    locale: "fa_IR",
    updatedTime: "2024-11-04T21:03:28+00:00",
  },
  twitter: {
    cardType: "summary_large_image",
    title: "خدمات باتری خودرو | کارپایا",
    description: "کارپایا مرجع تخصصی خدمات باتری خودرو.",
  },
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxVideoPreview: -1,
    maxImagePreview: "large",
  },
};

const Page = (props) => {
  return <BatteriesMainPage />;
};

export default Page;
