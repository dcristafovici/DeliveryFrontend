import React from 'react';
import Aside from '../../components/Aside';
import Container from '../../components/Basic/Container';
import { StyledFlex } from '../../components/Basic/Flex/StyledFlex';
import Section from '../../components/Basic/Section';
import Products from '../../components/Products';
import RestaurantInfo from '../../components/Restaurant/RestaurantInfo/RestaurantInfo';
import { MainRestaurantStyled, RestaurantStyled, AsideWrapperStyled } from './RestaurantStyled';

const Restaurant:React.FC = () => (
  <RestaurantStyled>
    <Section>
      <Container>
        <StyledFlex justify="space-between">

          <MainRestaurantStyled>
            <RestaurantInfo />
            <Products />
          </MainRestaurantStyled>

          <AsideWrapperStyled>
            <Aside />
          </AsideWrapperStyled>
        </StyledFlex>
      </Container>
    </Section>
  </RestaurantStyled>
);

export default Restaurant;
