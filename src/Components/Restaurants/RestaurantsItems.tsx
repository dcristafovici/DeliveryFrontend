import React from 'react';

type RestaurantsItemsProps = {
  children: React.ReactNode;
}

const RestaurantsItems:React.FC<RestaurantsItemsProps> = (props:RestaurantsItemsProps) => {
  const { children } = props;
  return (
    <div className="restaurants-items">
      { children }
    </div>
  );
};

export default RestaurantsItems;
