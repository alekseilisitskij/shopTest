import type { BasketItem } from "../../../types/basket-types";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../slice/BasketSlice";

import type { AppDispatch, RootState } from "../../../store/store";
import { type FC } from "react";

export const CartModal: FC = () => {
  const basketItems = useSelector((state: RootState) => state.basket.items);
  const dispatch: AppDispatch = useDispatch();

  const onClickAdd = (item: BasketItem) => {
    dispatch(addItem(item));
  };

  const onClickRemove = (item: BasketItem) => {
    dispatch(removeItem(item));
  };

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
