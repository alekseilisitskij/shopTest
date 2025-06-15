// import { useSelector, useDispatch } from "react-redux";
// import type { RootState, AppDispatch } from "../store/store";

// export const useProductBasState = () => {
//   const category = useSelector((state: RootState) => state.products.category);
//   const products = useSelector((state: RootState) => state.products.products);
//   const isLoading = useSelector((state: RootState) => state.products.isLoading);
//   const searchQuery = useSelector(
//     (state: RootState) => state.products.searchQuery
//   );
//   const currentPage = useSelector(
//     (state: RootState) => state.products.currentPage
//   );
//   const sortProperty = useSelector(
//     (state: RootState) => state.products.sortProperty
//   );
//   const showModal = useSelector((state: RootState) => state.products.showModal);
//   const basketItems = useSelector((state: RootState) => state.basket.items);
//   const totalPrice = useSelector((state: RootState) => state.basket.totalPrice);

//   const dispatch: AppDispatch = useDispatch();

//   return {
//     category,
//     sortProperty,
//     currentPage,
//     searchQuery,
//     products,
//     isLoading,
//     showModal,
//     basketItems,
//     totalPrice,
//     dispatch,
//   };
// };

import { useSelector, useDispatch, shallowEqual } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";

export const useProductBasState = () => {
  const {
    category,
    products,
    isLoading,
    searchQuery,
    currentPage,
    sortProperty,
    showModal,
  } = useSelector(
    (state: RootState) => state.products,
    shallowEqual // ✅ Поверхностное сравнение — не перерендерит без нужды
  );

  const { items: basketItems, totalPrice } = useSelector(
    (state: RootState) => state.basket,
    shallowEqual
  );

  const dispatch = useDispatch<AppDispatch>();

  return {
    category,
    sortProperty,
    currentPage,
    searchQuery,
    products,
    isLoading,
    showModal,
    basketItems,
    totalPrice,
    dispatch,
  };
};
