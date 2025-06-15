import { setChangeCategory } from "../catalog/slice/ProductsSlice";
import { Category } from "../../ui/Category/Category";
import { useProductBasState } from "../../hooks/useProductState";

import type { FC, MouseEvent } from "react";

export const CategoryFilter: FC = () => {
  const { category, dispatch } = useProductBasState();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const category = e.currentTarget.getAttribute("data-product");
    dispatch(setChangeCategory(category ?? ""));
  };

  return <Category category={category} onClick={handleClick} />;
};
