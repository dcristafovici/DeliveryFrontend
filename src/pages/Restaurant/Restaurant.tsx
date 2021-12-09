import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import Container from '../../components/Basic/Container';
import { StyledFlex } from '../../components/Basic/Flex/StyledFlex';
import Section from '../../components/Basic/Section';
import Products from '../../components/Products';
import { GET_CATEGORY_BY_RESTAURANT, RESTAURANT_BY_ID } from '../../GraphQL/Queries';
import { MainRestaurantStyled, RestaurantStyled } from './RestaurantStyled';
import { setAsideData } from '../../redux/actions/asideAction';
import Categories from '../../components/Categories';
import RestaurantInfo from '../../components/Restaurant/RestaurantInfo';
import Bar from '../../components/Bar';
import AsideWrapper from '../../components/Aside/AsideWrapper';
import { FIND_ONE_RESTAURANT } from '../../GraphQL/Restaurants/RestaurantsQueries';
import { FIND_BY_KEY_RESTAURANT_CATEGORIES } from '../../GraphQL/RestaurantCategory/RestaurantCategory';

const Restaurant:React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { loading, data = {} } = useQuery(FIND_ONE_RESTAURANT, { variables: { id } });
  const { findOneRestaurant = [] } = data;
  const { minPrice = '', deliveryTime = '' } = findOneRestaurant;

  const { data: CategoriesData = {} } = useQuery(FIND_BY_KEY_RESTAURANT_CATEGORIES, { variables: { data: { field: 'restaurant', value: id } } });
  const { findByKeyRestaurantCategory = [] } = CategoriesData;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading && findOneRestaurant) dispatch(setAsideData({ minPrice, deliveryTime }));
  }, [loading]);

  return (
    <RestaurantStyled>
      <Section>
        <Container>
          <StyledFlex justify="space-between">

            <MainRestaurantStyled>
              <RestaurantInfo
                name={findOneRestaurant.name}
                minPrice={findOneRestaurant.minPrice}
                deliveryTime={findOneRestaurant.deliveryTime}
                media={findOneRestaurant.media}
              />
              <Categories categories={findByKeyRestaurantCategory} />
              <Products categories={findByKeyRestaurantCategory} />
            </MainRestaurantStyled>

            <AsideWrapper />

            {(window.innerWidth <= 480) && (
              <Bar />
            )}
          </StyledFlex>
        </Container>
      </Section>
    </RestaurantStyled>
  );
};

export default Restaurant;
