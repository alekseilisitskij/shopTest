import { memo } from "react";
import type { ButtonProps } from "./types";

export const Button = memo(
  ({ className, onClick, totalCount, text }: ButtonProps) => {
    return (
      <button className={className} onClick={onClick}>
        {text}
        <span className="cart-count" id="cartCount">
          {totalCount}
        </span>
      </button>
    );
  }
);
