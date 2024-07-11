import { Fragment } from "react";
import Image from "next/image";

const SupportContact = () => {
  return (
    <Fragment>
      <Image
        src="/assets/icons/icons8-phone-64 1.svg"
        alt="back suport"
        width={32}
        height={32}
      />
      <div className="flex flex-col size868:text-14 text-12 text-gray_nav ">
        <span>پشتیبانی مشتریان</span>
        <span>09121122020</span>
      </div>
    </Fragment>
  );
};

export default SupportContact;
