import styled from 'styled-components';
import { COLORS } from '../../../constants';

export const OrdersWrapperStyled = styled.div`

  .orders-wrapper__date {
    font-size: 16px;
    color: ${COLORS.PRIMARY_DARK};
    font-weight: 500;
    display: block;
    padding-bottom: 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid ${COLORS.GRAY_2};
}
`;
