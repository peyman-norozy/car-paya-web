import { numberWithCommas } from "@/utils/function-utils";
import StarRating from "./StarRating";

const ShowProductDescription = (props) => {
  return (
    <div className="py-[1rem] px-[0.5rem] w-full">
      <div className="flex items-center justify-between pb-[0.5rem] border-b-[1px] border-gray_light_border">
        <h1 className="text-purple_primary text-[18px]">{props.title}</h1>
        <div>
          <StarRating edit={false} value={5} />
        </div>
      </div>
      <div className="flex gap-[1rem] items-center mt-[1rem]">
        <span className="line-through decoration-red-600 text-gray-500 text-[14px]">
          {numberWithCommas(5500000)}
          <span>تومان</span>
        </span>
        <span className="font-bold text-purple_primary text-[14px]">
          {numberWithCommas(4100000)}
          <span>تومان</span>
        </span>
      </div>
      <div className="mt-[2rem] flex flex-col gap-[0.5rem]">
        <h2 className="font-bold text-[15px]">توضیحات مختصر محصول</h2>
        <p className="text-gray_nav text-[12px]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </div>
    </div>
  );
};

export default ShowProductDescription;
