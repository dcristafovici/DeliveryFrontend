import styled from 'styled-components';
import { COLORS } from '../../../constants';

export const ProductsPointStyled = styled.div`
  padding-top: 40px;
  &:first-child {
    padding-top: 0
  }
  .products {
    &-point {
      &__title {
        font-size: 28px;
        line-height: 1.2;
        font-weight: 700;
        margin-bottom: 15px;
        color: ${COLORS.PRIMARY_DARK};
      }
    }
  }
`;
