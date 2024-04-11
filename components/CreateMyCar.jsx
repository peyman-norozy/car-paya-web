import Link from "next/link";
import MyCarTableCard from "@/components/cards/MyCarTableCard";
import {useEffect, useState} from "react";
import {API_PATHS} from "@/configs/routes.config";
import Pagination from "@/components/Pagination";
import {useSearchParams} from "next/navigation";
import CreateMyCarSkeleton from "@/components/CreateMyCarSkeleton";
import {useSelector} from "react-redux";
import ResponsiveMyCarTableCard from "@/components/cards/ResponsiveMyCarTableCard";
import {getData} from "@/utils/client-api-function-utils";

const CreateMyCar = () => {
    const [newMyCareData, setNewMyCareData] = useState([]);
    const [newTotal, setNewTotal] = useState(0);
    const searchParams = useSearchParams();
    const [newSkeletonState, setNewSkeletonState] = useState(false);
    const innerWidth = useSelector(
        (widthData) => widthData.todo.windowInnerWidth,
    );

    let perPage = 4;
    const page = searchParams.get("page");

    useEffect(() => {
        (async () => {
            setNewSkeletonState(true);
            const response = await getData(process.env.BASE_API +
                API_PATHS.USERPANEL +
                API_PATHS.CARS +
                `?per_page=${perPage}&page=${page}`)
            if(response.status === 200){
              setNewMyCareData(response.data.data);
              setNewTotal(response.data.meta.total);
              setNewSkeletonState(false);
            }else if(response.response.status === 422){
              console.log(response)
            }else if(response.response.status === 404){
              console.log(response)
            }
          setNewSkeletonState(false);
        })()
    }, [searchParams, perPage, page]);

    return (
        <div className="flex flex-col size1000:flex-1 w-full">
            <div>
                <Link
                    href={"/profile/my-vehicle/my-car/create"}
                    className="flex items-center gap-2 bg-[#d52826] text-white px-[20px] py-[5px] rounded-5 w-[108px]"
                >
                    <span>افزودن</span>
                    <span className="text-20">+</span>
                </Link>
            </div>
            <div className="mt-6 flex flex-col gap-4">
                <ul className="size800:flex hidden justify-between px-4 py-2 size1190:text-16 text-14 text-stone-800 rounded-10">
                    <li className="font-bold flex-1 text-center">شماره</li>
                    <li className="font-bold flex-1 text-center">عکس</li>
                    <li className="font-bold flex-1 text-center">برند</li>
                    <li className="font-bold flex-1 text-center">مدل</li>
                    <li className="font-bold flex-1 text-center">تیپ</li>
                    <li className="font-bold flex-1 text-center">سال ساخت</li>
                    <li className="flex-1"></li>
                </ul>
                {!newSkeletonState ? (
                    innerWidth > 800 ? (
                        newMyCareData.length > 0 &&
                        newMyCareData.map((item, index) => (
                            <MyCarTableCard
                                key={item.id}
                                data={item}
                                index={index}
                                page={page}
                                perPage={perPage}
                            />
                        ))
                    ) : (
                        newMyCareData.length > 0 &&
                        newMyCareData.map((item, index) => (
                            <ResponsiveMyCarTableCard
                                key={item.id}
                                data={item}
                                index={index}
                                page={page}
                                perPage={perPage}
                            />
                        ))
                    )
                ) : (
                    <CreateMyCarSkeleton/>
                )}
            </div>
            <Pagination newTotal={newTotal} perPage={perPage}/>
        </div>
    );
};

export default CreateMyCar;
