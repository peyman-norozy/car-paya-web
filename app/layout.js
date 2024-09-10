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
          <meta name="enamad" content="34819897" />
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
          <LoginModal/>
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
