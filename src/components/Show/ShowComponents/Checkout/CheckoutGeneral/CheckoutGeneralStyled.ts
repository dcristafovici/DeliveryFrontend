import styled from 'styled-components';
import { COLORS } from '../../../../../constants';

export const CheckoutGeneralStyled = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  .checkout-general__item {
    margin-right: 60px;
    &:last-child {
      margin-right: 0;
    }
  }
  span {
    display: block;
    &:first-child {
      font-size: 12px;
      line-height: 1.25;
      color: ${COLORS.GRAY_3};
      margin-bottom: 5px;
    }
    &:last-child {
      color: ${COLORS.PRIMARY_DARK};
      font-size: 18px;
      line-height: 1.2;
      font-weight: 500;
    }
  }
`;
