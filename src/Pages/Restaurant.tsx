import React from 'react';
import Aside from '../Components/Aside/Aside';
import Content from '../Components/Basic/Content/Content';
import Food from '../Components/Food/Food';
import Products from '../Components/Products/Products';

const Restaurant:React.FC = () => (
  <div className="delivery-main">
    <Content>
      <div className="delivery-main__wrapper">
        <div className="delivery-main__left">
          <Food />
          <Products />
        </div>
        <Aside />
      </div>
    </Content>
  </div>
);

export default Restaurant;
