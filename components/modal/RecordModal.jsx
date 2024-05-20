import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {setRecordModalCreateState,setRecordModalState} from "@/store/todoSlice";
import React, {useEffect, useRef, useState} from "react";
import Button from "@/components/Button";
import RecordModalCreatedCard from "@/components/cards/RecordModalCreatedCard";
import {getData} from "@/utils/client-api-function-utils";
import {API_PATHS} from "@/configs/routes.config";
import {notFound} from "next/navigation";
import {error} from "@/utils/function-utils";

const m = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const RecordModal = (props) => {
  const dispatch = useDispatch();
  const newRoute = useRef(null)
  const vehicleId = useSelector(item=>item.todo.vehicleId)
  const [newVehicleHistoryData,setNewVehicleHistoryData] = useState([])
  const closeRecordModalHandler = () => {
    dispatch(setRecordModalState(false));
  };

  const addRecordHandler = () => {
    dispatch(setRecordModalCreateState(true));
    dispatch(setRecordModalState(false));

  };

  useEffect(() => {
    if(props.params.includes("my-car")){
      newRoute.current = "/car-history"
    }else if(props.params.includes("my-motorcycle")){
      newRoute.current = "/motor-history"
    }else if(props.params.includes("my-heavy-car")){
      newRoute.current = "/heavyCar-history"
    }
    (
        async ()=>{
          const fetchData = await getData(`${API_PATHS.USERPANEL}${newRoute.current}/index/${vehicleId}`)
          if (fetchData.status === 200) {
            setNewVehicleHistoryData(fetchData.data.data)
          } else if (fetchData.response.status === 404) {
            console.log(fetchData)
            notFound()
          } else if (fetchData.response.status === 422) {
            for (let key in fetchData.response.data.errors) {
              error(fetchData.response.data.errors[key][0]);
            }
          }
        }
    )()
  }, [props.params,vehicleId]);

  return (
    <div className="fixed w-full h-full bg-[#ffffff69] inset-0 m-auto z-[99999]">
      <div className="fixed w-[90%] h-[90%] bg-white shadow-[0_0_6px_0_rgba(177,177,177,1)] inset-0 top-[-10px] m-auto rounded-10">
        <div>
          <Image
            src={"/assets/icons/close 1.svg"}
            className="m-2 cursor-pointer"
            alt={"close icon"}
            width={24}
            height={24}
            onClick={closeRecordModalHandler}
          />
        </div>
        <div className="flex flex-col">
          <div className="pr-[60px] pt-[10px]">
            <Button
              type="button"
              class_name="flex items-center gap-2 bg-[#d52826] text-white px-[20px] py-[5px] rounded-5 w-[160px]"
              on_click={addRecordHandler}
            >
              <span>افزودن سابقه</span>
              <span className="text-20">+</span>
            </Button>
          </div>
          <div className="mt-4 flex flex-col gap-4">
            <ul className="size800:flex hidden justify-between px-[16px] py-2 size1190:text-16 text-14 text-stone-800 rounded-10">
              <li className="font-bold flex-1 text-center">#</li>
              <li className="font-bold flex-1 text-center">تاریخ</li>
              <li className="font-bold flex-1 text-center">
                کیلومتر فعلی خودرو
              </li>
              <li className="font-bold flex-1 text-center">عملیات</li>
            </ul>
            <div
              className={
                "h-[calc(100vh-250px)] overflow-y-auto flex flex-col gap-4 px-8"
              }
            >
              {newVehicleHistoryData.map((item,index) => (
                <RecordModalCreatedCard key={item.id} item={item} index={index}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordModal;
