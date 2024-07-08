import Image from "next/image";

const UserNameProfile = () => {
  return (
    <div>
      <Image
        src="/assets/icons/profile.svg"
        alt="user icon"
        width={100}
        height={100}
      />
      <span>پیمان نوروزی</span>
    </div>
  );
};

export default UserNameProfile;
