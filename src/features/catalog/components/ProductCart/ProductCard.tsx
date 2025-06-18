import { memo } from "react";
import type { ProductCardProps } from "./types";
import { addItem } from "../../../basket/slice/BasketSlice";
import type { AppDispatch, RootState } from "../../../../store/store";
import { useSelector, useDispatch } from "react-redux";

export const ProductCard = memo(
  ({ id, image, title, description, price }: ProductCardProps) => {
    const dispatch: AppDispatch = useDispatch();

    const addCount = useSelector(
      (state: RootState) =>
        state.basket.items.find((obj) => obj.id === id)?.count || 0
    );

    const onClickAdd = () => {
      dispatch(
        addItem({ id, title, price, image, description, count: addCount })
      );
    };

    return (
      <div className="product-card category-food">
        <div className="product-image">{image}</div>
        <div className="product-info">
          <h3 className="product-title">{title}</h3>
          <p className="product-brand">{description}</p>
          <div className="product-price">
            <span className="current-price">{`${price}р`}</span>
          </div>
          <button className="product-btn" onClick={onClickAdd}>
            + В корзину
            {addCount ? (
              <span className="prodct-btn_span">{addCount}</span>
            ) : (
              ""
            )}
          </button>
        </div>
      </div>
    );
  }
);
