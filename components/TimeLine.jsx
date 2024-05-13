import React from 'react';

const TimeLine = (props) => {
    const {time , isSelected , onclick} = props
    return (
        <div className={`cursor-pointer rounded-5 py-[0.4rem] px-[0.75rem]  ${isSelected?'bg-green-700 text-white' : 'bg-white' +
            ''}`} onClick={onclick}>

            {time.start_time}  تا  {time.end_time}
        </div>
    );
};

export default TimeLine;