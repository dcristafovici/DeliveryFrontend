import React, { useState } from 'react';
import { ArrowIcon } from '../Basic/Icons';
import { ProductsPointInterface } from '../Products/ProductsPoint/ProductsPointInterface';
import { CategoriesInterface } from './CategoriesInterface';
import CategoriesPoint from './CategoriesPoint';
import { CategoriesStyled } from './CategoriesStyled';

const Categories:React.FC<CategoriesInterface> = ({ categories }: CategoriesInterface) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  return (
    <CategoriesStyled>
      <div className="categories-points">
        {categories.slice(0, 5).map((category: ProductsPointInterface) => (
          <CategoriesPoint key={category.category.id} category={category.category} />
        ))}

        {categories.length > 5 && (
          <div className={`${showMore ? 'active' : ''} categories-more`}>
            <div
              className="categories-more__title"
              onClick={() => setShowMore((prev:boolean) => !prev)}
              role="button"
              tabIndex={0}
            >
              More
              <ArrowIcon />
            </div>
            {showMore && (
              <div className="categories-more__dropdown">
                {categories.slice(5, -1).map((category: ProductsPointInterface) => (
                  <CategoriesPoint key={category.category.id} category={category.category} />
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </CategoriesStyled>
  );
};

export default Categories;
