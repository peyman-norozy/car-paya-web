import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import Providers from "@/store/provider";
import MainLayout from "@/layouts/MainLayout";
import NextTopLoader from 'nextjs-toploader';

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
          <body className="max-w-[1600px] m-auto">
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
          <MainLayout>{children}</MainLayout>
          </body>
        </html>
      </Providers>
  );
}
