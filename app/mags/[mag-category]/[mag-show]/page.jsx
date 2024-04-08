import MagShowPage from '@/components/mags/MagShowPage';
import MagsCategorySection from '@/components/mags/MagsCategorySection';
import { API_PATHS } from '@/configs/routes.config';
import { getData } from '@/utils/api-function-utils';
import React from 'react';

const MagCategoryData = async (props) => {
    
    const fetchCategoryData = await getData("/web" + API_PATHS.MAGCATEGORY);
    return <MagsCategorySection data={fetchCategoryData.data} />;
  };
  const MagShowData = async (props) => {
    
    const fetchCategoryData = await getData("/web" + API_PATHS.MAGS + '-' + props.slug);
    return <MagShowPage data={fetchCategoryData.data} slug={props.slug} />;
  };

const MagShow = (props) => {
    return (
        <div className='w-[90%] m-auto'>
            <div className="pt-[1rem] mb-[1.5rem] flex justify-between">
        <h1 className="text-[32px] font-bold text-[#E73C33]">
          {" "}
          مجله <span className="text-[#212B5E]">کار چک می</span>
        </h1>
        <div>search</div>
      </div>
      <MagCategoryData />
      <div className='flex mt-[2rem]'>
        <div className='w-[65%]'>
        <MagShowData slug={props.params['mag-show']}/>
        </div>
      </div>
        </div>
    );
};

export default MagShow;