import React, { useState } from 'react';
import ArrowIcon from '../Basic/Icons/ArrowIcon';
import { CategoryWrapperInterface, ProductsComponentInterface } from '../Products/ProductsPoint/ProductsPointInterface';
import { CategoriesStyled } from './CategoriesStyled';

export const Categories:React.FC<ProductsComponentInterface> = (
  { categories = [] } : ProductsComponentInterface,
) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <CategoriesStyled>
      <ul>
        {categories.slice(0, 5).map(({ category }: CategoryWrapperInterface) => (
          <li key={category.id}>{category.name}</li>))}
      </ul>
      <div className="categories-others">
        <div
          className={`categories-others__name ${showMore && 'show'}`}
          onClick={() => setShowMore((prev) => !prev)}
          role="button"
          tabIndex={0}
        >
          <span>More</span>
          <ArrowIcon />
        </div>
        <div className={`categories-others__list ${showMore && 'show'}`}>
          <ul>
            {categories.slice(5, -1).map(({ category }: CategoryWrapperInterface) => (
              <li key={category.id}>{category.name}</li>))}
          </ul>
        </div>
      </div>
    </CategoriesStyled>
  );
};

export default Categories;
