"use client";
import iransFlag from "@/public/assets/images/iransFlag.png";
import Image from "next/image";
import { API_PATHS, INTERNAL_PATHS } from "@/configs/routes.config";
import { usePathname, useRouter } from "next/navigation";
import { deleteData } from "@/utils/api-function-utils";
import machinTag from "@/public/assets/images/machinTag.svg"

import nProgress from "nprogress";

const CertificateCard = ({ data, setDeleteModalState, setDeleteModalId }) => {
  const router = useRouter();
  const pathName = usePathname();
  
  const clickRecordsHandler = () => {
    nProgress.start();
    router.push(pathName + "/" + data.id + "/" + data.tipId + "/history");
  };
  const editClickHandler = () => {
    nProgress.start();
    router.push(pathName + INTERNAL_PATHS.EDIT + "?product=" + data.id);
  };
  return (
    <div className="bg-[#383838A3] flex flex-col gap-5 rounded-2xl p-4">
      <div className="flex flex-col-reverse size1570:flex-row gap-4 items-end">
        <div className="flex flex-col items-start gap-4 w-full ">
          <div className="text-[#FEFEFE] flex gap-1 items-center border-r-4 pr-2 ">
            <span className="font-bold">{data.car_model_title}</span>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="bg-[#383838] flex flex-col gap-1 rounded-lg w-full min-w-32 h-16 p-2">
              <span className="font-bold text-[#FEFEFE]">برند</span>
              <span className="text-14 text-[#FEFEFE]">
                {data.car_brand_title}
              </span>
            </div>
            <div className="bg-[#383838] flex flex-col gap-1 rounded-lg w-full min-w-32 h-16 p-2">
              <span className="font-bold text-[#FEFEFE]">تیپ</span>
              <span className="text-14 text-[#FEFEFE]">{data.car_tip_title}</span>
            </div>
            <div className="bg-[#383838] flex flex-col gap-1 rounded-lg w-full min-w-32 h-16 p-2">
              <span className="font-bold text-[#FEFEFE]">سال ساخت</span>
              <span className="text-14 text-[#FEFEFE]">{data.year}</span>
            </div>
            <div className="bg-[#383838] flex flex-col gap-1 rounded-lg w-full min-w-32 h-16 p-2">
              <span className="font-bold text-[#FEFEFE]">رنگ</span>
              <span className="text-14 text-[#FEFEFE]">{data.info.color.title}</span>
            </div>
          </div>
        </div>
        <Image
          src={
            process.env.BASE_API + "/web" + API_PATHS.FILE + "/" + data.image_id
          }
          className="w-full h-auto max-w-[200px] mx-auto"
          width={200}
          height={150}
        />
      </div>
      {data.type==="MOTOR"?
      <div className="bg-[#FEFEFE] text-[#0E0E0E] flex-col w-28 rounded-md overflow-hidden border border-black">
      <div className="flex">
        <span className="w-full tracking-[16px] flex justify-center items-center pl-2 font-bold">{data.info.plaque[0]}</span>
        <Image className="" src={machinTag} width={15} height={30}/>
      </div>
      <span className="w-full tracking-[12px] flex justify-center items-center pl-2 font-bold">{data.info.plaque[1]}</span>
    </div>
      :<div className="bg-white flex items-center justify-between border border-black font-bold text-14 text-black max-w-[272px] rounded-lg overflow-hidden my-2">
        <div className="w-full p-2 text-14 font-bold flex justify-around">
          <span>{data.info.plaque[3]}</span>
          <span className="h-5 w-px bg-[#000000]"></span>
          <span>{data.info.plaque[2]}</span>
          <span>{data.info.plaque[1]}</span>
          <span>{data.info.plaque[0]}</span>
        </div>
        <div className="w-16 h-full bg-[#3360FF] flex items-center justify-center py-2">
          <Image
            className="w-[30px] h-5"
            src={iransFlag}
            width={30}
            height={20}
          />
        </div>
      </div>}
      <div className="flex gap-4">
        <button
          className="flex items-center justify-center gap-2 bg-[#F66B34] text-[#FEFEFE] h-10 rounded-lg py-2 text-12 size882:text-14 font-medium w-full"
          onClick={editClickHandler}
        >
          ویرایش
        </button>
        <button
          className="flex items-center justify-center gap-2 bg-[#F66B3429] text-[#F66B34] h-10 rounded-lg py-2 text-12 size882:text-14 font-medium w-full"
          onClick={clickRecordsHandler}
        >
          سوابق
        </button>
        <button
          className="flex items-center justify-center gap-2 border border-[#F66B34] text-[#F66B34] h-10 rounded-lg py-2 text-12 size882:text-14 font-medium w-full"
          onClick={() => {
            setDeleteModalState(true);
            setDeleteModalId(data.id);
          }}
        >
          حذف
        </button>
      </div>
    </div>
  );
};

export default CertificateCard;
