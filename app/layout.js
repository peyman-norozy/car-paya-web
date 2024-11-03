import { Metadata } from "next";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import Providers from "@/store/provider";
import MainLayout from "@/layouts/MainLayout";
import NextTopLoader from "nextjs-toploader";
import { Suspense } from "react";
import LoginModal from "@/components/login/LoginModal";
import { ToastContainer } from "react-toastify";

export const metadata = {
  manifest: "/manifest.json", // we are accessing our manifest file here
  // title: "carcheck",
  title: "34819897",
  // ... other options
};

// export const metadata = {
//
//     title: 'کارچک',
//     description: 'کارشناسی خودرو در مراکز کارچک یا در محل شما',
//     metadataBase: new URL('https://ccme.ir'),
//     icons: [
//       {
//         src: '/favicon.ico',
//         sizes: '64x64',
//         type: 'image/x-icon',
//       },
//     ],
// };

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="fa" dir="rtl">
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
          />
          <script
            id="goftino-widget"
            dangerouslySetInnerHTML={{
              __html: `
        !function(){var i="Cv2fey",a=window,d=document;function g(){var g=d.createElement("script"),s="https://www.goftino.com/widget/"+i,l=localStorage.getItem("goftino_"+i);g.async=!0,g.src=l?s+"?o="+l:s;d.getElementsByTagName("head")[0].appendChild(g);}"complete"===d.readyState?g():a.attachEvent?a.attachEvent("onload",g):a.addEventListener("load",g,!1);}();
      `,
            }}
          />
        </head>
        <body className="bg-[#FBFBFB]">
          <NextTopLoader
            color={"#000000"}
            height={4}
            crawlSpeed={2000}
            crawl={true}
            initialPosition={0.08}
            showSpinner={false}
            easing="ease"
            speed={2000}
          />
          <LoginModal />
          <ToastContainer rtl={true} />
          <Suspense>
            <MainLayout>{children}</MainLayout>
          </Suspense>
          <div id="modal-root"></div>
        </body>
      </html>
    </Providers>
  );
}
