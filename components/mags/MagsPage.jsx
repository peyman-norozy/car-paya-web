"use client";
import React, { useEffect, useState } from "react";
import MagsCategorySection from "./MagsCategorySection";
import axios from "axios";
import { API_PATHS } from "@/configs/routes.config";
import RecentMags from "./RecentMags";
import MagsSlider from "./MagsSlider";
import SuggestedMags from "./SuggestedMags";

const MagsPage = (props) => {
  const { data, category, recent, views } = props;
  const [suggestedMagsData, setSuggestedMagData] = useState([]);
  const [news,setNews] = useState([])
  console.log(data);
  console.log(category.data.filter((item) => item.id === 2)[0].slug);
  console.log(recent);
  console.log(views);
  useEffect(() => {
    const suggestedMags = data.data.filter((item) => item.suggested === 1);
    setSuggestedMagData(suggestedMags);
    const news = data.data.filter((item) => item.mag_category_id === 'Marisa Waters');
    setNews(news)
  }, []);
  return (
    <div className="w-[90%] m-auto">
      <div className="pt-[1rem] mb-[1.5rem] flex justify-between">
        <h1 className="text-[32px] font-bold text-[#E73C33]">
          {" "}
          مجله <span className="text-[#212B5E]">کار چک می</span>
        </h1>
        <div>search</div>
      </div>
      <MagsCategorySection data={category.data} />
      <RecentMags data={recent} />
      <MagsSlider data={news} title='Marisa Waters' />
      <MagsSlider data={views.data} title="پربازدیدترین مجله ها" />
      <SuggestedMags
        title="سایر مقالات پیشنهادی به کاربران"
        data={suggestedMagsData}
      />
    </div>
  );
};

export default MagsPage;
