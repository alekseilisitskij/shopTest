import type { InputProps } from "./types";

export const Input = ({
  value,
  placeholder,
  onChange,
  className,
}: InputProps) => {
  return (
    <input
      type="text"
      className={`input ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
