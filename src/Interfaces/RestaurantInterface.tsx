export interface RestaurantInterface {
  id: string;
  name: string;
  description?: string;
  minPrice: number;
  saleValue: number;
  deliveryTime: string;
  image: string;
}
