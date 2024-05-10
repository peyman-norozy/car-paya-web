import MyCarTableCard from "@/components/cards/MyCarTableCard";
import {useEffect, useState} from "react";
import {API_PATHS} from "@/configs/routes.config";
import Pagination from "@/components/Pagination";
import {useSearchParams} from "next/navigation";
import CreateMyCarSkeleton from "@/components/CreateMyCarSkeleton";
import {useSelector} from "react-redux";
import ResponsiveMyCarTableCard from "@/components/cards/ResponsiveMyCarTableCard";
import {getData} from "@/utils/client-api-function-utils";
import SelectCarModal from "@/components/modal/SelectCarModal";


const CreateMyMotor = () => {
  const [newMyCareData, setNewMyCareData] = useState([]);
  const [newTotal, setNewTotal] = useState(0);
  const searchParams = useSearchParams();
  const [newSkeletonState, setNewSkeletonState] = useState(false);
  const [modalState,setModalState]=useState(false)
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
          API_PATHS.MOTORS +
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

  console.log(newSkeletonState)
  const closeCarModalHandler = (event)=>{
    console.log(event.target.getAttribute("id"))
    if(event.target.id === "ChoseCar"){
      setModalState(false)
    }
  }

  const openCarModalHandler = ()=>{
    setModalState(true)
  }

  return (
      <div className="flex flex-col size1000:flex-1 w-full rounded-[10px] px-[43px] py-6 shadow-[0_0_6px_0_rgba(180,180,180,0.3)]">
        <div className={"flex items-center justify-between"}>
          <span className={"text-BLUE_600"}>موتور سیکلت من</span>
          <div>
            <button
                type={"button"}
                className="flex items-center justify-center gap-2 border border-BLUE_600 text-BLUE_600 h-[48px] rounded-5 w-[134px]"
                onClick={openCarModalHandler}
            >
              <span className="text-20 border border-BLUE_600 w-[20px] h-[20px] rounded-full flex items-center justify-center">+</span>
              <span>افزودن</span>
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-4">
          <ul className="size800:flex hidden justify-between px-4 py-2 size1190:text-16 text-14 text-BLUE-500 rounded-10 bg-gray_light">
            <li className="font-bold flex-1 text-center text-BLUE-500">#</li>
            <li className="font-bold flex-1 text-center text-BLUE_500">عکس</li>
            <li className="font-bold flex-1 text-center text-BLUE_500">برند</li>
            <li className="font-bold flex-1 text-center text-BLUE_500">مدل</li>
            <li className="font-bold flex-1 text-center text-BLUE_500">تیپ</li>
            <li className="font-bold flex-1 text-center text-BLUE_500">سال ساخت</li>
            <li className="font-bold flex-[1.6] text-center text-BLUE_500">عملیات</li>
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
        {<div className={`fixed top-0 right-0 w-full h-full bg-[#00000050] transition-all duration-1000 z-[9999] ${modalState?"translate-y-[0%]":"translate-y-[100%]"}`} onClick={closeCarModalHandler}              id={"ChoseCar"}
        >
          <SelectCarModal modalPosition={true}/>
        </div>}
      </div>
  );
};

export default CreateMyMotor;
