import arrow from "@/public/assets/icons/Arrow-Down.svg";
import Image from "next/image";

const VerificationOptionAccordian = (props) => {
  const { option, description, id, isOpen, onClick } = props;
  return (
    <ul className="text-[#505050] leading-[2.5rem]">
      <li onClick={onClick} className="flex items-center justify-between">
        <p className="text-14">{option}</p>
          {description && <div className={`${isOpen === id ? "rotate-180" : ""}`}>
              <Image src={arrow} alt="" width={10} height={10}/>
          </div>}
      </li>
        {isOpen === id && (
            <ul className="leading-[1.5rem]  py-[0.25rem]">
                {description && description.map((item, index) => (
            <li key={index} className="text-[13px]">
              {item.descriptionList}
            </li>
          ))}
        </ul>
      )}
    </ul>
  );
};

export default VerificationOptionAccordian;
