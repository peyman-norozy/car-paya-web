import BatteriesPage from "@/components/batteries/BatteriesPage";
export const metadata =  {
  title: ' فروشگاه باطری',
  description: 'با کیفیت ترین باطری ها با ضمانت تعویض کارچک همراه با نصب و دریافت باطری فرسوده',
  metadataBase: new URL('https://ccme.ir/batteries'),
    alternates: {
        canonical: 'https://ccme.ir',
    },
    keywords: 'باطری،خودرو',
    robots: 'index,follow',
    openGraph: {
        title: ' فروشگاه باطری',
        description:'با کیفیت ترین باطری ها با ضمانت تعویض کارچک همراه با نصب و دریافت باطری فرسوده',
        locale: 'fa-ir',
        type: 'website',
        url: 'https://ccme.ir',
        images: [
            {
                url: "https://ccme.ir/_next/static/media/battery-product.abcd07be.svg",
                width: 32, // Specify the width of the image
                height: 32, // Specify the height of the image
            }
        ]
    }

};

const Batteries = () => {
 
  return (
    <BatteriesPage />
  );
};

export default Batteries;
