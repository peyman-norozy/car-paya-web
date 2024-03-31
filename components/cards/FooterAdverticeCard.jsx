import Image from "next/image";
import Link from "next/link";

const FooterAdverticeCard = (props) => {
  return (
    <li>
      <Link
        href={props.href}
        className="bg-[#ffffff] flex justify-around items-center rounded-5 flex-1 h-[90px]"
      >
        <div className="bg-[#23AFCD] rounded-full p-2">
          <Image
            src={props.footerCardDataItem.imgUrl}
            alt="car setting"
            priority={true}
            width={44}
            height={44}
          />
        </div>
        <div className="flex flex-col justify-center items-center text-14 font-bold text-[#2C5D83]">
          <span>{props.footerCardDataItem.title}</span>
          <span>{props.footerCardDataItem.description}</span>
        </div>
      </Link>
    </li>
  );
};

export default FooterAdverticeCard;
