import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { setCategoryClicked } from '../../redux/actions/restaurantAction';
import { useTypeSelector } from '../../redux/reduxHooks';
import { useOutsideEvent } from '../../utils/useOutsideEvent';
import { ArrowIcon } from '../Basic/Icons';
import { CategoryWrapperInterface, CategoryComponentInterface } from '../Products/ProductsPoint/ProductsPointInterface';
import { CategoriesStyled } from './CategoriesStyled';

export const Categories:React.FC<CategoryComponentInterface> = (
  { categories = [] } : CategoryComponentInterface,
) => {
  const [showMore, setShowMore] = useState(false);
  const [moreText, setMoreText] = useState('More');

  const { categoryVisible } = useTypeSelector((state) => state.restaurantReducer);
  const { ref, inView, entry } = useInView({ initialInView: false, threshold: 0.07 });

  const dispatch = useDispatch();

  const showRef = useRef(null);
  useOutsideEvent(showRef, () => setShowMore(false));

  useEffect(() => {
    if (categoryVisible) {
      const findItem = categories.find(({ category }: CategoryWrapperInterface, index: number) => {
        if (category.id === categoryVisible && index > 4) {
          return category;
        }
        return null;
      });
      if (findItem) {
        setMoreText(findItem.category.name);
      } else {
        setMoreText('More');
      }
    }
  }, [categoryVisible]);

  return (
    <>
      <CategoriesStyled className={`${!inView ? 'categories-fixed' : ''}`} ref={ref}>
        <div className="categories-placeholder" />
        <div className="categories-wrapper__wp">
          <div className="categories-wrapper">
            <ul>
              {categories.slice(0, 5).map(({ category }: CategoryWrapperInterface) => (
                <li
                  key={category.id}
                  className={`${categoryVisible === category.id ? 'category-active' : ''}`}
                  onClick={() => dispatch(setCategoryClicked(category.id))}
                >
                  {category.name}
                </li>
              ))}
            </ul>
            {categories.length > 5 && (
              <div className="categories-others" ref={showRef}>
                <div
                  className={`categories-others__name ${showMore && 'show'} ${moreText !== 'More' && 'is-category'}`}
                  onClick={() => setShowMore((prev) => !prev)}
                  role="button"
                  tabIndex={0}
                >
                  <span>{moreText}</span>
                  <ArrowIcon />
                </div>
                <div className={`categories-others__list ${showMore && 'show'}`}>
                  <ul>
                    {categories
                      .slice(5, categories.length)
                      .map(({ category }: CategoryWrapperInterface) => (
                        <li
                          key={category.id}
                          className={`${categoryVisible === category.id ? 'category-active' : ''}`}
                          onClick={() => dispatch(setCategoryClicked(category.id))}
                        >
                          {category.name}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </CategoriesStyled>
    </>
  );
};

export default Categories;
