import red_check from '@/public/assets/icons/red-check.svg'
import Image from 'next/image';

const CheckInput = (props) => {
  const {isSelected , id}= props
    return (
        <div className="w-[1.25rem] h-[1.25rem] border-[1px] border-[#6d6c6c] rounded-[50%] relative">
         {isSelected === id && <Image src={red_check} alt='' height={20} width={20} className='absolute bottom-[15%] left-[13%]'/>}
        </div>
    );
};

export default CheckInput;