import React, { useEffect, useState } from "react";
import DiscountCard from "@/components/cards/DiscountCard";
import { getData } from "@/utils/api-function-utils";
import { API_PATHS } from "@/configs/routes.config";
import { useRouter } from "next/navigation";
import PrivateRoute from "@/routes/private-route";
import nProgress from "nprogress";

const Discount = () => {
  const [discountData, setDiscountData] = useState([]);
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const getCoupons = await getData(API_PATHS.USERPANEL + API_PATHS.COUPONS);
      console.log(getCoupons);
      if (getCoupons.status === "success") {
        setDiscountData(getCoupons.data);
      } else if (getCoupons.status === 404) {
        console.log(getCoupons);
      } else if (getCoupons.status === 401) {
        nProgress.start();
        router.push("login");
      } else if (getCoupons.status === 422) {
        console.log(getCoupons.data.error);
      }
    })();
  }, []);

  return (
    <PrivateRoute>
      <div className="flex flex-col size1000:flex-1 w-full rounded-[10px] px-[43px] py-6 shadow-[0_0_6px_0_rgba(180,180,180,0.3)]">
        <h1 className={"text-[18px] text-[#354597] mt-[8px] mb-[24px]"}>
          تخفیف های من
        </h1>
        <ul className={"flex flex-col gap-[16px]"}>
          {discountData.map((item) => (
            <DiscountCard key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </PrivateRoute>
  );
};

export default Discount;
