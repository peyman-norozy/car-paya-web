import MagsPage from '@/components/mags/MagsPage';
import { API_PATHS } from '@/configs/routes.config';
import { getData } from '@/utils/api-function-utils';
import React from 'react';

const Mags = () => {
    const MagsPageData = async() => {
        const fetchData = await getData('/web' + API_PATHS.MAGS)
        const fetchNews = await getData('/web' + API_PATHS.MAGS + 'category_id=')
        const fetchRecentMags = await getData('/web' + API_PATHS.MAGS + '?order_by=created_at&order_dir=ASC')
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