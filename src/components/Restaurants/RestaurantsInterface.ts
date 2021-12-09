export interface RestaurantCardInterface {
  id?: string;
  name: string;
  description?: string;
  minPrice?: string;
  deliveryTime?: string;
  rating?: string;
  media: {
    medium: string;
    mediumLarge: string;
    large: string;
  };
}

export interface RestaurantItemsInterface {
  restaurants: RestaurantCardInterface[]
}
