import styled from 'styled-components';
import { device } from '../../utils/breakpoints';

export const RestaurantStyled = styled.div`
  margin-top: 30px;
`;

export const MainRestaurantStyled = styled.div`
  width: 74.3243243243%;
  position: relative;
  z-index: 15;
  @media only screen and (${device.xs}){
   width: 100%;
  }
`;
