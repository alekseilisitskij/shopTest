import { useEffect, useMemo, type FC } from "react";
import { fetchProducts } from "../../slice/ProductsSlice";
import { ProductCard } from "../ProductCart/ProductCard";
import { Spinner } from "../../../../ui/Spinner/Spinner";
import { useAppDispatch, useAppSelector } from "../../../../hooks/storeHooks";
import { useParams } from "react-router-dom";
import { useSortAndPage } from "../../hooks/useSortAndPage";

import type { Product } from "../../../../types/product";

export const ProductGrid: FC = () => {
  const products = useAppSelector((state) => state.products.products);
  const isLoading = useAppSelector((state) => state.products.isLoading);
  const searchQuery = useAppSelector(
    (state) => state.filterProducts.searchQuery
  );

  const dispatch = useAppDispatch();
  const { categoryId } = useParams();
  const { sort, page } = useSortAndPage();

  useEffect(() => {
    dispatch(
      fetchProducts({
        category: categoryId === "all" ? "" : categoryId,
        page: page,
        sort: sort,
      })
    );
  }, [dispatch, categoryId, sort, page]);

  const filteredProducts = useMemo(() => {
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

  if (filteredProducts.length === 0) {
    return (
      <>
        <div style={{ textAlign: "center" }}>Нет продукта</div>
      </>
    );
  }

  return (
    <>
      {isLoading === "loading" ? (
        <Spinner />
      ) : (
        <div className="products-grid" id="productsGrid">
          {filteredProducts.map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })}
        </div>
      )}
    </>
  );
};
