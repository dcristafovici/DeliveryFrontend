import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router';
import Aside from '../../components/Aside';
import Container from '../../components/Basic/Container';
import { StyledFlex } from '../../components/Basic/Flex/StyledFlex';
import Section from '../../components/Basic/Section';
import Products from '../../components/Products';
import RestaurantInfo from '../../components/Restaurant/RestaurantInfo/RestaurantInfo';
import { RESTAURANT_BY_ID } from '../../GraphQL/Queries';
import { MainRestaurantStyled, RestaurantStyled, AsideWrapperStyled } from './RestaurantStyled';

const Restaurant:React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, data = {} } = useQuery(RESTAURANT_BY_ID, { variables: { id } });
  const { RestaurantByID: RestaurantData = [] } = data;
  console.log(RestaurantData);

  return (
    <RestaurantStyled>
      <Section>
        <Container>
          <StyledFlex justify="space-between">

            <MainRestaurantStyled>
              <RestaurantInfo
                name={RestaurantData.name}
                minPrice={RestaurantData.minPrice}
                deliveryTime={RestaurantData.deliveryTime}
              />
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
};

export default Restaurant;
