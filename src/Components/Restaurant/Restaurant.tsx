import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import { RESTAURANT } from '../../GraphQL/Queries';
import { useParamsInterface } from '../../Interfaces/useParamsInterface';
import Aside from '../Aside/Aside';
import Content from '../Basic/Content/Content';
import Food from '../Food/Food';
import Products from '../Products/Products';

const Restaurant:React.FC = () => {
  const { id } = useParams<useParamsInterface>();
  const { loading, data = {} } = useQuery(RESTAURANT, { variables: { id } });

  return (
    <div className="delivery-main">
      <Content>
        <div className="delivery-main__wrapper">
          <div className="delivery-main__left">
            <Food
              id={!loading ? data.Restaurant.id : ''}
              name={!loading ? data.Restaurant.name : ''}
              description={!loading ? data.Restaurant.description : ''}
              minPrice={!loading ? data.Restaurant.minPrice : ''}
              saleValue={!loading ? data.Restaurant.saleValue : ''}
              deliveryTime={!loading ? data.Restaurant.deliveryTime : ''}
              image={!loading ? data.Restaurant.image : ''}
            />
            <Products />
          </div>
          <Aside />
        </div>
      </Content>
    </div>
  );
};

export default Restaurant;
