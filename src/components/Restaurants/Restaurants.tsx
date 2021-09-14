import React from 'react';
import { useQuery } from '@apollo/client';
import Container from '../Basic/Container';
import Section from '../Basic/Section';
import Title from '../Basic/Title/Title';
import RestaurantsItems from './RestaurantsItems';
import { RestaurantsStyled } from './RestaurantsStyled';
import { RESTAURANTS } from '../../GraphQL/Queries';

const Restaurants:React.FC = () => {
  const { loading, data = {} } = useQuery(RESTAURANTS);
  const { Restaurants: DataRestaurants = [] } = data;
  console.log(DataRestaurants);
  return (
    <RestaurantsStyled>
      <Section>
        <Container>
          <Title title="Restaurants" />
          <RestaurantsItems />
        </Container>
      </Section>
    </RestaurantsStyled>
  );
};

export default Restaurants;
