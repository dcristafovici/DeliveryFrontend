import React from 'react';
import Container from '../Basic/Container';
import Section from '../Basic/Section';
import Title from '../Basic/Title/Title';
import RestaurantsItems from './RestaurantsItems';
import { RestaurantsStyled } from './RestaurantsStyled';

const Restaurants:React.FC = () => (
  <RestaurantsStyled>
    <Section>
      <Container>
        <Title title="Restaurants" />
        <RestaurantsItems />
      </Container>
    </Section>
  </RestaurantsStyled>
);

export default Restaurants;
