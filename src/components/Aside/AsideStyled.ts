import styled from 'styled-components';
import { device } from '../../utils/breakpoints';

export const AsideStyled = styled.aside`
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.0979294), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 14px;
  box-sizing: border-box;
  max-height: calc(100vh - 40px);
  box-sizing: border-box;
  position: sticky;
  top: 50px;
  z-index: 20;
  @media only screen and (${device.xs}){
    position: absolute;
    top: 0;
    height: 100%;
    max-height: 100%;
  }
`;
