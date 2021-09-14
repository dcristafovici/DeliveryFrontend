import React from 'react';
import Container from '../Basic/Container';
import Section from '../Basic/Section';
import Title from '../Basic/Title/Title';
import RestaurantsItems from './RestaurantsItems';

const Restaurants:React.FC = () => (
  <Section>
    <Container>
      <Title title="Restaurants" />
      <RestaurantsItems />
    </Container>
  </Section>
);

export default Restaurants;
