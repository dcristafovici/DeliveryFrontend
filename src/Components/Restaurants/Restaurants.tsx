import React from 'react';
import './Restaurants.sass';
import { useQuery } from '@apollo/client';
import Title from '../Basic/Title/Title';
import Section from '../Basic/Section/Section';
import Content from '../Basic/Content/Content';
import RestaurantsItems from './RestaurantsItems';
import RestaurantsItem from './RestaurantsItem';
import RestaurantsPoint from './RestaurantsPoint';
import { RestaurantInterface } from '../../Interfaces/RestaurantInterface';
import { RESTAURANTS } from '../../GraphQL/Queries';

const Restaurants:React.FC = () => {
  const { loading, data = {} } = useQuery(RESTAURANTS);
  const { allRestaurants = [] } = data;

  return (
    <Section name="restaurants">
      <Content>
        <RestaurantsPoint>
          <Title name="Restaurants" />
          <RestaurantsItems>
            {!loading && allRestaurants.length
              ? allRestaurants.map((restaurant:RestaurantInterface) => (
                <RestaurantsItem
                  id={restaurant.id}
                  name={restaurant.name}
                  description={restaurant.description}
                  minPrice={restaurant.minPrice}
                  saleValue={restaurant.saleValue}
                  deliveryTime={restaurant.deliveryTime}
                  image={restaurant.image}
                  key={restaurant.id}
                />
              )) : '' }
          </RestaurantsItems>
        </RestaurantsPoint>
      </Content>
    </Section>
  );
};

export default Restaurants;
