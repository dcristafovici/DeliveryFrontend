import React from 'react';
import { useQuery } from '@apollo/client';
import Container from '../Basic/Container';
import Section from '../Basic/Section';
import Title from '../Basic/Title/Title';
import RestaurantsItems from './RestaurantsItems';
import { RestaurantsStyled } from './RestaurantsStyled';
import { FIND_RESTAURANTS } from '../../GraphQL/Restaurants/RestaurantsQueries';

const Restaurants:React.FC = () => {
  const { loading, data = {} } = useQuery(FIND_RESTAURANTS);
  const { findRestaurants = [] } = data;
  return (
    <RestaurantsStyled>
      <Section>
        <Container>
          <Title title="Restaurants" />
          <RestaurantsItems restaurants={!loading && findRestaurants} />
        </Container>
      </Section>
    </RestaurantsStyled>
  );
};

export default Restaurants;
