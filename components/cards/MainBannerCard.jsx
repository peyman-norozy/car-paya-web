import Image from "next/image";
import Link from "next/link";

const MainBannerCard = (props) => {
    return (
        <div className="size690:min-w-[200px] min-w-[100px] h-[120px]">
            <div className="flex flex-col justify-center items-center h-full">
                <Link
                    href={props.data.href}
                    className="rounded-10 border border-[#dedede] shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] flex flex-col gap-2 justify-center items-center w-full h-full"
                >
                    <div className="m-0 w-size460:w-[64px] size460:h-[64px] w-[54px] h-[54px]"
                    >
                        <Image
                            src={props.data.iconSrc}
                            alt={"icon"}
                            priority={true}
                            width={74}
                            height={74}
                            className={"w-full h-full"}
                        />
                    </div>
                    <span className="inline-block text-center text-[#6b6b6b] size1275:text-[16px] text-[12px] ">
            {props.data.title}
          </span>
                </Link>
            </div>
        </div>
    );
};

export default MainBannerCard;
