import LoginLink from "@/components/LoginLink";
import HeaderLogo from "@/components/HeaderLogo";
import BasketLink from "@/components/BasketLink";
import {useSelector} from "react-redux";
import {useRouter} from "next/navigation";
import {useCallback, useEffect, useRef, useState} from "react";
import useClickOutside from "@/hook/useClickOutside";
import NavigationBar from "@/components/NavigationBar";
import UserPanelAttribute from "@/components/UserPanelAttribute";
import CardPay from "@/components/CardPay";

const DesktopHeader = (props) => {
    const loginState = useSelector((state) => state.todo.loginState);
    const [newLoginState, setNewLoginState] = useState(false);
    const router = useRouter();
    const accontRef = useRef();
    const close = useCallback(() => setNewLoginState(false), []);
    useClickOutside(accontRef, close);
    const accountClickHandler = () => {
        setNewLoginState((prevState) => !prevState);
    };

    useEffect(() => {
        setNewLoginState(false);
    }, [router]);

    return (
        <header
            className={`${props.className} h-[74px] flex justify-between items-center fixed top-0 right-0 left-0 w-[100wh] bg-white z-[10000] drop-shadow-2xl`}
        >
            <div
                className={`h-full font-light flex justify-between items-center px-[30px] w-full max-w-[1600px] m-auto bg-white z-[10000]`}>
                <div className="flex items-center gap-[40px]">
                    <HeaderLogo/>
                    <NavigationBar class_name={"flex gap-[20px]"} childrenProps={props.childrenProps}/>
                </div>
                <div className="flex items-center size868:gap-[90px] gap-[50px]">
                    <div className="flex items-center gap-[14px]">
                        <CardPay/>
                        <BasketLink/>
                        {loginState ? (
                            <LoginLink/>
                        ) : (
                            <div className="relative">
              <span
                  className="bg-gray-300 py-1 px-4 rounded-lg cursor-pointer text-14"
                  onClick={accountClickHandler}
                  ref={accontRef}
              >
                حساب کاربری
              </span>
                                {newLoginState && (
                                    <div
                                        className="absolute bottom-[-88px] bg-stone-200 w-full rounded-lg flex flex-col overflow-hidden">
                                        <UserPanelAttribute/>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DesktopHeader;
