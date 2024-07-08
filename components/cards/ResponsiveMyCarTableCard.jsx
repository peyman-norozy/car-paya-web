import Image from "next/image";
import { API_PATHS } from "@/configs/routes.config";
import EditAndDeleteIcon from "@/components/EditAndDeleteIcon";

const ResponsiveMyCarTableCard = (props) => {
  return (
    <div className="shadow-[0_0_6px_0_rgba(177,177,177,1)] rounded-10 text-14 flex flex-col gap-2 px-4 py-4">
      <div className="flex justify-between items-center">
        <span className="">
          <span className="bg-stone-200 px-3 py-1 rounded-10">
            {props.index +
              1 +
              ((props.page === null ? 1 : props.page) - 1) *
                (props.perPage === null ? 10 : props.perPage)}
          </span>
        </span>
        <span>
          <Image
            src={
              process.env.BASE_API +
              "/web" +
              API_PATHS.FILE +
              "/" +
              props.data.car_image_id
            }
            width={80}
            height={80}
            className={"rounded-10"}
            alt={"car image"}
          />
        </span>
        <span>{props.data.car_brand_title}</span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <span>مدل</span>
          <span> {props.data.car_model_title}</span>
        </div>
        <div className="flex justify-between">
          <span>تیپ</span>
          <span> {props.data.car_tip_title}</span>
        </div>
        <div className="flex justify-between">
          <span>سال ساخت</span>
          <span>{props.data.year}</span>
        </div>
      </div>
      <EditAndDeleteIcon
        containerClassName={"flex-row justify-end"}
        id={props.data.id} forceComplete={props.data.forceComplete}
      />
    </div>
  );
};

export default ResponsiveMyCarTableCard;
