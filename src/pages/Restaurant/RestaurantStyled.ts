import styled from 'styled-components';
import { device } from '../../utils/breakpoints';

export const RestaurantStyled = styled.div`
  margin-top: 30px;
`;

export const MainRestaurantStyled = styled.div`
  width: 74.3243243243%;
  @media only screen and (${device.xs}){
   width: 100%;
  }
`;

export const AsideWrapperStyled = styled.div`
  width: 22.972972973%;
  @media only screen and (${device.xs}){
   width: 100%;
   position: fixed;
   top: 0;
   right: 0;
   height: 100%;
   transform: translateX(-100%);
   opacity: 0;
   z-index: -1;
   visibility: hidden;
   pointer-events: none;
  }
`;
