export interface CheckoutSuccessResponse {
  orderNumber: number;
  orderCustomer: {
    name: string;
  }
  orderPayment: {
    id: number;
  }
}
