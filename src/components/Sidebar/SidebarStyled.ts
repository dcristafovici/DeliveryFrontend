import styled from 'styled-components';
import { COLORS, HELPERS } from '../../constants';
import { device } from '../../utils/breakpoints';

export const SidebarStyled = styled.div`
  background: ${COLORS.WHITE};
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.0979294), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 35px 40px;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  @media only screen and (${device.xs}){
    height: 100%;
    border-radius: 0;
  }
`;
