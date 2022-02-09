export interface RestaurantCardInterface {
  id: string;
  name: string;
  minPrice: number,
  description: string;
  deliveryTime: number,
  rating: string,
  media: {
    mediumLarge: string;
    medium: string;
    large: string;
  };
}

export interface RestaurantItemsInterface {
  restaurants: RestaurantCardInterface[]
}
