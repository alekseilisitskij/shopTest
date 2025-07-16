import ReactPaginate from "react-paginate";
import type { FC } from "react";
import { useAppSelector } from "../../hooks/storeHooks";
import { useSortAndPage } from "../catalog/hooks/useSortAndPage";

export const Pagination: FC = () => {
  const { page, setPage } = useSortAndPage();

  const totalCount = useAppSelector((state) => state.products.totalCount);

  const pageCount = Math.ceil((totalCount ?? 1) / 4);

  const handlePageClick = (event: { selected: number }) => {
    const selectedPage = event.selected + 1;
    setPage(selectedPage);
  };

  return (
    <div className="pagination">
      <ReactPaginate
        breakLabel="..."
        nextLabel="Следующая →"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        marginPagesDisplayed={2}
        forcePage={page - 1}
        pageCount={pageCount}
        previousLabel="← Предыдущая"
        containerClassName="pagination"
        pageClassName=""
        pageLinkClassName="pagination-btn"
        previousClassName=""
        previousLinkClassName="pagination-btn"
        nextClassName=""
        nextLinkClassName="pagination-btn"
        breakClassName=""
        breakLinkClassName="pagination-btn"
        activeLinkClassName="active"
        disabledLinkClassName="disabled"
      />
    </div>
  );
};
