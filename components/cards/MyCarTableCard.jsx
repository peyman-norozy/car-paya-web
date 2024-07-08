import Image from "next/image";
import { API_PATHS } from "@/configs/routes.config";
import EditAndDeleteIcon from "@/components/EditAndDeleteIcon";
import CarBackgroundCard from "@/components/cards/CarBackgroundCard";
import Button from "@/components/Button";

const MyCarTableCard = (props) => {
    console.log(props.data.forceComplete)
  return (
    <CarBackgroundCard>
      <span className="flex-1 text-center size1190:text-14 text-12">
        <span className="bg-stone-200 px-3 py-1 rounded-10">
          {props.index +
            1 +
            ((props.page === null ? 1 : props.page) - 1) *
              (props.perPage === null ? 10 : props.perPage)}
        </span>
      </span>
      <span className="flex-1 flex justify-center">
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
      <span className="flex-1 text-center size1190:text-14 text-12">
        {props.data.car_brand_title}
      </span>
      <span className="flex-1 text-center size1190:text-14 text-12">
        {props.data.car_model_title}
      </span>
      <span className="flex-1 text-center size1190:text-14 text-12">
        {props.data.car_tip_title}
      </span>
      <span className="flex-1 text-center size1190:text-14 text-12">
        {props.data.year}
      </span>
        <EditAndDeleteIcon id={props.data.id} tipId={props.data.car_tip_id} forceComplete={props.data.forceComplete}/>
    </CarBackgroundCard>
  );
};

export default MyCarTableCard;
