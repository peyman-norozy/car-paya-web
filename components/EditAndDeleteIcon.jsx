import Image from "next/image";
import {notFound, usePathname, useRouter} from "next/navigation";
import {API_PATHS, INTERNAL_PATHS} from "@/configs/routes.config";
import "reactjs-popup/dist/index.css";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import {setRecordModalState, setTipId, setVehicleId} from "@/store/todoSlice";
import Button from "@/components/Button";
import {getData} from "@/utils/client-api-function-utils";
import {error} from "@/utils/function-utils";

const EditAndDeleteIcon = (props) => {
  const router = useRouter();
  const pathName = usePathname()
  const ref = useRef();
  const dispatch = useDispatch();
  const editClickHandler = (event) => {
    // const route = router.asPath.split("?")[0];
    router.push(pathName + INTERNAL_PATHS.EDIT + "?product=" + event.target.id);
  };

  const clickRecordsHandler = () => {
    dispatch(setRecordModalState(true));
    dispatch(setVehicleId(props.id))
    dispatch(setTipId(props.tipId))
  };

  return (
    <div className={`flex items-center justify-center flex-[1.6] gap-2`}>
        <div>
            {/*<Popup*/}
            {/*    ref={ref}*/}
            {/*    trigger={*/}
            {/*        <Image*/}
            {/*            src={"/assets/icons/data.svg"}*/}
            {/*            className="button cursor-pointer"*/}
            {/*            alt={"data icon"}*/}
            {/*            width={24}*/}
            {/*            height={24}*/}
            {/*            onClickCapture={clickRecordsHandler}*/}
            {/*            onMouseEnter={() => ref.current.open()}*/}
            {/*            onMouseLeave={() => ref.current.close()}*/}
            {/*        />*/}
            {/*    }*/}
            {/*    position="top center"*/}
            {/*    closeOnDocumentClick*/}
            {/*>*/}
          {/*<span className={"inline-block w-full text-center font-thin text-14"}>*/}
          {/*  سوابق*/}
          {/*</span>*/}
          {/*  </Popup>*/}
            <Button type={"button"} class_name={"w-[57px] h-[40px] text-[12px] shadow-[0_0_2px_0_rgba(177,177,177,1)] rounded-[5px]"} on_click={clickRecordsHandler}>
                سوابق
            </Button>
        </div>
        {
            props.forceComplete === "true"?
                <Button type={"button"} class_name={"w-[107px] h-[40px] text-[12px] shadow-[0_0_2px_0_rgba(177,177,177,1)] rounded-[5px]"}>
                    تکمیل اطلاعات
                </Button>
                :
                <div className="flex  gap-4 justify-center items-center">
                    <Image
                        src={"/assets/icons/delete.svg"}
                        className="cursor-pointer"
                        alt="delete icon"
                        width={20}
                        height={20}
                    />
                    <Image
                        src={"/assets/icons/edit-tool.svg"}
                        className="cursor-pointer"
                        alt={"edit icon"}
                        id={props.id}
                        width={20}
                        height={20}
                        onClick={editClickHandler}
                    />
                </div>
        }
    </div>
  );
};

export default EditAndDeleteIcon;
