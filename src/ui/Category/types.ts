import type { MouseEvent } from "react";

export type CategoryList = {
  id: number;
  text: string;
  attribute: string;
};

export type CategoryProp = {
  category: string;
  onClick: (e: MouseEvent<HTMLAnchorElement>) => void;
};
