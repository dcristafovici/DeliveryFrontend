export interface CheckoutFormInterface {
  name: string;
  phone: string;
  email: string;
  floor: string;
  office: string;
  apartment: string;
  date: string;
  additionalComment: string;
}

export enum checkoutDaysEnum {
  TODAY = 'Today',
  TOMMOROW = 'Tomorrow',
}

export interface CheckoutFormProps {
  restaurantID: string;
  user: any;
  cart: any;
  address: any;
  total: any;
}
