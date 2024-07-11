import React, {Fragment, useEffect, useState} from 'react';
import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {API_PATHS} from "@/configs/routes.config";
import {error} from "@/utils/function-utils";
import Input from "@/components/Input";
import Image from "next/image";
import Spinner from "@/components/Spinner";
const MainHeavyCarBrand = (props) => {
    const [mainBrandData, setMainBrandData] = useState([]);
    const [sliderShowState, setSliderShowState] = useState(false)

    useEffect(() => {
        setSliderShowState(true)
        axios
            .get(process.env.BASE_API + "/web" + API_PATHS.HEAVYCARBRANDS)
            .then((res) => {
                setMainBrandData(res.data.data);
                setSliderShowState(false)
            })
            .catch((e) => {
                if (e.response.status === 422) {
                    for (let key in e.response.data.errors) {
                        error(e.response.data.errors[key][0]);
                    }
                }
            });
    }, []);

    return (
        <Fragment>
            {
                sliderShowState ?
                    <div className={"flex justify-center items-center h-[100px]"}>
                        <Spinner width={"w-[44px]"} height={"h-[44px]"}/>
                    </div>
                    :
                    <div className="flex flex-col items-center gap-4 mt-4 w-full">
                        <span className="text-16">انتخاب برند</span>
                        <Input
                            type={"text"}
                            placeholder={"جستجو برند"}
                            className={
                                "border placeholder:text-12 text-14 outline-none pr-1 py-1 rounded-sm w-full"
                            }
                        />
                        <div className="border max-h-[180px] w-full overflow-y-scroll grid grid-cols-3 gap-4 py-4">
                            {
                                mainBrandData.map((item, index) => (
                                    <div key={index} className="flex flex-col items-center gap-2">
                                        <div
                                            className="w-[50px] h-[50px] cursor-pointer"
                                            id={"heavyCar_brand"}
                                            onClick={(e) => props.clickbrandHandler(e, item.id,item)}
                                        >
                                            <Image
                                                src={
                                                    item.logo === null
                                                        ? "/assets/icons/photo.svg"
                                                        : process.env.BASE_API +
                                                        "/web" +
                                                        API_PATHS.FILE +
                                                        "/" +
                                                        item.logo
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
            }
        </Fragment>
    );
};

export default MainHeavyCarBrand;