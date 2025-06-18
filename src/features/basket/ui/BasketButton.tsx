import { Button } from "../../../ui/Button/Button";
import { setShowModal } from "../slice/BasketSlice";
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "../../../store/store";
import type { FC } from "react";

export const BasketButton: FC = () => {
  const basketItems = useSelector((state: RootState) => state.basket.items);
  const showModal = useSelector((state: RootState) => state.basket.showModal);
  const dispatch: AppDispatch = useDispatch();

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
