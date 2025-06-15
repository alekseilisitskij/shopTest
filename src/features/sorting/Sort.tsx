import type { ChangeEvent, FC } from "react";
import { setSortProperty } from "../catalog/slice/ProductsSlice";
import { useProductBasState } from "../../hooks/useProductState";

export const Sort: FC = () => {
  const { sortProperty, dispatch } = useProductBasState();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    dispatch(setSortProperty(selected));
  };

  return (
    <>
      <div className="content-header">
        <div className="sort-controls">
          <select
            className="sort-select"
            value={sortProperty}
            onChange={handleChange}
          >
            <option value="id">По популярности</option>
            <option value="title">По наименованию</option>
          </select>
        </div>
      </div>
    </>
  );
};
