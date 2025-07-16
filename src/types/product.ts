export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export type BasketItem = Omit<Product, "category" | "description"> & {
  description?: string;
  count: number;
};

export interface InitStateBasket {
  totalPrice: number;
  items: BasketItem[];
  showModal: boolean;
}

export type PaginatedResponse = {
  data: Product[];
  pages?: number;
  first?: number;
  prev?: number | null;
  next?: number | null;
  last?: number;
  items?: number;
};

export interface GetAllProductsParams {
  category?: string | undefined;
  page?: number;
  limit?: number;
  sort?: string;
}
