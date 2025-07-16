import { Button } from "../../../ui/Button/Button";
import { setShowModal } from "../slice/BasketSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/storeHooks";

import { useCallback, type FC } from "react";

export const BasketButton: FC = () => {
  const basketItems = useAppSelector((state) => state.basket.items);
  const showModal = useAppSelector((state) => state.basket.showModal);
  const dispatch = useAppDispatch();

  const totalCount: number = basketItems.reduce(
    (acc, cur) => acc + cur.count,
    0
  );

  const handleClickSidebar = useCallback(() => {
    dispatch(setShowModal(!showModal));
  }, []);

  return (
    <Button
      className="header-btn cart-btn"
      onClick={handleClickSidebar}
      totalCount={totalCount}
      text="🛒"
    />
  );
};
