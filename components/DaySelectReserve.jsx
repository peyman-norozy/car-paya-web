const DaySelectReserve = (props) => {
    return (
        <div onClick={props.onClick} className={`border-[1px] border-gray_light_border rounded-[0.5rem] flex items-center justify-between p-[1rem] w-full text-[13px] size516:text-[1rem] transition-colors duration-300 ease-in ${props.dayIsClicked === props.id ? 'bg-red_shop text-white' : ''}`}>
            <p>{props.day}</p>
            <p>{props.date}</p>
        </div>
    );
};

export default DaySelectReserve;