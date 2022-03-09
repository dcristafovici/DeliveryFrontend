export interface CheckoutSuccessResponse {
  orderNumber: number;
  orderCustomer: {
    name: string;
  }
  orderPayment: {
    id: number;
  }
}

export enum PaymentStatusEnum {
  AWAITING_PAYMENT = 'awaiting_payment',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
  DECLINED = 'declined',
}
