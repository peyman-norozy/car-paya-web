import PeriodicServiceIndex from "@/components/PeriodicServiceIndex/PeriodicServiceIndex";
import assistance from "@/public/assets/images/assistance.jpg";
import repair2 from "@/public/assets/images/repair2.jpg";
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
const PeriodicService = (props) => {
  return (
    <div className="lg:flex items-start gap-8 mt-1 lg:mt-10 max-w-[1772px] m-auto py-4 relative">
      <div className={"w-full lg:w-[calc(100%-424px)] mr-auto"}>
        <PeriodicServiceIndex
          searchParams={props.searchParams}
          title={"سرویس دوره ای"}
          description={
            "سرویس دوره ای شامل ١٧ بخش مي‌باشد كه كاربر بنا به نیاز خود نسبت به انتخاب خدمات اقدام مي‌نمايد"
          }
          servics={servics}
          icon={"/assets/images/1.png"}
          ImageAddress1={repair2}
          ImageAddress2={assistance}
        />
      </div>
    </div>
  );
};

export default PeriodicService;
