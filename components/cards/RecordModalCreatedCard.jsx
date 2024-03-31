import React from "react";
import CarBackgroundCard from "@/components/cards/CarBackgroundCard";

const arrayOfExample = [1, 2, 3, 4, 5, 6];
const RecordModalCreatedCard = () => {
  return (
    <CarBackgroundCard>
      {arrayOfExample.map((item, index) => (
        <div key={index} className="flex-1 text-center">
          sdf
        </div>
      ))}
    </CarBackgroundCard>
  );
};

export default RecordModalCreatedCard;
