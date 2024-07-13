import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { INTERNAL_PATHS } from "@/configs/routes.config";
import "reactjs-popup/dist/index.css";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setTipId } from "@/store/todoSlice";
import Button from "@/components/Button";

const EditAndDeleteIcon = (props) => {
  const router = useRouter();
  const pathName = usePathname();
  const ref = useRef();
  const editClickHandler = (event) => {
    router.push(pathName + INTERNAL_PATHS.EDIT + "?product=" + event.target.id);
  };

  const clickRecordsHandler = () => {
    router.push(pathName + "/" + props.id + "/" + props.tipId + "/history");
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
        <Button
          type={"button"}
          class_name={
            "w-[57px] h-[40px] text-[12px] shadow-[0_0_2px_0_rgba(177,177,177,1)] rounded-[5px]"
          }
          on_click={clickRecordsHandler}
        >
          سوابق
        </Button>
      </div>
      {props.forceComplete === "true" ? (
        <Button
          type={"button"}
          class_name={
            "w-[107px] h-[40px] text-[12px] shadow-[0_0_2px_0_rgba(177,177,177,1)] rounded-[5px]"
          }
        >
          تکمیل اطلاعات
        </Button>
      ) : (
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
      )}
    </div>
  );
};

export default EditAndDeleteIcon;
