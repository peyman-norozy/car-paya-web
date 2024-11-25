"use client";

import React, { useEffect, useState } from "react";
import MagShowCommentsCard from "./MagShowCommentsCard";
import axios from "axios";

const MagShowComments = (props) => {
  const { id } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.BASE_API + "/web/mag-comments?mag_id=" + id)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {data.length > 0 ? (
        <div>
          <div className="flex items-center justify-between ml-[2rem] ">
            <h3 className="text-20">نظرات</h3>
            <span className="text-[#5E5E5E] text-14">3 دیدگاه</span>
          </div>
          <MagShowCommentsCard />
        </div>
      ) : (
        <p>تاکنون نظری درباره این مقاله ثبت نشده است</p>
      )}
    </div>
  );
};

export default MagShowComments;
