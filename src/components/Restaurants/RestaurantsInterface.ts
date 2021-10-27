export interface RestaurantCardInterface {
  id?: string;
  name: string;
  description?: string;
  minPrice?: string;
  deliveryTime?: string;
  discount?: string;
  rating?: string;
  image: {
    medium: string;
    medium_large: string;
    large: string;
  };
}

export interface RestaurantItemsInterface {
  restaurants: RestaurantCardInterface[]
}
