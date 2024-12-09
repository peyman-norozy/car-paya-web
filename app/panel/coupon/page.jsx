import PanelContainer from "@/layouts/PanelContainer";
import Link from "next/link";

const Coupon = () => {
  return (
    <PanelContainer>
      <div className="bg-[#fefefe] rounded-lg shadow-[0_0_8px_0_rgba(143,143,143,0.25)] min-h-[500px] flex flex-col gap-6 lg:gap-9 p-4 lg:p-12">
        <div className="flex gap-2 items-center lg:hidden">
          <Link href={"/panel"} className="flex items-center">
            <i className="cc-arrow-right text-xl leading-3" />
          </Link>
          <span className="font-medium text-sm">تخفیفات و امتیازات</span>
        </div>
      </div>
    </PanelContainer>
  );
};

export default Coupon;
