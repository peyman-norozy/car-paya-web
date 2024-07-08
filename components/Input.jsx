import React from "react";

const Input = (props, ref) => {
  const {
    type,
    placeholder,
    className,
    maxlength,
    on_change,
    onKeyDown,
    on_click,
    id,
    plaqueid,
    kilometerid,
    name,
    pattern,
    readOnly,
    value,
    icon,
    autoFocus
  } = props;

  return (
    <>
      <input
          autoFocus={autoFocus}
          type={type}
        placeholder={placeholder}
        className={className}
        id={id}
        plaqueid={plaqueid}
        kilometerid={kilometerid}
        name={name}
        pattern={pattern}
        maxLength={maxlength}
        readOnly={readOnly}
        value={value}
        onChange={on_change}
        onClick={on_click}
        onKeyDown={onKeyDown}
        ref={ref}
      />
      {icon}
    </>
  );
};

export default React.forwardRef(Input);
