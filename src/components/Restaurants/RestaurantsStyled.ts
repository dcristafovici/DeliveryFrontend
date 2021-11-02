import styled from 'styled-components';
import { device } from '../../utils/breakpoints';

export const RestaurantsStyled = styled.div`
  margin-bottom: 120px;
  @media only screen and (${device.xs}){
    margin-bottom: 50px;
  }
`;
