const SelectSearchInputCard = (props) => {
  return (
    <li
      onClick={(event) => {
        const innerText = event.currentTarget.innerText;
        props.setNewOption(innerText);
        props.setNewHeight(false);
        props.setNewOptionId(event.target.value);
        props.onclick(event);
      }}
      value={
        props.item.shamsi && props.item.gregorian
          ? `${props.item.shamsi}-${props.item.gregorian}`
          : props.item.id
      }
      slug={props.item.slug}
      id={props.id}
      imageid={props.imageid}
      logo={props.item.logo}
      className={`pr-2 py-2 cursor-pointer hover:bg-[#bbb] ${
        props.selected ? "bg-[#bbb]" : ""
      }`}
    >
      {props.item.shamsi && props.item.gregorian
        ? `${props.item.shamsi}-${props.item.gregorian}`
        : props.item.title}
    </li>
  );
};

export default SelectSearchInputCard;
