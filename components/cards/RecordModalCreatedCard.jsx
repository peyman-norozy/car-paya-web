import React from "react";
import CarBackgroundCard from "@/components/cards/CarBackgroundCard";
import {persianDateCovertor} from "@/utils/function-utils";

const arrayOfExample = [1, 2, 3, 4, 5, 6];
const RecordModalCreatedCard = (props) => {
  const {item} = props
  return (
    <CarBackgroundCard>
      {/*{arrayOfExample.map((item, index) => (*/}
      {/*  <div key={index} className="flex-1 text-center">*/}
      {/*    sdf*/}
      {/*  </div>*/}
      {/*))}*/}
      <div className="flex-1 text-center">{props.index}</div>
      <div className="flex-1 text-center">{persianDateCovertor(item.date)}</div>
      <div className="flex-1 text-center">{item.kilometers_current} کیلومتر</div>
      <div className="flex-1 text-center"></div>
    </CarBackgroundCard>
  );
};

export default RecordModalCreatedCard;
