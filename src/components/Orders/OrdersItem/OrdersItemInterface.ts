export interface OrdersItemInterface {
  id?: string;
  restaurant: {
    name: string;
    rating: number;
  },
  orderNumber: number,
  total: number;
  orderPayment: {
    status: string;
  }
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
