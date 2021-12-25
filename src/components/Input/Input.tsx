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
      className={`rounded-full h-[36px] leading-none w-full block px-5 text-sm text-gray-700 outline-none focus:outline-none focus:shadow hover:shadow appearance-none transition-all ${className}`}
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
