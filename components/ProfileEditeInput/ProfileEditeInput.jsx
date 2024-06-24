import React from 'react';

const ProfileEditeInput = (props) => {
    return (
        <div className={"relative"}>
            <i className={`${props.icon} absolute text-[20px] top-[15px] right-[10px] border-l border-l-stone-500 pl-2`} />
            <input type={"text"} className={`border border-1 border-[#B0B0B0] rounded-[8px] h-[48px] w-full outline-none ${props.className ? props.className : "pr-[50px]"}`} value={props.value}/>
            <label className={"text-[12px] absolute top-[-9px] right-[10px] px-1 bg-white"}>{props.title}</label>
        </div>
    );
};

export default ProfileEditeInput;
