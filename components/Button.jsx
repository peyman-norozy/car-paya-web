const Button = (props) => {
  const { type, class_name, text, icon, on_click, disabled_btn, key_Value } =
    props;
  return (
    <>
      <button
        type={type}
        className={class_name}
        onClick={on_click}
        disabled={disabled_btn}
        key={key_Value}
      >
        {text}
        {icon}
        {props.children && props.children}
      </button>
    </>
  );
};

export default Button;
