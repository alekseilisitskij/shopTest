import type { ChangeEvent, FC } from "react";
import { useSortAndPage } from "../catalog/hooks/useSortAndPage";

export const Sort: FC = () => {
  const { sort, setSort } = useSortAndPage();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setSort(selected);
  };

  return (
    <>
      <div className="content-header">
        <div className="sort-controls">
          <select className="sort-select" value={sort} onChange={handleChange}>
            <option value="id">По популярности</option>
            <option value="title">По наименованию</option>
          </select>
        </div>
      </div>
    </>
  );
};
