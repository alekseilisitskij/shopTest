import type { CategoryList } from "./types";
import { NavLink } from "react-router-dom";

const CATEGORY_LIST: CategoryList[] = [
  { id: 1, text: "Все", attribute: "all" },
  { id: 2, text: "Еда", attribute: "eats" },
  { id: 3, text: "Одежда", attribute: "clothes" },
  { id: 4, text: "Электроника", attribute: "electronics" },
];

export const Category = () => {
  return (
    <nav className="nav">
      {CATEGORY_LIST.map(({ id, text, attribute }) => (
        <NavLink
          to={`/category/${attribute}`}
          key={id}
          className={({ isActive }) =>
            `nav-link category-food ${isActive ? "active" : ""}`
          }
        >
          {text}
        </NavLink>
      ))}
    </nav>
  );
};
