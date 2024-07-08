import React from 'react';
import FrequentQuestionCard from "@/components/vehicle-verification/FrequentQuestionCard";

const FrequentQuestions = () => {
    const data = [
        {title: 'لغو درخواست کارشناسی چه زمانی امکان‌پذیر است؟ آیا در صورت لغو، هزینه آن بازگردانده می‌شود؟'},
        {title: 'لغو درخواست کارشناسی چه زمانی امکان‌پذیر است؟ آیا در صورت لغو، هزینه آن بازگردانده می‌شود؟'},
        {title: 'لغو درخواست کارشناسی چه زمانی امکان‌پذیر است؟ آیا در صورت لغو، هزینه آن بازگردانده می‌شود؟'},
        {title: 'لغو درخواست کارشناسی چه زمانی امکان‌پذیر است؟ آیا در صورت لغو، هزینه آن بازگردانده می‌شود؟'},
        {title: 'لغو درخواست کارشناسی چه زمانی امکان‌پذیر است؟ آیا در صورت لغو، هزینه آن بازگردانده می‌شود؟'},
        {title: 'لغو درخواست کارشناسی چه زمانی امکان‌پذیر است؟ آیا در صورت لغو، هزینه آن بازگردانده می‌شود؟'},
        {title: 'لغو درخواست کارشناسی چه زمانی امکان‌پذیر است؟ آیا در صورت لغو، هزینه آن بازگردانده می‌شود؟'},
    ]
    return (
        <div className={'flex flex-col items-center w-[95%] size882:w-full m-auto mt-[44px] size690:mt-[4rem]'}>
            <h3 className={'text-20 mb-[1.8rem]'}>سوالات متداول</h3>
            <ul className={'w-full '}>
                {data.map((item, index) => <li key={index} className={'mb-[1rem] w-full even:bg-[#F2F2F266] odd:bg-[#E0E0E066] rounded-lg'}><FrequentQuestionCard title={item.title}/></li>)}
            </ul>
        </div>
    );
};

export default FrequentQuestions;