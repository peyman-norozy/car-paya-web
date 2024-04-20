import { numberWithCommas } from "@/utils/function-utils";
import Image from "next/image";
import toman from "@/public/assets/icons/toman.svg";
import Button from "../Button";

const ProductCard = ({ data }) => {
  return (
    <div className="flex flex-col rounded-10 shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] gap-[1rem} hover:shadow-[0_8px_20px_0_rgba(0,0,0,0.45)] transition-all duration-700 items-center border-[1px] border-[#dedede] px-[1.75rem] py-[1.5rem]">
      <Image src={process.env.BASE_API + '/web/file/' +data.image_id} alt="" height={80} width={80} />
      <h1 className="text-RED_500 text-[1.35rem] text-center h-[64px] line-clamp-2">{data.name}</h1>
      <ul className="self-start leading-[1.8rem] h-[120px]">
        {data.filters &&  data.filters.map((item, index) => (
          <li key={index} className="text-14">
            <span className="text-text_gray">{item.key}:</span>
            <span className="text-[#505050]">{item.value}</span>
          </li>
        ))}
      </ul>
      <div className="w-full flex justify-center items-center pt-[1rem] gap-[0.5rem] text-text_gray border-t-[1px] border-t-[#C0C0C0] mb-[0.5rem]">
        <span className="flex items-center gap-[0.25rem] line-through text-center">
          {numberWithCommas(data.price)}
          <Image
            src={toman}
            alt=""
            width={20}
            height={20}
            className="mb-[0.5rem]"
          />
        </span>
        <span className="flex items-center gap-[0.25rem] text-center">
          {numberWithCommas(data.discounted_price)}
          <Image
            src={toman}
            alt=""
            width={20}
            height={20}
            className="mb-[0.5rem]"
          />
        </span>
      </div>
      <Button class_name='bg-RED_500 text-white rounded-[8px] w-full py-[1rem] text-center hover:bg-RED_600' > اضافه به سبد خرید</Button>
    </div>
  );
};

export default ProductCard;
