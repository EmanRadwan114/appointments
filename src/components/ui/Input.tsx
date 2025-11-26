import React from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?: string;
  className?: string;
  additionalClasses?: string;
}

const Input: React.FC<IProps> = ({
  type = "text",
  placeholder,
  className,
  additionalClasses,
  ...rest
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={
        className
          ? className
          : `bg-pink-50 py-1.5 px-3 rounded-sm focus-within:outline-1 focus-within:outline-pink-800 ${additionalClasses} placeholder:text-gray-500`
      }
      {...rest}
    />
  );
};

export default Input;
