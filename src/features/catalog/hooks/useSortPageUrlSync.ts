import { useEffect } from "react";
import { setSortProperty, setCurrentPage } from "../slice/FilterSlice";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../../store/store";

export const useSortPageUrlSync = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch: AppDispatch = useDispatch();

  const sortProperty = useSelector(
    (state: RootState) => state.filterProducts.sortProperty
  );
  const currentPage = useSelector(
    (state: RootState) => state.filterProducts.currentPage
  );

  useEffect(() => {
    const sort: string | null = searchParams.get("sort");
    const page: number = Number(searchParams.get("page"));

    if (sort) dispatch(setSortProperty(sort));
    if (page && !isNaN(page)) dispatch(setCurrentPage(page));
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sortProperty);
    params.set("page", currentPage.toString());
    setSearchParams(params);
  }, [sortProperty, currentPage]);
};
