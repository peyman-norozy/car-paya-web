import React from "react";
import Input from "@/components/Input";
import Image from "next/image";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {API_PATHS} from "@/configs/routes.config";

const MainCarModel = (props) => {
    const backClickHandler = () => {
        props.setMainBrandModalDisplay(true);
        props.setMainModelDisplay(false);
    };


    return (
        <div className="flex flex-col gap-4 mt-4 w-full">
            <div className="flex justify-end">
                <span className="flex-1 text-center text-[#FEFEFE]">انتخاب مدل</span>
                <Image
                    src={"/assets/icons/Arrow-Left 1.svg"}
                    alt={"icon"}
                    className="cursor-pointer"
                    onClick={backClickHandler}
                    width={24}
                    height={24}
                />
            </div>
            <div>
                <input
                    type={"text"}
                    placeholder={"جستجو مدل"}
                    className={
                        "placeholder:text-12 text-14 outline-none w-full py-1 px-4 text-[#B0B0B0] bg-[#b0b0b044] rounded-lg"
                    }
                    onChange={props.carModelSearchHandler}
                />
            </div>

            <div className="max-h-[290px] w-full overflow-y-scroll grid grid-cols-3 gap-4 py-4">
                {props.searchedMainCarModelData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                        <div
                            className="w-[50px] h-[50px] cursor-pointer"
                            id={"car_model"}
                            onClick={(e) => props.clickModelHandler(e, item.id, item.image,item)}
                        >
                            <Image
                                src={
                                    item.image === null
                                        ? "/assets/icons/photo.svg"
                                        : process.env.BASE_API +
                                        "/web" +
                                        API_PATHS.FILE +
                                        "/" +
                                        item.image
                                }
                                alt={"nissan"}
                                width={487}
                                height={487}
                                className={"rounded-10 w-[50px] h-[50px]"}
                            />
                        </div>
                        <span className="text-16 font-medium text-[#fefefe] line-clamp-1 text-center">{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainCarModel;
