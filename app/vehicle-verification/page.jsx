import VehicleVerificationPage from '@/components/vehicle-verification/VehicleVerificationPage';

export const metadata =  {
  title: 'کارشناسی خودرو',
  description: 'کارشناسی خودرو در مراکز کارچک یا در محل شما',
  metadataBase: new URL('https://ccme.ir/vehicle-verification'),
    alternates: {
        canonical: 'https://ccme.ir',
    },
    keywords: 'کارشناسی،خودرو',
    robots: 'index,follow',
    openGraph: {
        title: 'کارشناسی خودرو',
        description:'کارشناسی خودرو در مراکز کارچک یا در محل شما',
        locale: 'fa-ir',
        type: 'website',
        url: 'https://ccme.ir',
        images: [
            {
                url: 'https://ccme.ir/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvehicle-verification.2d0deea8.png&w=64&q=75',
                width: 32, // Specify the width of the image
                height: 32, // Specify the height of the image
            }
        ]
    }

};

export const ldJsonData = {
  "@context": "https://schema.org",
  "@type": "website",
  "name": "دخترون",
  "url": "https://ccme.ir",
  "description": "کارشناسی خودرو در سریع ترین زمان در مراکز تخصصی کارچک",
  "logo": "https://ccme.ir/assets/icons/Image-1.svg"
};


const VehicleVerification = () => {
  return (
    <>
      <VehicleVerificationPage />
    </>
  );
};

export default VehicleVerification;
