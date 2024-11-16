import periodic2 from "@/public/assets/images/periodic2.png";
import Image from "next/image";
const servics = [
  "تعویض روغن موتور",
  "تعویض فیلتر روغن",
  "تعویض فیلتر هوا",
  "تعویض روغن هیدرولیک",
  "تعویض فیلتر هوای کابین",
  "تعویض فیلتر گیربکس اتومات",
  "تعویض روغن گیربکس اتومات",
  "تعویض روغن گیربکس دستی",
  "تعویض لنت",
  "روغن ترمز",
  "ضد یخ",
  "مکمل و اکتان",
  "باتری",
  "تنظیم باد",
  "اپارات",
  "دیاگ ماشین",
  "چکاپ ماشین",
];
const PeriodicLandingServices = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="w-full flex flex-col-reverse lg:flex-row justify-around gap-y-4">
        <Image width={476} height={240} src={periodic2} alt="" />
        <div className="flex flex-col items-start gap-3 lg:gap-10 px-4 lg:px-0">
          <span className="text-sm lg:text-lg font-medium">
            در محل شما یا در مرکز تخصصی ما، انتخاب با شماست!
          </span>
          <span className="text-xs lgg:text-base font-medium max-w-[600px] leading-5 text-[#4B4B4B]">
            ما در کارپایا می‌دانیم که خودرو بخشی از سرمایه و زندگی روزمره شماست.
            به همین دلیل، با ارائه خدمات دقیق، سریع و قابل‌اعتماد، تمام تلاش خود
            را می‌کنیم تا تجربه‌ای عالی و مطمئن از سرویس دوره‌ای خودرو برای شما
            فراهم کنیم. با کارپایا، خودرو شما همیشه در بهترین حالت خود قرار
            دارد.
          </span>
        </div>
      </div>
      <div className="w-11/12 overflow-x-hidden mx-auto py-2 px-4 shadow-[0_0_4px_0_rgba(207,207,207,0.7)] rounded-2xl flex relative h-10">
        <div className="flex gap-12 items-center scroll-item scroll-item-1 absolute w-fit">
          {servics.map((item) => (
            <div className="flex items-center gap-1" key={item + "1"}>
              <div className="size-4 rounded-full bg-[#a7eeb7]"></div>
              <span className="text-xs lg:text-base font-medium text-[#0F0F0F] whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
        <div className="flex gap-12 items-center scroll-item scroll-item-2 absolute w-fit">
          {servics.map((item) => (
            <div className="flex items-center gap-1" key={item + "2"}>
              <div className="size-4 rounded-full bg-[#a7eeb7]"></div>
              <span className="text-xs lg:text-base font-medium text-[#0F0F0F] whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PeriodicLandingServices;
