import Image from "next/image";
import mobileGif from "@/public/assets/images/mobileGif.gif";
const PeriodicOptions = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center gap-y-4">
      <div className="flex flex-col gap-10 ">
        <span className="font-medium text-lg px-4 lg:px-0">
          شناسنامه خودرو کارپایا؛ مدیریت بهتر، رانندگی مطمئن‌تر"
        </span>
        <ul className="flex flex-col gap-4 font-medium text-[#0F0F0F] list-disc px-8 lg:px-0">
          <li>شفافیت در خرید و فروش خودرو</li>
          <li>اطلاع از تعمیرات و سرویس‌های گذشته</li>
          <li>برنامه‌ریزی بهتر برای سرویس‌های آینده</li>
        </ul>
      </div>
      <Image src={mobileGif} width={300} height={300} />
    </div>
  );
};

export default PeriodicOptions;
