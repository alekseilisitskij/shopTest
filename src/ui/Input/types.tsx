import type { ChangeEvent } from "react";

export type InputProps = {
  value?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};
