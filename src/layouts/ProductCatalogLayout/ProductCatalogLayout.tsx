import { Sort } from "../../features/sorting/Sort";
import { ProductGrid } from "../../features/catalog/components/ProductGrid/ProductGrid";
import { Pagination } from "../../features/pagination/Pagination";
import type { FC } from "react";

export const ProductCatalogLayout: FC = () => {
  return (
    <>
      <div className="container">
        <main className="main-content">
          <Sort />
          <ProductGrid />
          <Pagination />
        </main>
      </div>
    </>
  );
};
//
