import Image from "next/image";

const SiteIcon = () => {
  return (
    <div className="flex justify-center mt-[60px]">
      <Image
        src={"/assets/icons/Image-1.svg"}
        alt={"site icon"}
        priority={true}
        width={180}
        height={180}
      />
    </div>
  );
};

export default SiteIcon;
