import { Metadata } from "next";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import Providers from "@/store/provider";
import MainLayout from "@/layouts/MainLayout";
import NextTopLoader from "nextjs-toploader";
import { Suspense } from "react";

export const metadata = {
  manifest: "/manifest.json", // we are accessing our manifest file here
  title: "car check",
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
          <body className="bg-[#D1D1D1]">
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
              <Suspense>
                <MainLayout>{children}</MainLayout>
              </Suspense>
            <div id="modal-root"></div>
          </body>
        </html>
      </Providers>
  );
}
