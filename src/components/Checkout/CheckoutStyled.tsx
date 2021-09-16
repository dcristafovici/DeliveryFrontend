import styled from 'styled-components';
import { COLORS } from '../../constants';

export const CheckoutStyled = styled.div`
  max-width: 540px;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.0979294), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: ${COLORS.WHITE};
  position: fixed;
  left: 50%;
  top: 20px;
  width: 100%;
  z-index: 30;
  background: #FFFFFF;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.0979294), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transform: translateX(-50%);
  padding: 33px 50px 60px 50px;
  .checkout-title {
    font-size: 28px;
    line-height: 1.2;
    letter-spacing: 0.6px;
    margin-bottom: 30px;
    font-weight: 700;
    text-align: center;
    color: ${COLORS.PRIMARY_DARK};
  }
  .checkout-info {
    margin-top: 20px;
    font-size: 12px;
    letter-spacing: 0.138462px;
    line-height: 1.4;
    font-weight: 400;
    color: ${COLORS.GRAY_1};
    span {
      font-size: inherit;
      font-weight: inherit;
      letter-spacing: inherit;
      color: ${COLORS.PRIMARY_BLUE};
    }
  }
`;

export const OverlayStyled = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 25;
`;
