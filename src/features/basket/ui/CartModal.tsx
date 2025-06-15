import { useProductBasState } from "../../../hooks/useProductState";
import { useBasket } from "../hooks/useBasket";
import type { BasketItem } from "../../../types/basket-types";
import type { FC } from "react";

export const CartModal: FC = () => {
  const { basketItems } = useProductBasState();
  const { onClickAdd, onClickRemove } = useBasket();

  return (
    <div className="cart-modal">
      {basketItems.map(({ id, title, image, count, price }: BasketItem) => (
        <div key={id} className="cart-item">
          <div className="cart-item-image">{image}</div>
          <div className="cart-item-info">
            <div className="cart-item-title">{title}</div>
            <div className="cart-item-price">{price}₽ за шт.</div>
            <div className="quantity-controls">
              <button
                className="qty-btn"
                onClick={() =>
                  onClickRemove({ id, title, price, image, count })
                }
              >
                -
              </button>
              <span className="bread-qty">{count}</span>
              <button
                className="qty-btn"
                onClick={() => onClickAdd({ id, title, price, image, count })}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
