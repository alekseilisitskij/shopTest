import debounce from "lodash.debounce";
import { useCallback, type ChangeEvent } from "react";
import { setSearchQuery } from "../catalog/slice/FilterSlice";
import { Input } from "../../ui/Input/Input";
import { useAppDispatch } from "../../hooks/storeHooks";

export const SearchInput = () => {
  const dispatch = useAppDispatch();

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
