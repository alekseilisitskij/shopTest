import type { ChangeEvent, FC } from "react";
import { setSortProperty } from "../catalog/slice/FilterSlice";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store/store";

export const Sort: FC = () => {
  const sortProperty = useSelector(
    (state: RootState) => state.filterProducts.sortProperty
  );
  const dispatch: AppDispatch = useDispatch();

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
