import { axiosInstance } from "./axoisInstance";
import type { PaginatedResponse } from "../types/product";
import type { GetAllProductsParams } from "../types/product";
import type { AxiosResponse } from "axios";

export const getAllProducts = ({
  category,
  page,
  limit,
  sort,
}: GetAllProductsParams): Promise<AxiosResponse<PaginatedResponse>> => {
  const params = new URLSearchParams();

  if (category) params.append("category", category);
  if (page) params.append("_page", String(page));
  if (limit) params.append("_per_page", String(limit));
  if (sort) params.append("_sort", `${sort},-views`);

  return axiosInstance.get<PaginatedResponse>(`/products?${params.toString()}`);
};
