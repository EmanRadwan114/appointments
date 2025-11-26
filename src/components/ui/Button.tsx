import React, { type ReactNode } from "react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  additionalClasses?: string;
  clickHandler?: () => void;
}

const Button: React.FC<IProps> = ({
  children,
  className,
  additionalClasses,
  clickHandler,
  ...rest
}) => {
  return (
    <button
      onClick={clickHandler}
      className={
        className
          ? className
          : `text-white bg-pink-900 py-1.5 px-3 rounded-sm capitalize font-medium cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 ${additionalClasses}`
      }
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
