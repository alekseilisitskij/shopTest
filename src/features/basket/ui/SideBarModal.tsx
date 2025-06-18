import { createPortal } from "react-dom";
import { CartModal } from "./CartModal";
import { useDispatch, useSelector } from "react-redux";
import { clearItem, setShowModal } from "../slice/BasketSlice";

import type { AppDispatch, RootState } from "../../../store/store";
import { type FC } from "react";

export const SideBarModal: FC = () => {
  const totalPrice = useSelector((state: RootState) => state.basket.totalPrice);
  const showModal = useSelector((state: RootState) => state.basket.showModal);
  const dispatch: AppDispatch = useDispatch();

  const handleClickSidebar = () => {
    dispatch(setShowModal(!showModal));
  };

  const onClickClearItems = () => {
    dispatch(clearItem());
  };

  if (!showModal) return null;

  return createPortal(
    <div className="cart-sidebar" id="cartSidebar">
      <div className="cart-header">
        <h2 className="cart-title">Корзина</h2>
        <button className="cart-close" onClick={handleClickSidebar}>
          ✕
        </button>
      </div>

      <div className="cart-items" id="cartItems">
        <CartModal />
        <span className="cart-clear" onClick={onClickClearItems}>
          Очистить корзину
        </span>
      </div>

      <div className="cart-footer">
        <div className="cart-total">
          <span>Итого:</span>
          <span id="cartTotal">{totalPrice}</span>
        </div>
        <button className="checkout-btn">Оформить заказ</button>
      </div>
    </div>,
    document.getElementById("portal-root") || document.body
  );
};
