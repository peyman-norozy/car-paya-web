import React from "react";
import StarRating from "@/components/StarRating";

const UserComment = () => {
  return (
    <div className={"flex-1"}>
      <section>
        <p>دیدگاهتان را بنویسید</p>
        <StarRating />
      </section>
    </div>
  );
};

export default UserComment;
