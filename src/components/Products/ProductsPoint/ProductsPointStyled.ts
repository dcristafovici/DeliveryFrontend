import styled from 'styled-components';
import { COLORS } from '../../../constants';
import { device } from '../../../utils/breakpoints';

export const ProductsPointStyled = styled.div`
  .products-point{
    &__category {
      font-size: 28px;
      line-height: 1.2;
      font-weight: 700;
      margin-bottom: 15px;
      color: ${COLORS.PRIMARY_DARK};
    }
  }
`;

export const ProductsItemsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media only screen and (${device.xs}){
   justify-content: space-between;
  }
`;
