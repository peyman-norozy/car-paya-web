import React, {useState} from 'react';

const FrequentQuestionCard = (props) => {
    const {title} = props
    const [showDetail, setShowDetail] = useState(false)
    return (
            <div onClick={() => setShowDetail(prevState => !prevState)} className={`rounded-lg p-6  w-full ${showDetail && 'border-r-[2px] border-BLUE_600'}`}>
                <div className={'flex items-center justify-between text-12 size882:text-16'}><p>{title}</p>
                    <i className={'cc-arrow-down'}/></div>
                {showDetail && <p className={'text-10 size690:text-14 mt-5'}>لغو درخواست کارشناسی چه زمانی امکان‌پذیر است</p>}
            </div>
    );
};

export default FrequentQuestionCard;