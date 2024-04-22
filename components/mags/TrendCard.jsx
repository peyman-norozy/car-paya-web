import { API_PATHS } from "@/configs/routes.config";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TrendCard = (props) => {
  const { data } = props;
  return (
    <Link href={`/mags/${data.mag_category_id}/${data.slug}`} className="bg-[#F6F6F6] shadow-[0_0_4px_0_rgba(168,168,168,0.25)] p-2 flex items-center gap-4 rounded-lg">
      <Image
        src={
          process.env.BASE_API + "/web" + API_PATHS.FILE + "/" + data.image_id
        }
        alt=""
        width={144}
        height={88}
        className="rounded-lg"
      />
      <div className="text-12">
        <h6 className="font-bold line-clamp-2 mb-1">{data.title}</h6>
        <p className="line-clamp-2 text-[#444343]">{data.description}</p>
      </div>
    </Link>
  );
};

export default TrendCard;
