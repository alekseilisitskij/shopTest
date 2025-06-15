import { useProductBasState } from "../../../hooks/useProductState";
import { setShowModal } from "../../catalog/slice/ProductsSlice";
import { addItem, removeItem, clearItem } from "../slice/BasketSlice";
import type { BasketItem } from "../../../types/basket-types";

export const useBasket = () => {
  const { showModal, dispatch } = useProductBasState();

  const handleClickSidebar = () => {
    dispatch(setShowModal(!showModal));
  };

  const onClickClearItems = () => {
    dispatch(clearItem());
  };

  const onClickAdd = (item: BasketItem) => {
    dispatch(addItem(item));
  };

  const onClickRemove = (item: BasketItem) => {
    dispatch(removeItem(item));
  };

  return { handleClickSidebar, onClickClearItems, onClickAdd, onClickRemove };
};
