const Label = (props) => {
  const { htmlFor, text, styling } = props;
  return (
    <>
      <label htmlFor={htmlFor} className={styling}>
        {text}
      </label>
    </>
  );
};

export default Label;
