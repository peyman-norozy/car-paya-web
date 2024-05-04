import React from 'react';
import Image from "next/image";
import Input from "@/components/Input";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {API_PATHS} from "@/configs/routes.config";

const MainMotorSycleModel = (props) => {
    const backClickHandler = () => {
        props.setMainMotorBrandModalDisplay(true);
        props.setMainMotorModelDisplay(false);
    };

    return (
        <div className="flex flex-col gap-4 mt-4 w-full">
            <div className="flex justify-end">
                <span className="flex-1 text-center">انتخاب مدل</span>
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
                <Input
                    type={"text"}
                    placeholder={"جستجو مدل"}
                    className={
                        "border placeholder:text-12 text-14 outline-none pr-1 py-1 rounded-sm w-full"
                    }
                />
            </div>

            <div className="border max-h-[180px] w-full overflow-y-scroll grid grid-cols-3 gap-4 py-4">
                {props.mainMotorModelData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                        <div
                            className="w-[50px] h-[50px] cursor-pointer"
                            id={"motor_model"}
                            onClick={(e) => props.clickModelHandler(e, item.id, item.image)}
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
                        <span className="text-12">{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );

};

export default MainMotorSycleModel;