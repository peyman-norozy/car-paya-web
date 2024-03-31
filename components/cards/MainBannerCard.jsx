import Image from "next/image";
import Link from "next/link";

const MainBannerCard = (props) => {
    return (
        <div className="min-w-[200px] h-[120px]">
            <div className="flex flex-col justify-center items-center h-full">
                <Link
                    href={props.data.href}
                    className="py-10 rounded-10 border border-[#dedede] shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] flex flex-col justify-center items-center w-full h-full"
                >
                    <Image
                        src={props.data.iconSrc}
                        alt={"icon"}
                        priority={true}
                        width={74}
                        height={74}
                        className="m-0 w-size460:w-[64px] size460:h-[64px] w-[54px] h-[54px]"
                    />
                    <span className="inline-block text-[#6b6b6b] mt-2 size525:text-16 text-12">
            {props.data.title}
          </span>
                </Link>
            </div>
        </div>
    );
};

export default MainBannerCard;
