import React from 'react';

type RestaurantsPointProps = {
  children: React.ReactNode;
}

const RestaurantsPoint:React.FC<RestaurantsPointProps> = (props: RestaurantsPointProps) => {
  const { children } = props;
  return (
    <div className="restaurants-point">
      { children }
    </div>
  );
};

export default RestaurantsPoint;
