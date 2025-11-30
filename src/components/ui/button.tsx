import "./button.css";
import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;

const Button = ({
  children,
  type = "button",
  disabled = false,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button type={type} disabled={disabled} className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
