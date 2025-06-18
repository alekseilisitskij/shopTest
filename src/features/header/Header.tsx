import { BasketButton } from "../basket/ui/BasketButton";
import { SearchInput } from "../search/SearchInput";
import { type FC } from "react";
import { Category } from "../../ui/Category/Category";

export const Header: FC = () => {
  return (
    <>
      <header className="header">
        <div className="header-top">
          <a href="#" className="logo">
            ShopMart
          </a>
          <div className="search-container">
            <SearchInput />
          </div>
          <div className="header-actions">
            <BasketButton />
          </div>
        </div>
        <Category />
      </header>
    </>
  );
};
