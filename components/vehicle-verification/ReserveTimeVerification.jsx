import React, {useState} from 'react';

const ReserveTimeVerification = (props) => {
    const {data} = props
    const {optionIsOpen , setOptionIsOpen} = props
    const pp = [1, 2, 3, 44, 5]
    const yy = [1,2,3,4]
    const weekDay = data && new Date(data[0]*1000).toLocaleDateString('fa-IR' , {weekday: 'long'});

    console.log(data)
    const openOptionHandler = (index) => {
        setOptionIsOpen(prevState => prevState === index ? null : index)
    }
    return (
        <div className={'grid grid-cols-1 size666:grid-cols-2 gap-4'}>
            <div className={'bg-[#FFF0F0] col-span-full rounded-lg py-2 px-3.5 flex items-center justify-between'}>
                <p>۸:۰۰ تا ۱۲:۰۰ پیشنهاد ما</p>
                <p className={'text-18'}>{weekDay}</p>
            </div>
            {data && data[1].map((item, index) => <div className={' rounded-lg border border-[#CDCDCD] h-fit'} key={index}>
                <div
                    onClick={() => openOptionHandler(item.id)}
                     className={'flex items-center justify-between px-4 py-5'}>
                    <p className={'text-[13px]'}>{item.start_time} تا {item.end_time}</p>
                    <i className={'cc-arrow-down'}/>

                </div>
                {optionIsOpen === item.id && <div className={'grid grid-cols-2 place-content-center border-t border-t-[#EBEDF9] w-[85%] m-auto justify-items-center py-3 gap-y-4'}>
                    {data && data[1].map((item, index) => <div key={index} className={'flex items-center p-2 border-b border-b-[#F5F6FF] gap-6'}>
                        <p>۱۳:۰۰</p>
                        <div className={'rounded-[50%] border border-[#EBEDF9] w-6 h-6 flex item-center justify-center'}>
                            <div className={'w-[18px] h-[18px] m-auto rounded-[50%] bg-[#EBEDF9]'}></div>
                        </div>
                    </div>)}
                </div>}
            </div>)}
            <div className={'flex items-center gap-2'}>
                <p className={'text-14 text-[#212B5E]'}>در صورت انتخاب بازده زمانی 16:00 - 18:00 افزایش قیمت به دلیل پیک
                    درخواست.</p>
            </div>
        </div>
    );
};

export default ReserveTimeVerification;