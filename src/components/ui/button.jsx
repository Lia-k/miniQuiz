import "./button.css";

const Button = ({
  children,
  type = "button",
  disabled,
  className,
  onClick,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
