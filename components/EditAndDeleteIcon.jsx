import Image from "next/image";
import { useRouter } from "next/router";
import { INTERNAL_PATHS } from "@/configs/routes.config";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setRecordModalState } from "@/store/HandleSlice";

const EditAndDeleteIcon = (props) => {
  const router = useRouter();
  const ref = useRef();
  const dispatch = useDispatch();
  const editClickHandler = (event) => {
    const route = router.asPath.split("?")[0];
    router.push(route + INTERNAL_PATHS.EDIT + "?product=" + event.target.id);
  };

  const clickRecordsHandler = () => {
    dispatch(setRecordModalState(true));
  };

  return (
    <div className={`flex items-center justify-center flex-1 gap-8`}>
      <div className="flex flex-col gap-4 justify-center items-center">
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
      <div>
        <Popup
          ref={ref}
          trigger={
            <Image
              src={"/assets/icons/data.svg"}
              className="button cursor-pointer"
              alt={"data icon"}
              width={24}
              height={24}
              onClickCapture={clickRecordsHandler}
              onMouseEnter={() => ref.current.open()}
              onMouseLeave={() => ref.current.close()}
            />
          }
          position="top center"
          closeOnDocumentClick
        >
          <span className={"inline-block w-full text-center font-thin text-14"}>
            سوابق
          </span>
        </Popup>
      </div>
    </div>
  );
};

export default EditAndDeleteIcon;
