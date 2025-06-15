import { Sort } from "../../features/sorting/Sort";
import { ProductGrid } from "../../features/catalog/components/ProductGrid";
import { Pagination } from "../../features/pagination/Pagination";
import { SideBarModal } from "../../features/basket/ui/SideBarModal";
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
        <SideBarModal />
      </div>
    </>
  );
};
