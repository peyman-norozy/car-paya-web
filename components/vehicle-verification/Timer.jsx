import React, { useEffect, useState, useRef } from "react";

const Timer = (props) => {
  const [second, setSecond] = useState(59);
  const [minute, setMinute] = useState(1);
  const clearTimerRef = useRef();

  useEffect(() => {
    if (props.reloadTimer === 1) {
      setMinute(1);
      setSecond(59);
    }
    clearTimerRef.current = setTimeout(() => {
      setSecond((prevState) => prevState - 1);
      if (second === 0 || second < 0) {
        setSecond(59);
        setMinute((prevState) => prevState - 1);
      }
    }, 1000);
    if (minute === 0 && second === 0) {
      clearTimeout(clearTimerRef.current);
    }
  }, [second, minute, props.reloadTimer]);

  return (
    <div className={"w-[38px]"}>
      <p className="font-bold text-start text-RED_400">
        {second} : {minute}
      </p>
    </div>
  );
};

export default React.memo(Timer);
