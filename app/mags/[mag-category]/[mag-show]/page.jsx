import MagComments from '@/components/mags/MagComments';
import MagShowPage from '@/components/mags/MagShowPage';
import MagsCategorySection from '@/components/mags/MagsCategorySection';
import MagsSlider from '@/components/mags/MagsSlider';
import SearchMags from '@/components/mags/SearchMags';
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

const MagCategoryData = async (props) => {
    
    const fetchCategoryData = await getData("/web" + API_PATHS.MAGCATEGORY);
    return <MagsCategorySection data={fetchCategoryData.data} />;
  };
  const MagShowData = async (props) => {
    
    const fetchCategoryData = await getData("/web" + API_PATHS.MAGS + '-' + props.slug);
    return <MagShowPage data={fetchCategoryData.data} slug={props.slug} />;
  };

  const CommentData = async (props) => {
    
    const fetchCategoryData = await getData("/web" + API_PATHS.MAGS + '-' + props.slug);
    return <MagComments id={fetchCategoryData.data.mag.id}/>;
  };

  
 

const MagShow = (props) => {
    return (
        <div className='w-[95%] size1000:w-[90%] m-auto'>
            <div className="pt-[1rem] mb-[1.5rem] flex flex-col size752:flex-row justify-between gap-[1rem] size752:gap-0">
        <h1 className="text-[32px] font-bold text-[#E73C33] text-center size752:text-start">
          {" "}
          مجله <span className="text-[#212B5E]">کار چک می</span>
        </h1>
        <div><SearchMags /></div>
      </div>
      <MagCategoryData />
      <div className='flex mt-[2rem]'>
        <div className='w-full size868:w-[65%]'>
        <MagShowData slug={props.params['mag-show']}/>
        <div className='mt-[2rem]'>
            <CommentData slug={props.params['mag-show']}/>
        </div>
        </div>
      </div>
        </div>
    );
};

export default MagShow;