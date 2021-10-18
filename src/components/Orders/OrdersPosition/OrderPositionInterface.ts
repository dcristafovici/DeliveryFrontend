export interface OrderPositionInterface {
  quantity: number;
  product: {
    name: string;
    price: number;
    weight: number;
    image: {
      small: string;
    }
  }
}
