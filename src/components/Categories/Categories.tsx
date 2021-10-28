import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useTypeSelector } from '../../redux/useTypeSelector';
import { ArrowIcon } from '../Basic/Icons';
import { CategoryWrapperInterface, ProductsComponentInterface } from '../Products/ProductsPoint/ProductsPointInterface';
import { CategoriesStyled } from './CategoriesStyled';

export const Categories:React.FC<ProductsComponentInterface> = (
  { categories = [] } : ProductsComponentInterface,
) => {
  const [showMore, setShowMore] = useState(false);
  const { categoryVisible } = useTypeSelector((state) => state.restaurantReducer);
  const { ref, inView, entry } = useInView({ initialInView: false, threshold: 0.07 });

  return (
    <>
      <CategoriesStyled className={`${!inView ? 'categories-fixed' : ''}`} ref={ref}>
        <div className="categories-placeholder" />
        <div className="categories-wrapper__wp">
          <div className="categories-wrapper">
            <ul>
              {categories.slice(0, 5).map(({ category }: CategoryWrapperInterface) => (
                <li className={`${categoryVisible === category.id ? 'category-active' : ''}`} key={category.id}>{category.name}</li>))}
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
                  {categories
                    .slice(5, categories.length)
                    .map(({ category }: CategoryWrapperInterface) => (
                      <li key={category.id} className={`${categoryVisible === category.id ? 'category-active' : ''}`}>{category.name}</li>))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CategoriesStyled>
    </>
  );
};

export default Categories;
