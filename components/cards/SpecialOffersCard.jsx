import Image from "next/image";

const SpecialOffersCard = () => {
  return (
    <div className="w-full">
      <div className="flex size974:justify-between shadow shadow-amber-700 rounded-lg overflow-hidden">
        <ul className="flex flex-col items-center justify-between gap-[5px] bg-purple_primary rounded-lg px-[6px] py-[4px] w-[62px]">
          <li className="flex flex-col items-center">
            <Image
              src="/assets/icons/oil 1.svg"
              alt="icon"
              priority={true}
              width={24}
              height={24}
            />
            <span className="text-white text-10">روغن موتور</span>
          </li>
          <li className="w-[14px] h-[14px] flex justify-center items-center">
            <Image
              src="/assets/icons/plus 1.svg"
              alt="plus"
              priority={true}
              width={10}
              height={10}
            />
          </li>
          <li className="flex flex-col items-center gap-[4px]">
            <Image
              src="/assets/icons/air-filter.svg"
              alt="car filter icon"
              priority={true}
              width={22}
              height={22}
            />
            <span className="text-white text-10">فیلتر روغن</span>
          </li>
          <li className="w-[14px] h-[14px] flex justify-center items-center">
            <Image
              src="/assets/icons/plus 1.svg"
              alt="plus"
              priority={true}
              width={10}
              height={10}
            />
          </li>
          <li className="flex flex-col items-center gap-[4px]">
            <Image
              src="/assets/icons/electric_car.svg"
              alt="car filter icon"
              priority={true}
              width={22}
              height={22}
            />
            <span className="text-white text-10">انتخاب تیب</span>
          </li>
          <li className="w-[14px] h-[14px] flex justify-center items-center">
            <Image
              src="/assets/icons/plus 1.svg"
              alt="plus"
              priority={true}
              width={10}
              height={10}
            />
          </li>
          <li className="flex flex-col items-center gap-[4px]">
            <Image
              src="/assets/icons/filter 1.svg"
              alt="car filter icon"
              className="rotate-90"
              priority={true}
              width={22}
              height={22}
            />
            <span className="text-white text-10">فیلتر کابین</span>
          </li>
          <li className="flex flex-col items-center gap-[4px] mt-2">
            <Image
              src="/assets/icons/kisspng 2.svg"
              alt="car filter icon"
              priority={true}
              width={20}
              height={20}
            />
            <span className="text-white text-10">BENZ</span>
          </li>
        </ul>
        <div className="flex flex-col items-center justify-between flex-1 pb-[20px]">
          <Image
            src="/assets/images/peugeot.png"
            alt={"car"}
            priority={true}
            width={180}
            height={180}
          />
          <Image
            src="/assets/images/air-filter.png"
            alt="filter"
            priority={true}
            width={100}
            height={100}
          />
          <div className="px-[20px]">
            <span className="text-12 text-red-500">پکیج طلایی پژو ۲۰۶</span>
            <div className="text-12 size366:flex-row flex flex-col size366:gap-3 gap-1">
              <span className="line-through decoration-red-600">
                5/500/000<span>تومان</span>
              </span>
              <span>
                4/100/000<span>تومان</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffersCard;
