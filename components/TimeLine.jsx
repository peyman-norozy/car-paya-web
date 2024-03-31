import React from 'react';

const TimeLine = (props) => {
    const {time} = props
    return (
        <div className='cursor-pointer rounded-5 py-[0.4rem] px-[0.75rem] bg-white'>
            {time}
        </div>
    );
};

export default TimeLine;