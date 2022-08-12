import { ReactNode } from "react";
import style from "./Button.module.scss";

function Button({
  children,
  type,
}: {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}) {
  return (
    <button type={type ? type : "button"} className={style.button}>
      {children}
    </button>
  );
}

export default Button;
