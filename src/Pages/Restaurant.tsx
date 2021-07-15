import React from 'react';
import Aside from '../Components/Aside/Aside';
import Food from '../Components/Food/Food';
import Products from '../Components/Products/Products';

const Restaurant:React.FC = () => (
  <div className="delivery-main">
    <div className="content">
      <div className="delivery-main__wrapper">
        <div className="delivery-main__left">
          <Food />
          <Products />
        </div>
        <Aside />
      </div>
    </div>
  </div>
);

export default Restaurant;
