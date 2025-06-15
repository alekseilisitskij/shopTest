import { createPortal } from "react-dom";
import { CartModal } from "./CartModal";
import { useProductBasState } from "../../../hooks/useProductState";
import { useBasket } from "../hooks/useBasket";
import type { FC } from "react";

export const SideBarModal: FC = () => {
  const { totalPrice, showModal } = useProductBasState();
  const { handleClickSidebar, onClickClearItems } = useBasket();

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
