import React, { useState, useEffect } from 'react';
import './Products.sass';
import { useQuery } from '@apollo/client';
import ProductsPoint from './ProductsPoint';
import Section from '../Basic/Section/Section';
import { CATEGORIES, PRODUCTS } from '../../GraphQL/Queries';

const Products:React.FC = () => {
  const [items, setItems] = useState([]);
  const { loading, data = {} } = useQuery(CATEGORIES);
  const prods = useQuery(PRODUCTS);
  const prodsLoader = prods.loading;
  const prodsData = prods.data;
  const { Categories = [] } = data;

  useEffect(() => {
    if (!prodsLoader) {
      setItems(prodsData.Products);
    }
  }, [prodsLoader]);

  type categoryType = {
    name: string;
    id: string;
  }

  return (
    <Section name="products">
      <div className="products-wrapper">
        {!loading ? Categories.map((category:categoryType) => {
          const products = items.filter((item:any) => item.category === category.id);
          return (
            <ProductsPoint key={category.id} name={category.name} />
          );
        }) : ''}
      </div>
    </Section>
  );
};

export default Products;
