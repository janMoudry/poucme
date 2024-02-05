import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSecondary?: boolean;
  isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`  px-4 py-2 rounded-md transition-all duration-300 focus:outline-none bg-primary dark:bg-primary-dark text-700 w-full
        ${
          props.isSecondary
            ? "bg-transparent text-primary dark:text-primary-dark border-2 border-primary dark:border-primary-dark"
            : "shadow-md hover:shadow-lg text-white dark:hover:text-black  dark:text-black"
        }
        ${
          props.isDisabled
            ? "bg-gray-400 dark:bg-gray-600 text-gray-600 dark:text-gray-400 cursor-not-allowed"
            : ""
        }
        active:scale-95 active:opacity-30
        hover:scale-110
      ${props.className}
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
