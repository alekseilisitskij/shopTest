export type BasketItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  description?: string;
  count: number;
};

export interface InitStateBasket {
  totalPrice: number;
  items: BasketItem[];
}
