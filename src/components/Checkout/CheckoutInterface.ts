export interface CheckoutFormInterface {
  name: string;
  phone: string;
  tower: string;
  floor: string;
  office: string;
  apartment: string;
  date: string;
  time: string;
  additional: string;
}

export const CheckoutDays = [
  {
    name: 'Today',
    label: 'Today',
  },
  {
    name: 'Tomorrow',
    label: 'Tomorrow',
  },
];

export enum checkoutDaysEnum {
  TODAY = 'Today',
  TOMMOROW = 'Tomorrow',
}
