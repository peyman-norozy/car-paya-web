"use client";

import ReactStars from "react-stars";
const StarRating = (props) => {
  const ratingChanged = (newRating) => {};
  return (
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={props.size}
      color2={"#ffd700"}
      edit={props.edit}
      half={false}
      value={props.value}
    />
  );
};

export default StarRating;
