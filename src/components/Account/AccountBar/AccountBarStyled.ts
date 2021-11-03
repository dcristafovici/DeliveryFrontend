import styled from 'styled-components';
import { COLORS } from '../../../constants';

export const AccountBarStyled = styled.div`
  position: fixed;
  height: 40px;
  width: 100%;
  z-index: 15;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLORS.PRIMARY_BLUE};
  color: ${COLORS.WHITE};
  svg {
    width: 22px;
    height: 22px;
    fill: ${COLORS.WHITE};
  }
  span {
    font-size: 16px;
    margin-left: 10px;
    color: ${COLORS.WHITE};
  }
`;
