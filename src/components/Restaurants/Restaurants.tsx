import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import Container from '../Basic/Container';
import Section from '../Basic/Section';
import Title from '../Basic/Title/Title';
import RestaurantsItems from './RestaurantsItems';
import { RestaurantsStyled } from './RestaurantsStyled';
import { FIND_RESTAURANTS } from '../../GraphQL/Restaurants/RestaurantsQueries';
import { RestaurantCardInterface } from './RestaurantCard/RestaurantCardInterface';
import { getDataFromGraphqlRequest } from '../../hooks/useGraphqlData';

const Restaurants:React.FC = () => {
  const [items, setItems] = useState<RestaurantCardInterface[]>([]);
  const { loading = true, data = {} } = useQuery(FIND_RESTAURANTS, { variables: {
    data: { page: 1, pageSize: 20 } },
  });
  useEffect(() => {
    if (!loading && Object.keys(data).length) {
      const { list } = getDataFromGraphqlRequest(data);
      setItems(list);
    }
  }, [data]);
  return (
    <RestaurantsStyled>
      <Section>
        <Container>
          <Title title="Restaurants" />
          <RestaurantsItems restaurants={items} />
        </Container>
      </Section>
    </RestaurantsStyled>
  );
};

export default Restaurants;
