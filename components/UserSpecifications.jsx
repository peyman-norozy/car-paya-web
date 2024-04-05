import Image from "next/image";

const UserSpecifications = (props) => {
  return (
    <div className={`flex ${props.style}`}>
      <div className="flex flex-col justify-center items-center gap-1">
        <Image
          src="/assets/icons/profile.svg"
          alt="user icon"
          width={100}
          height={100}
        />
        <span>پیمان نوروزی</span>
      </div>
      <div>
        <Image
          src="/assets/icons/edit.svg"
          alt="edit icon"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default UserSpecifications;
