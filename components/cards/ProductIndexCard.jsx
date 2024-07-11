import Image from "next/image";
import { numberWithCommas } from "@/utils/function-utils";

const ProductIndexCard = (props) => {
  return (
    <li className="relative bg-white border border-gray_light_border shadow-lg flex-1 p-2 py-6 flex flex-col items-center justify-between gap-4 text-14 rounded-xl">
      {props.data.off && (
        <div className="h-[20px] absolute top-[2%] right-[2%]">
          <span
            className={`${props.backgrounColorStyles} text-[#eee] text-[11px] flex justify-center items-center px-[0.25rem] py-[2px] rounded-[4px]`}
          >
            {props.data.discount}
          </span>
        </div>
      )}
      <div className="flex justify-center w-[110px] h-[120px]">
        <Image
          src={props.data.imgSrc}
          alt={props.data.alt}
          priority={true}
          width={100}
          height={100}
          className="m-0"
        />
      </div>

      <p className="text-center line-clamp-1 text-purple_primary text-12 size516:text-14">
        {props.data.title}
      </p>
      <p className="text-center text-purple_primary text-12 size516:text-14">
        آمپر 55
      </p>
      <div className="flex gap-4 text-10 text-purple_primary size460:text-12">
        {props.data.off && (
          <span>{numberWithCommas(props.data.newPrice)} تومان</span>
        )}
        <span
          className={`${
            props.data.off
              ? "text-[#aaa] relative before:absolute before:top-[8px] before:bg-[#aaa] before:h-[1px] before:w-full before:rotate-[-20deg]"
              : ""
          }`}
        >
          {numberWithCommas(props.data.oldPrice)} تومان
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-[#f31c24] rounded-[4px] p-1">
          <Image
            src="/assets/icons/lock 1.svg"
            alt="lock icon"
            priority={true}
            width={20}
            height={20}
          />
        </div>
        <span className="text-12">اضافه به سبد خرید</span>
      </div>
    </li>
  );
};

export default ProductIndexCard;
