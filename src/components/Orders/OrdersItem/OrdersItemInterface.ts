export interface OrdersItemInterface {
  id: string;
  totalPrice: number;
  restaurant: {
    name: string;
    rating: number;
  }
}
