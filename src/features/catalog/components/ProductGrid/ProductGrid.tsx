import { useEffect, useMemo, type FC } from "react";
import { fetchProducts } from "../../slice/ProductsSlice";
import { ProductCard } from "../ProductCart/ProductCard";
import { Spinner } from "../../../../ui/Spinner/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSortPageUrlSync } from "../../hooks/useSortPageUrlSync";

import type { RootState, AppDispatch } from "../../../../store/store";
import type { Product } from "../../../../types/product";

export const ProductGrid: FC = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const isLoading = useSelector((state: RootState) => state.products.isLoading);
  const searchQuery = useSelector(
    (state: RootState) => state.filterProducts.searchQuery
  );
  const currentPage = useSelector(
    (state: RootState) => state.filterProducts.currentPage
  );
  const sortProperty = useSelector(
    (state: RootState) => state.filterProducts.sortProperty
  );

  const dispatch: AppDispatch = useDispatch();
  const { categoryId } = useParams();

  useSortPageUrlSync();
  useEffect(() => {
    dispatch(
      fetchProducts({
        category: categoryId === "all" ? "" : categoryId,
        page: currentPage,
        sort: sortProperty,
      })
    );
  }, [dispatch, categoryId, currentPage, sortProperty]);

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
          {filteredProducts.map((product: Product) => {
            return <ProductCard key={product.id} {...product} />;
          })}
        </div>
      )}
    </>
  );
};
