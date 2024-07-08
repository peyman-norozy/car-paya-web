import Image from "next/image";

const RedChevron = (props) => {
  const { custoCllasses } = props;

  return (
    <div className={custoCllasses}>
      <Image
        src="/assets/icons/down 1.svg"
        alt="chevron"
        priority={true}
        width={14}
        height={14}
      />
    </div>
  );
};

export default RedChevron;
