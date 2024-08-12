'use client'
import iransFlag from "@/public/assets/images/iransFlag.png"
import Image from "next/image";
import { API_PATHS, INTERNAL_PATHS } from "@/configs/routes.config";
import { usePathname , useRouter } from "next/navigation";
import { deleteData } from "@/utils/api-function-utils";

const CertificateCard = ({data , fetchData}) => {
    const router = useRouter()
    const pathName = usePathname();
    
    const clickRecordsHandler = () => {
        router.push(pathName + "/" + data.id + "/" + data.tipId + "/history");
      };
      const editClickHandler = () => {
        router.push(pathName + INTERNAL_PATHS.EDIT + "?product=" + data.id);
      };
      const deleteClickHandler = async () => {
        await deleteData(`${process.env.BASE_API}/user-panel/vehicles/${data.id}`);
        await fetchData();
      };
    return ( 
        <div className="bg-[#383838A3] flex flex-col gap-5 rounded-2xl p-4">
            <div className="text-[#FEFEFE] flex gap-1 items-center"><span className="font-bold">{data.car_model_title}</span></div>
            <div className="flex flex-row gap-5 items-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#383838] flex flex-col gap-1 rounded-lg w-full min-w-32 h-16 p-2">
                  <span className="font-bold text-[#FEFEFE]">برند</span>
                  <span className="text-14 text-[#FEFEFE]">{data.car_brand_title}</span>
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
                  <span className="text-14 text-[#FEFEFE]">آبی روشن</span>
                </div>
              </div>
              <Image src={process.env.BASE_API +"/web" +API_PATHS.FILE +"/" + data.image_id} className="w-full h-auto max-w-[200px] m-auto" width={200} height={150}/>
            </div>
            <div className="bg-white flex items-center justify-between border border-black font-bold text-14 text-black max-w-[272px] rounded-lg overflow-hidden">
              <div className="w-full p-2 text-14 font-bold flex justify-around">
                <span>{data.info.plaque[3]}</span>
                <span className="h-5 w-px bg-[#000000]"></span>
                <span>{data.info.plaque[2]}</span>
                <span>{data.info.plaque[1]}</span>
                <span>{data.info.plaque[0]}</span>
              </div>
              <div className="w-16 h-full bg-[#3360FF] flex items-center justify-center py-2">
                <Image className="w-[30px] h-5" src={iransFlag} width={30} height={20}/>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                className="flex items-center justify-center gap-2 bg-[#F66B34] text-[#FEFEFE] h-10 rounded-lg py-2 text-14 font-medium w-full min-w-[160px]"
                onClick={editClickHandler}
              >
                ویرایش اطلاعات
              </button>
              <button
                className="flex items-center justify-center gap-2 bg-[#F66B3429] text-[#F66B34] h-10 rounded-lg py-2 text-14 font-medium w-full min-w-[160px]"
                onClick={clickRecordsHandler}
              >
                سوابق
              </button>
              <button
                className="flex items-center justify-center gap-2 border border-[#F66B34] text-[#F66B34] h-10 rounded-lg py-2 text-14 font-medium w-full min-w-[160px]"
                onClick={deleteClickHandler}
              >
                حذف
              </button>
            </div>
          </div>
     );
}
 
export default CertificateCard;