import React from 'react';
import Container from '../../components/Basic/Container';
import { StyledFlex } from '../../components/Basic/Flex/StyledFlex';
import Section from '../../components/Basic/Section';
import { MainRestaurantStyled, RestaurantStyled } from './RestaurantStyled';
import AsideWrapper from '../../components/Aside/AsideWrapper';
import RestaurantWrapper from '../../components/Restaurant/RestaurantWrapper';
// import RouteLeavingGuard from '../../components/Basic/RouteLeavingGuard';

const Restaurant:React.FC = () => (
  <RestaurantStyled>
    {/* <RouteLeavingGuard /> */}
    <Section>
      <Container>
        <StyledFlex justify="space-between">

          <MainRestaurantStyled>
            <RestaurantWrapper />
          </MainRestaurantStyled>

          <AsideWrapper />

        </StyledFlex>
      </Container>
    </Section>
  </RestaurantStyled>
);

export default Restaurant;
