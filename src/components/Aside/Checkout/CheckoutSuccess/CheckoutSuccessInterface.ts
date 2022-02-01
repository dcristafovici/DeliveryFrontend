export interface CheckoutSuccessInterface {
  orderID: string;
}

export interface CheckoutSuccessResponse {
  orderNumber: number;
  orderCustomer: {
    name: string;
  }
}
