import React from "react";
import CarBackgroundCard from "@/components/cards/CarBackgroundCard";
import { persianDateCovertor } from "@/utils/function-utils";

const RecordModalCreatedCard = (props) => {
  const { item } = props;
  return (
    <CarBackgroundCard>
      <div className="flex-1 text-center">{props.index + 1}</div>
      <div className="flex-1 text-center">{persianDateCovertor(item.date)}</div>
      <div className="flex-1 text-center">
        {item.kilometers_current} کیلومتر
      </div>
      <div className="flex-1 text-center"></div>
    </CarBackgroundCard>
  );
};

export default RecordModalCreatedCard;
