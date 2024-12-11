import { Metadata } from "next";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import Providers from "@/store/provider";
import MainLayout from "@/layouts/MainLayout";
import NextTopLoader from "nextjs-toploader";
import { Suspense } from "react";
import LoginModal from "@/components/login/LoginModal";
import { ToastContainer } from "react-toastify";
import Script from "next/script";

export const metadata = {
  manifest: "/manifest.json", // we are accessing our manifest file here
  title: "carcheck",
  // title: "34819897",
  // ... other options
};

// export const metadata = {
//   title: "کارچک",
//   description: "کارشناسی خودرو در مراکز کارچک یا در محل شما",
//   metadataBase: new URL("https://ccme.ir"),
//   icons: [
//     {
//       src: "/favicon.ico",
//       sizes: "64x64",
//       type: "image/x-icon",
//     },
//   ],
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
          <meta charSet="UTF-8" />
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=GT-K8MDPDGR"
            id="google_gtagjs-js"
          />

          <Script id="google_gtagjs-js-after" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('set', 'linker', { 'domains': ['carpaya.com'] });
          gtag('js', new Date());
          gtag('set', 'developer_id.dZTNiMT', true);
          gtag('config', 'GT-K8MDPDGR');
          
          window._googlesitekit = window._googlesitekit || {};
          window._googlesitekit.throttledEvents = [];
          window._googlesitekit.gtagEvent = (name, data) => {
            var key = JSON.stringify({ name, data });
            if (!!window._googlesitekit.throttledEvents[key]) {
              return;
            }
            window._googlesitekit.throttledEvents[key] = true;
            setTimeout(() => {
              delete window._googlesitekit.throttledEvents[key];
            }, 5);
            gtag('event', name, { ...data, event_source: 'site-kit' });
          };
        `}
          </Script>

          {/*<meta name="description" content="Image already added"/>*/}
          {/*<meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>*/}
          {/*<link rel="canonical" href="https://carpaya.com/blog/"/>*/}
          {/*<meta property="og:locale" content="fa_IR"/>*/}
          {/*<meta property="og:type" content="website"/>*/}
          {/*<meta property="og:title" content="صفحه اصلی - کارپایا"/>*/}
          {/*<meta property="og:description" content="Image already added"/>*/}
          {/*<meta property="og:url" content="https://carpaya.com/blog/"/>*/}
          {/*<meta property="og:site_name" content="کارپایا"/>*/}
          {/*<meta property="og:updated_time" content="2024-10-11T21:03:28+00:00"/>*/}
          {/*<meta property="article:published_time" content="1403-03-29\20:22:47"/>*/}
          {/*<meta property="article:modified_time" content="1403-07-20\21:03:28"/>*/}
          {/*<meta name="twitter:card" content="summary_large_image"/>*/}
          {/*<meta name="twitter:title" content="صفحه اصلی - کارپایا"/>*/}
          {/*<meta name="twitter:description" content="Image already added"/>*/}
          {/*<meta name="twitter:label1" content="نویسنده"/>*/}
          {/*<meta name="twitter:data1" content="مدیریت"/>*/}
          {/*<meta name="twitter:label2" content="زمان خواندن"/>*/}
          {/*<meta name="twitter:data2" content="کمتر از یک دقیقه"/>*/}
          {/*<script type="application/ld+json"*/}
          {/*        className="rank-math-schema">{"@context":"https://schema.org","@graph":[{"@type":["Person","Organization"],"@id":"https://carpaya.com/blog/#person","name":"\u06a9\u0627\u0631\u067e\u0627\u06cc\u0627"},{"@type":"WebSite","@id":"https://carpaya.com/blog/#website","url":"https://carpaya.com/blog","name":"\u06a9\u0627\u0631\u067e\u0627\u06cc\u0627","publisher":{"@id":"https://carpaya.com/blog/#person"},"inLanguage":"fa-IR","potentialAction":{"@type":"SearchAction","target":"https://carpaya.com/blog/?s={search_term_string}","query-input":"required name=search_term_string"}},{"@type":"WebPage","@id":"https://carpaya.com/blog/#webpage","url":"https://carpaya.com/blog/","name":"\u0635\u0641\u062d\u0647 \u0627\u0635\u0644\u06cc - \u06a9\u0627\u0631\u067e\u0627\u06cc\u0627","datePublished":"2024-06-18T20:22:47+00:00","dateModified":"2024-10-11T21:03:28+00:00","about":{"@id":"https://carpaya.com/blog/#person"},"isPartOf":{"@id":"https://carpaya.com/blog/#website"},"inLanguage":"fa-IR"},{"@type":"Person","@id":"https://carpaya.com/blog/author/modir/","name":"\u0645\u062f\u06cc\u0631\u06cc\u062a","url":"https://carpaya.com/blog/author/modir/","image":{"@type":"ImageObject","@id":"//www.gravatar.com/avatar/ec01589fe5b38c177d5a524b3231dd8c?s=96&#038;r=g&#038;d=mm","url":"//www.gravatar.com/avatar/ec01589fe5b38c177d5a524b3231dd8c?s=96&#038;r=g&#038;d=mm","caption":"\u0645\u062f\u06cc\u0631\u06cc\u062a","inLanguage":"fa-IR"}},{"@type":"Article","headline":"\u0635\u0641\u062d\u0647 \u0627\u0635\u0644\u06cc - \u06a9\u0627\u0631\u067e\u0627\u06cc\u0627","datePublished":"2024-06-18T20:22:47+00:00","dateModified":"2024-10-11T21:03:28+00:00","author":{"@id":"https://carpaya.com/blog/author/modir/","name":"\u0645\u062f\u06cc\u0631\u06cc\u062a"},"publisher":{"@id":"https://carpaya.com/blog/#person"},"description":"Image already added","name":"\u0635\u0641\u062d\u0647 \u0627\u0635\u0644\u06cc - \u06a9\u0627\u0631\u067e\u0627\u06cc\u0627","@id":"https://carpaya.com/blog/#richSnippet","isPartOf":{"@id":"https://carpaya.com/blog/#webpage"},"inLanguage":"fa-IR","mainEntityOfPage":{"@id":"https://carpaya.com/blog/#webpage"}}]}</script>*/}
        </head>
        <body className="bg-[#FBFBFB]">
          <NextTopLoader
            color={"#F66B34"}
            height={5}
            crawlSpeed={2000}
            crawl={true}
            initialPosition={0.08}
            showSpinner={false}
            easing="ease"
            speed={2000}
            zIndex={10000}
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
