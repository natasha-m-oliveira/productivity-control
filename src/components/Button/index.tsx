import { ReactNode } from 'react';
import style from './Button.module.scss';

function Button({
  children,
  type,
  onClick,
}: {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
}) {
  return (
    <button
      type={type ? type : 'button'}
      onClick={onClick}
      className={style.button}
    >
      {children}
    </button>
  );
}

export default Button;
