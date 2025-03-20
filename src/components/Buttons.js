const Buttons = ({ addActive, onClickHandler, value, title }) => {
  return (
    <button
      onClick={onClickHandler}
      value={value}
      className={`btns ${addActive}`}
    >
      {title}
    </button>
  );
};

export default Buttons;
