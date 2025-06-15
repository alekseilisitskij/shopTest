import debounce from "lodash.debounce";
import { useCallback } from "react";
import { setSearchQuery } from "../catalog/slice/ProductsSlice";
import { Input } from "../../ui/Input/Input";
import { useProductBasState } from "../../hooks/useProductState";
import type { ChangeEvent } from "react";

export const SearchInput = () => {
  const { dispatch } = useProductBasState();

  const handleSearch = useCallback(
    debounce((value: string) => {
      dispatch(setSearchQuery(value.trim().toLowerCase()));
    }, 300),
    []
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  };

  return (
    <Input
      placeholder="Поиск товаров..."
      onChange={handleChange}
      className="search-input"
    />
  );
};
