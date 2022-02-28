export interface ProductCardInterface {
  id: string;
  name: string;
  description: string;
  price: string;
  weight: string;
  categories: {
    id: string;
    name: string
  }[];
  media: {
    medium: string;
  } | null;
}

export interface ProductCardPropsInterface {
  product: ProductCardInterface;
  authorized: boolean;
}
