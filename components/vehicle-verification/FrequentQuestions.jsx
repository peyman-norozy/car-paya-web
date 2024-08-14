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
        <div className={'flex flex-col items-center w-full m-auto'}>
            <h3 className={'text-20 mb-[1.8rem]'}>سوالات متداول</h3>
            <ul className={'w-full flex flex-col gap-6'}>
                {data.map((item, index) => <FrequentQuestionCard key={index} title={item.title}/>)}
            </ul>
        </div>
    );
};

export default FrequentQuestions;