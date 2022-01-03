export interface OrdersItemInterface {
  id: string;
  totalPrice: number;
  restaurant: {
    name: string;
    rating: number;
  },
  status: string;
  orderCart: {
    quantity: number,
    product: {
      id: string,
      name: string,
      media: {
        small: string;
      }
    }
  }[]
}
