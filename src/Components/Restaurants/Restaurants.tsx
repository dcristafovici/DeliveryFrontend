import React from 'react';
import './Restaurants.sass';
import Title from '../Basic/Title/Title';
import Section from '../Basic/Section/Section';
import Content from '../Basic/Content/Content';
import RestaurantsItems from './RestaurantsItems';
import RestaurantsItem from './RestaurantsItem';
import RestaurantsPoint from './RestaurantsPoint';

const Restaurants:React.FC = () => (
  <Section name="restaurants">
    <Content>
      <RestaurantsPoint>
        <Title name="Promotins and news" />
        <RestaurantsItems>
          <RestaurantsItem />
          <RestaurantsItem />
          <RestaurantsItem />
        </RestaurantsItems>
      </RestaurantsPoint>

      <RestaurantsPoint>
        <Title name="Restaurants" />
        <RestaurantsItems>
          <RestaurantsItem />
          <RestaurantsItem />
          <RestaurantsItem />
          <RestaurantsItem />
          <RestaurantsItem />
          <RestaurantsItem />
        </RestaurantsItems>
      </RestaurantsPoint>
    </Content>
  </Section>
);

export default Restaurants;
