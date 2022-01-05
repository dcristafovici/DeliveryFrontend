export interface OrdersItemInterface {
  id?: string;
  restaurant: {
    name: string;
    rating: number;
  },
  orderNumber: number,
  status: string;
  total: number;
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
