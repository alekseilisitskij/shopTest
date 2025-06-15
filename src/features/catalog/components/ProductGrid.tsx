import { useEffect, useMemo, useCallback, type FC } from "react";
import { fetchProducts } from "../slice/ProductsSlice";
import { addItem } from "../../basket/slice/BasketSlice";
import { useProductBasState } from "../../../hooks/useProductState";
import { ProductCard } from "../../../ui/ProductCart/ProductCard";
import { Spinner } from "../../../ui/Spinner/Spinner";

import type { Product } from "../../../types/product";
import type { BasketItem } from "../../../types/basket-types";

export const ProductGrid: FC = () => {
  const {
    products,
    isLoading,
    searchQuery,
    category,
    currentPage,
    sortProperty,
    basketItems,
    dispatch,
  } = useProductBasState();

  useEffect(() => {
    dispatch(
      fetchProducts({
        category: category,
        page: currentPage,
        sort: sortProperty,
      })
    );
  }, [dispatch, category, currentPage, sortProperty]);

  const onClickAdd = useCallback(
    (item: BasketItem) => {
      dispatch(addItem(item));
    },
    [dispatch]
  );

  const filteredProducts: Product[] = useMemo(() => {
    return products.filter((product: Product) =>
      product.title.toLowerCase().includes(searchQuery)
    );
  }, [products, searchQuery]);

  if (isLoading === "failed") {
    return (
      <>
        <div className="error">Ошибка</div>
      </>
    );
  }

  return (
    <>
      {isLoading === "loading" ? (
        <Spinner />
      ) : (
        <div className="products-grid" id="productsGrid">
          {filteredProducts.map(
            ({ id, title, price, description, image }: Product) => {
              const basketItem: BasketItem | undefined = basketItems.find(
                (obj) => obj.id === id
              );
              const addCount = basketItem ? basketItem.count : 0;

              return (
                <ProductCard
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  description={description}
                  image={image}
                  addCount={addCount}
                  onAddClick={() =>
                    onClickAdd({
                      id,
                      title,
                      price,
                      image,
                      description,
                      count: addCount,
                    })
                  }
                />
              );
            }
          )}
        </div>
      )}
    </>
  );
};
