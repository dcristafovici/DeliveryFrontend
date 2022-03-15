import React, { useEffect, useRef, useState } from 'react';
import { STRINGS } from '../../constants';
import { useOutsideEvent } from '../../utils/useOutsideEvent';
import { ArrowIcon } from '../Basic/Icons';
import { ProductsPointInterface } from '../Products/ProductsPoint/ProductsPointInterface';
import { CategoriesInterface } from './CategoriesInterface';
import CategoriesPoint from './CategoriesPoint';
import { CategoriesStyled } from './CategoriesStyled';

const Categories:React.FC<CategoriesInterface> = ({ categories }: CategoriesInterface) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [moreElement, setMoreElement] = useState<string>(STRINGS.MORE);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const ref = useRef(null);
  const showRef = useRef(null);
  useOutsideEvent(showRef, () => setShowMore(false));

  useEffect(() => {
    const cachedRef:any = ref.current;
    const observer = new IntersectionObserver(([e]) => setIsSticky(e.intersectionRatio < 1), {
      threshold: [1],
    });
    observer.observe(cachedRef);

    return () => {
      observer.unobserve(cachedRef);
    };
  }, []);

  return (
    <CategoriesStyled ref={ref} className={isSticky ? 'is-sticky' : ''}>
      <div className="categories-points">
        {categories.slice(0, 5).map((category: ProductsPointInterface) => (
          <CategoriesPoint
            onSetName={() => setMoreElement(STRINGS.MORE)}
            key={category.category.id}
            category={category.category}
          />
        ))}

        {categories.length > 5 && (
          <div className={`${showMore ? 'active' : ''} categories-more`} ref={showRef}>
            <div
              className={`${moreElement !== STRINGS.MORE ? 'not-default' : ''} categories-more__title`}
              onClick={() => setShowMore((prev:boolean) => !prev)}
              role="button"
              tabIndex={0}
            >
              {moreElement}
              <ArrowIcon />
            </div>
            <div className={`${showMore ? 'open' : ''} categories-more__dropdown`}>
              {categories.slice(5).map((category: ProductsPointInterface) => (
                <CategoriesPoint
                  onSetName={(name) => setMoreElement(name)}
                  key={category.category.id}
                  category={category.category}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </CategoriesStyled>
  );
};

export default Categories;
