import styled from 'styled-components';
import { COLORS } from '../../constants';
import { device } from '../../utils/breakpoints';

export const OrdersStyled = styled.div`
  width: 100%;
  background: ${COLORS.WHITE};
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.0979294), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 35px 40px;
  .orders-title {
    font-size: 18px;
    color: ${COLORS.PRIMARY_BLUE};
    font-weight: 700;
    margin-bottom: 25px;
  }

  @media only screen and (${device.xs}){
    padding: 20px;
    .orders {
      &-title {
        margin-bottom: 10px;
        font-size: 14px;
      }
    }
  }
`;
