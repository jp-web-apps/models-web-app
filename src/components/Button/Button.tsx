import { MouseEventHandler, ReactNode } from "react";

interface Props {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  outlined?: boolean;
  rounded?: boolean;
}

export function Button({
  children,
  type,
  className,
  disabled,
  onClick,
  outlined,
  rounded,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
      w-full
      px-5 py-2 
      text-sm text-center 
      ${
        outlined
          ? "text-pink-500 bg-transparent hover:bg-pink-500 hover:text-white border-2 border-pink-500 "
          : "text-white bg-pink-500 hover:bg-pink-600 "
      }
      focus:ring-pink-300
      focus:ring-4
      font-medium
      rounded-${rounded ? "full" : "lg"}
      ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
