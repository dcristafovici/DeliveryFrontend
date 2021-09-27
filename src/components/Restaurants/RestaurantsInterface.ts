export interface RestaurantCardInterface {
  id: string;
  name: string;
  description: string;
  minPrice: string;
  deliveryTime: string;
  discount: string;
  rating: string;
}

export interface RestaurantItemsInterface {
  restaurants: RestaurantCardInterface[]
}
