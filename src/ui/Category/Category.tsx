import type { CategoryList, CategoryProp } from "./types";

const CATEGORY_LIST: CategoryList[] = [
  { id: 1, text: "Все", attribute: "" },
  { id: 2, text: "Еда", attribute: "eats" },
  { id: 3, text: "Одежда", attribute: "clothes" },
  { id: 4, text: "Электроника", attribute: "electronics" },
];

export const Category = ({ category, onClick }: CategoryProp) => {
  return (
    <nav className="nav">
      {CATEGORY_LIST.map(({ id, text, attribute }) => (
        <a
          href="#"
          key={id}
          className={`nav-link category-food ${
            category === attribute ? "active" : ""
          }`}
          onClick={onClick}
          data-product={attribute}
        >
          {text}
        </a>
      ))}
    </nav>
  );
};
