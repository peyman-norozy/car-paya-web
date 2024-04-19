import MagsPage from '@/components/mags/MagsPage';
import { API_PATHS } from '@/configs/routes.config';
import { getData } from '@/utils/api-function-utils';
import React from 'react';

export const metadata =  {
    title: 'مجلات',
    description: "مجلات کاربردی و مفید درباره نگهداری و بهبود وضعیت خودرو و افزایش اطلاعات در این موضوع",
    metadataBase: new URL('https://ccme.ir/mags'),
      alternates: {
          canonical: 'https://ccme.ir',
      },
      keywords: 'محصولات',
      robots: 'index,follow',
      openGraph: {
          title: 'مجلات',
          description: "مجلات کاربردی و مفید درباره نگهداری و بهبود وضعیت خودرو و افزایش اطلاعات در این موضوع",
          locale: 'fa-ir',
          type: 'website',
          url: 'https://ccme.ir',
          images: [
              {
                  url: 'https://ccme.ir/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcluch-bumpers.fc3975bb.png&w=64&q=75',
                  width: 32, // Specify the width of the image
                  height: 32, // Specify the height of the image
              }
          ]
      }
  
  };

const Mags = () => {
    const MagsPageData = async() => {
        const fetchData = await getData('/web' + API_PATHS.MAGS)
        const fetchRecentMags = await getData('/web' + API_PATHS.MAGS + '?order_by=created_at&order_dir=DESC')
        const fetchCategoryData = await getData('/web' + API_PATHS.MAGCATEGORY)
        const mostViews = await getData('/web' + API_PATHS.MAGS + '?order_by=views&order_dir=DESC')
        return <MagsPage data={fetchData} category={fetchCategoryData} views={mostViews} recent={fetchRecentMags}/>
    }
    return (
        <div>
            <MagsPageData />
        </div>
    );
};

export default Mags;