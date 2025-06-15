// import axios from "axios";
// import type { PaginatedResponse } from "../types/product";

// export interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   image: string;
//   category: string;
// }

// const api = axios.create({
//   baseURL: "http://localhost:3001",
//   headers: {
//     "Content-type": "application/json",
//   },
// });

// export const http = () => {
//   const getAllProducts = (
//     category: string | undefined,
//     page: number | undefined,
//     limit: number | undefined,
//     sort: string | undefined
//   ) => {
//     return api.get<PaginatedResponse>(
//       `/products?category=${
//         category || ""
//       }&_page=${page}&_per_page=${limit}&_sort=${sort},-views`
//     );
//   };

//   return { getAllProducts };
// };
