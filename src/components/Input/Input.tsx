import {
  ChangeEventHandler,
  FocusEventHandler,
  forwardRef,
  HTMLInputTypeAttribute,
} from "react";

interface Props {
  name?: string;
  placeholder?: string;
  className?: string;
  type: HTMLInputTypeAttribute;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ onChange, onBlur, name, type, className = "", placeholder }, ref) => (
    <input
      className={`appearance-none border border-gray-300 rounded text-sm w-full block py-2 px-3 text-gray-700 leading-tight focus:ring-blue-500 focus:border-blue-500 ${className}`}
      ref={ref}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
    />
  )
);

Input.displayName = "Input";
