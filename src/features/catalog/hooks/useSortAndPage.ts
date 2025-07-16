import { useSearchParams } from "react-router-dom";

export function useSortAndPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const sort = searchParams.get("sort") || "default";
  const page = parseInt(searchParams.get("page") || "1", 10);

  const setSort = (newSort: string) => {
    searchParams.set("sort", newSort);
    setSearchParams(searchParams);
  };

  const setPage = (newPage: number) => {
    searchParams.set("page", String(newPage));
    setSearchParams(searchParams);
  };

  return { sort, page, setSort, setPage };
}
