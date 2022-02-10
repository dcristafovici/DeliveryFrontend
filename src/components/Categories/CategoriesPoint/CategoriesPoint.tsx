import React from 'react';
import { Link } from 'react-scroll';
import { ProductsPointInterface } from '../../Products/ProductsPoint/ProductsPointInterface';
import { CategoriesPointStyled } from './CategoriesPointStyled';

const CategoriesPoint:React.FC<ProductsPointInterface> = (
  { category, onSetName }: ProductsPointInterface,
) => (
  <CategoriesPointStyled className="categories-point" data-id={category.id}>
    <Link
      activeClass="active"
      to={category.id}
      spy
      smooth
      offset={-60}
      duration={500}
      onSetActive={() => onSetName && onSetName(category.name)}
    >
      <span>{category.name}</span>
    </Link>
  </CategoriesPointStyled>
);

export default CategoriesPoint;
