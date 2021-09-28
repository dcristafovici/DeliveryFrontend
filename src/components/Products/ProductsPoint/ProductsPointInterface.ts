import React from 'react';

export interface ProductPointObject {
  id: string;
  name: string;
  description: string;
  price: string;
  weight: string;
  category: {
    id: string;
    name: string
  };
  image: {
    medium: string;
  };
}

export interface ProductsPointInterface {
  products?: ProductPointObject[];
}
