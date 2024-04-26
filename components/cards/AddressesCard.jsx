import React, {useCallback, useRef, useState} from 'react';
import Image from "next/image";
import useClickOutside from "@/hook/useClickOutside";
import AddressModal from "@/components/modal/AddressModal";

const AddressesCard = () => {
    const [addressModalState, setAddressModalState] = useState(false)
    const accontRef = useRef();
    const close = useCallback(() => setAddressModalState(false), []);
    useClickOutside(accontRef, close);

    const clickCrudeHandler = () => {
        setAddressModalState(prevState => !prevState)
    }


    return (
        <li className={"flex justify-between shadow-[0_0_6px_0_rgba(200,200,200,1)] p-[16px] rounded-10 relative"}>
            <div className={"flex-1"}>
                <ul className={"flex flex-col justify-between h-full gap-4 font-light"}>
                    <li className={"flex items-center gap-2"}>
                        <Image src={"/assets/icons/addressLocation.svg"} alt={"icon"} width={20} height={20}/>
                        <div>
                            <span className={"ml-1"}>آدرس گیرنده:</span>
                            <span>تهران-پاسداران خیابان پایدار فرد کوچه گلستان ۸</span>
                        </div>
                    </li>
                    <li className={"flex items-center gap-2"}>
                        <Image src={"/assets/icons/packet.svg"} alt={"icon"} width={20} height={20}/>
                        <div>
                            <span className={"ml-1"}>کد پستی:</span>
                            <span>۲۴۲۴۲۳۵۳۵</span>
                        </div>
                    </li>
                    <li className={"flex items-center gap-2"}>
                        <Image src={"/assets/icons/Calling 2.svg"} alt={"icon"} width={20} height={20}/>
                        <div>
                            <span className={"ml-1"}>شماره تماس:</span>
                            <span>۰۹۲۱۲۰۷۴۵۶۷</span>
                        </div>
                    </li>
                    <li className={"flex items-center gap-2"}>
                        <Image src={"/assets/icons/Profile 2.svg"} alt={"icon"} width={20} height={20}/>
                        <div>
                            <span className={"ml-1"}>گیرنده:</span>
                            <span>شیدا داوری</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={"flex flex-col justify-between w-[200px]"}>
                <Image src={"/assets/icons/Menu Kebab.svg"} alt={"icon"} width={24} height={24}
                       className={"self-end cursor-pointer"} onClick={clickCrudeHandler} ref={accontRef}/>
                <Image src={"/assets/images/image 22.png"} alt={"icon"} width={165} height={117} className={"ml-5"}/>
            </div>
            {
                addressModalState && <AddressModal/>
            }
        </li>

    );
};

export default AddressesCard;