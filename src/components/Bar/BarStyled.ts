import styled from 'styled-components';
import { COLORS } from '../../constants';

export const BarStyled = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 15;
  height: 80px;
  padding: 15px;
  box-sizing: border-box;
  background: ${COLORS.WHITE};
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.0979294), 0px 1px 3px rgba(0, 0, 0, 0.1); 
  width: 100%;
`;

export const BarControllStyled = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  background: ${COLORS.PRIMARY_BLUE};
  box-sizing: border-box;
  border-radius: 20px;
  position: relative;
  .bar {
    &-time,
    &-center,
    &-price {
      color: ${COLORS.WHITE};
    }
    &-center {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
