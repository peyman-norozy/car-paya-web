const SelectInputCard = (props) => {
  return (
    <li
      onClick={(event) => {
        props.onclick(event);
        const innerText = event.currentTarget.innerText;
        props.setNewOption(innerText);
        props.setNewHeightOptions(false);
      }}
      value={props.item.value}
      id={props.id}
      className="pr-2 py-2 cursor-pointer hover:bg-[#bbb]"
    >
      {props.item.option}
    </li>
  );
};

export default SelectInputCard;
