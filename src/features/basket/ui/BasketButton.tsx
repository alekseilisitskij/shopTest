import { setShowModal } from "../../catalog/slice/ProductsSlice";
import { Button } from "../../../ui/Button/Button";
import { useProductBasState } from "../../../hooks/useProductState";
import type { FC } from "react";

export const BasketButton: FC = () => {
  const { showModal, basketItems, dispatch } = useProductBasState();
  const totalCount: number = basketItems.reduce(
    (acc, cur) => acc + cur.count,
    0
  );

  const handleClickSidebar = () => {
    dispatch(setShowModal(!showModal));
  };

  return (
    <Button
      className="header-btn cart-btn"
      onClick={handleClickSidebar}
      totalCount={totalCount}
      text="🛒"
    />
  );
};
