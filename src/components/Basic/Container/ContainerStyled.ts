import styled from 'styled-components';
import { device } from '../../../utils/breakpoints';

export const ContainerStyled = styled.div`
  width: 100%;
  max-width: 1110px;
  margin: 0 auto;
  @media only screen and (${device.xs}){
    width: calc(100% - 30px)
  }
`;
