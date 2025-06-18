import ReactPaginate from "react-paginate";
import { setCurrentPage } from "../catalog/slice/FilterSlice";
import type { FC } from "react";
import type { AppDispatch, RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";

export const Pagination: FC = () => {
  const currentPage = useSelector(
    (state: RootState) => state.filterProducts.currentPage
  );
  const dispatch: AppDispatch = useDispatch();

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
        marginPagesDisplayed={2}
        forcePage={currentPage - 1}
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
