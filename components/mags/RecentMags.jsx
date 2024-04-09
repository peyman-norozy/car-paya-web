import Image from "next/image";
import Link from 'next/link'

const RecentMags = ({data}) => {
  console.log(data);
  return (
    <div className="grid grid-cols-2 h-[566px] gap-[12px] mt-[1.5rem]">
      <Link href={`/mags/${data.data.slice(0,3)[0].mag_category_id}/${data.data.slice(0,3)[0].slug}`} className="row-start-1 row-end-3 place-self-stretch  rounded-10 overflow-hidden relative shadow-[0_0_5px_0_rgba(0,0,0,0.4)]">
        <Image  src={process.env.BASE_API + '/web/file/' + data.data.slice(0,3)[0].image_id} alt="" width={664} height={520} className="h-full w-full" />
        <div className="flex items-end justify-between  p-[1.5rem] absolute bottom-0 w-full bg-[linear-gradient(180deg,_#3F445F70,_#2B3048)]">
          <div>
            <span className="text-20 line-clamp-1 text-white font-bold">
              {data.data.slice(0,3)[0].title}
            </span>
          </div>
        </div>
      </Link>
      <Link href={`/mags/${data.data.slice(0,3)[1].mag_category_id}/${data.data.slice(0,3)[1].slug}`} className="rounded-10 overflow-hidden relative shadow-[0_0_5px_0_rgba(0,0,0,0.4)]">
        <Image src={process.env.BASE_API + '/web/file/' + data.data.slice(0,3)[1].image_id} alt="" width={664} height={382} className="h-full w-full" />
        <div className="flex items-end justify-between p-[1.5rem] absolute bottom-0 w-full bg-[linear-gradient(180deg,_#3F445F70,_#2B3048)]">
          <div>
            <span className="text-20 line-clamp-1 text-white font-bold">
            {data.data.slice(0,3)[1].title}            </span>
          </div>
        
        </div>
      </Link>
      <Link href={`/mags/${data.data.slice(0,3)[2].mag_category_id}/${data.data.slice(0,3)[2].slug}`} className="rounded-10 overflow-hidden relative shadow-[0_0_5px_0_rgba(0,0,0,0.4)]">
        <Image  src={process.env.BASE_API + '/web/file/' + data.data.slice(0,3)[2].image_id} alt="" width={664} height={382} className="h-full w-full" />
        <div className="flex flex-col justify-end gap-[0.25rem] p-[1.5rem] absolute bottom-0 w-full bg-[linear-gradient(180deg,_#3F445F70,_#2B3048)]">
        <span className="text-14 line-clamp-1 break-words text-white font-bold">
        {data.data.slice(0,3)[2].title}            </span>
        
          
        </div>
      </Link>
      
    </div>
  );
};

export default RecentMags;
