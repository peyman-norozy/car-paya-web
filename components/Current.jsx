import React from "react";
import OrdersCurrentCard from "@/components/cards/OrdersCurrentCard";

const fakeData = [null, null, null, null, null];
const Current = () => {
  return (
    <div>
      <ul className={"flex flex-col gap-[16px]"}>
        {fakeData.map((item, index) => (
          <OrdersCurrentCard key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Current;
