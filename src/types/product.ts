export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export type PaginatedResponse = {
  data: Product[];
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
};

export interface GetAllProductsParams {
  category?: string;
  page?: number;
  limit?: number;
  sort?: string;
}
