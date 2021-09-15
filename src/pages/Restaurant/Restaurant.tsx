import React from 'react';
import Container from '../../components/Basic/Container';
import { StyledFlex } from '../../components/Basic/Flex/StyledFlex';
import Section from '../../components/Basic/Section';
import RestaurantInfo from '../../components/Restaurant/RestaurantInfo/RestaurantInfo';
import { MainRestaurantStyled, RestaurantStyled } from './RestaurantStyled';

const Restaurant:React.FC = () => (
  <RestaurantStyled>
    <Section>
      <Container>
        <StyledFlex justify="space-between">

          <MainRestaurantStyled>
            <RestaurantInfo />
          </MainRestaurantStyled>

        </StyledFlex>
      </Container>
    </Section>
  </RestaurantStyled>
);

export default Restaurant;
