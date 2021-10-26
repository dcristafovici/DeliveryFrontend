import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import Aside from '../../components/Aside';
import Container from '../../components/Basic/Container';
import { StyledFlex } from '../../components/Basic/Flex/StyledFlex';
import Section from '../../components/Basic/Section';
import Products from '../../components/Products';
import { GET_CATEGORY_BY_RESTAURANT, RESTAURANT_BY_ID } from '../../GraphQL/Queries';
import { MainRestaurantStyled, RestaurantStyled, AsideWrapperStyled } from './RestaurantStyled';
import { setAsideData } from '../../redux/actions/asideAction';
import Categories from '../../components/Categories';

const Restaurant:React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { loading, data = {} } = useQuery(RESTAURANT_BY_ID, { variables: { id } });
  const { RestaurantByID: RestaurantData = [] } = data;
  const { minPrice = '', deliveryTime = '' } = RestaurantData;

  const { data: CategoryData = {} } = useQuery(GET_CATEGORY_BY_RESTAURANT, { variables: { data: { field: 'restaurant', value: id } } });
  const { CategoryOrderfindByKey: CategoriesGet = [] } = CategoryData;

  const dispatch = useDispatch();
  useEffect(() => {
    if (!loading && RestaurantData) dispatch(setAsideData({ minPrice, deliveryTime }));
  }, [loading]);

  return (
    <RestaurantStyled>
      <Section>
        <Container>
          <StyledFlex justify="space-between">

            <MainRestaurantStyled>
              {/* <RestaurantInfo
                name={RestaurantData.name}
                minPrice={RestaurantData.minPrice}
                deliveryTime={RestaurantData.deliveryTime}
              /> */}
              <Categories categories={CategoriesGet} />
              <Products categories={CategoriesGet} />
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
