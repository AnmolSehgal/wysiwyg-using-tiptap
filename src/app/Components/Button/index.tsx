import { ButtonHTMLAttributes } from "react";

import style from "./button.module.css";

const Button = (props: ButtonHTMLAttributes<HTMLElement>) => {
  const { children, className } = props;
  return (
    <button {...props} className={`${style.button} ${className || ""}`}>
      {children}
    </button>
  );
};

export default Button;
