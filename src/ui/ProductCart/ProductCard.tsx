import type { ProductCardProps } from "./types";

export const ProductCard = ({
  image,
  title,
  description,
  price,
  onAddClick,
  addCount,
}: ProductCardProps) => {
  return (
    <div className="product-card category-food">
      <div className="product-image">{image}</div>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-brand">{description}</p>
        <div className="product-price">
          <span className="current-price">{`${price}р`}</span>
        </div>
        <button className="product-btn" onClick={onAddClick}>
          + В корзину
          {addCount ? <span className="prodct-btn_span">{addCount}</span> : ""}
        </button>
      </div>
    </div>
  );
};
