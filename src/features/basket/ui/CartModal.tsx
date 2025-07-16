import type { BasketItem } from "../../../types/product";
import { useAppDispatch, useAppSelector } from "../../../hooks/storeHooks";
import { addItem, removeItem } from "../slice/BasketSlice";

import { type FC } from "react";

export const CartModal: FC = () => {
  const basketItems = useAppSelector((state) => state.basket.items);
  const dispatch = useAppDispatch();

  const onClickAdd = (item: BasketItem) => {
    dispatch(addItem(item));
  };

  const onClickRemove = (item: BasketItem) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="cart-modal">
      {basketItems.map(({ id, title, image, count, price }) => (
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
