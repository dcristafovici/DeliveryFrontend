import styled from 'styled-components';
import { COLORS } from '../../../constants';
import { device } from '../../../utils/breakpoints';

export const OrdersWrapperStyled = styled.div`
  margin-bottom: 40px;
  &:last-child{
    margin-bottom: 0;
  }
  .orders-wrapper__date {
    font-size: 16px;
    color: ${COLORS.PRIMARY_DARK};
    font-weight: 500;
    display: block;
    padding-bottom: 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid ${COLORS.GRAY_2};
  }
  @media only screen and (${device.xs}){
    .orders-wrapper {
      &__date {
        font-size: 12px;
      }
    }
  }
`;
