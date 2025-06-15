import ReactPaginate from "react-paginate";
import { setCurrentPage } from "../catalog/slice/ProductsSlice";
import { useProductBasState } from "../../hooks/useProductState";
import type { FC } from "react";

export const Pagination: FC = () => {
  const { dispatch } = useProductBasState();

  const handlePageClick = (event: { selected: number }) => {
    const selectedPage = event.selected + 1;
    dispatch(setCurrentPage(selectedPage));
  };

  return (
    <div className="pagination">
      <ReactPaginate
        breakLabel="..."
        nextLabel="Следующая →"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        marginPagesDisplayed={1}
        pageCount={3}
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
