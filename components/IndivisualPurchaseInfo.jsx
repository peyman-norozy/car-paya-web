import Image from "next/image";

const IndivisualPurchaseInfo = (props) => {
  return (
    <div className="p-[0.75rem] flex items-center gap-[0.75rem] bg-white rounded-[0.5rem]">
        <Image
          src={props.icon}
          height={40}
          width={40}
          alt=""
          className="p-[0.35rem] bg-purple-400 rounded-[50%]"
        />
        <h3 className="text-[12px]">{props.title}</h3>
    </div>
  );
};

export default IndivisualPurchaseInfo;
