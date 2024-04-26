import ProductsPage from "@/components/products/ProductsPage";
import { META_PATHS } from "@/configs/routes.config";
import { getData } from "@/utils/api-function-utils";

export const metadata =  {
  title: 'محصولات',
  description: 'بهترین محصولات و لوازم ماشین همراه با دریافت بهترین و سریع ترین خدمات در کارچک',
  metadataBase: new URL(META_PATHS.BASEURL + META_PATHS.PRODUCTS),
    alternates: {
        canonical: META_PATHS.BASEURL,
    },
    keywords: 'محصولات',
    robots: 'index,follow',
    openGraph: {
        title: 'محصولات',
        description: 'بهترین محصولات و لوازم ماشین همراه با دریافت بهترین و سریع ترین خدمات در کارچک',
        locale: 'fa-ir',
        type: 'website',
        url: META_PATHS.BASEURL,
        images: [
            {
                url: `${META_PATHS.BASEURL}/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcluch-bumpers.fc3975bb.png&w=64&q=75`,
                width: 32, // Specify the width of the image
                height: 32, // Specify the height of the image
            }
        ]
    }

};

const ProductData = async() => {
    const fetchData = await getData('/web/products')
    return <ProductsPage data={fetchData}/>
}

const Products = () => {
  
  return (
    <p>iman</p>
//    <ProductData />
  );
};

export default Products;
