import styled from 'styled-components';
import { COLORS } from '../../../constants';

export const OrderPositionStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
  .orders {
    &-position {
      &__image {
        width: 50px; 
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      &__name {
        span {
          display: block;
          &:first-child {
            font-size: 14px;
            line-height: 1.3;
            color: ${COLORS.GRAY_1}
          }
          &:last-child {
            font-size: 12px;
            color: ${COLORS.GRAY_3};
            font-weight: 400;
            margin-top: 4px;
          }
        }
      }
      &__quantity {
        font-size: 14px;
        color: ${COLORS.PRIMARY_BLUE};
        font-weight: 500;
      }
      &__price {
        font-size: 14px;
        color: ${COLORS.PRIMARY_DARK};
        font-weight: 500;
      }
      &__quantity,
      &__price {
        position: relative;
        top: -10px;
      }
      &__image {
        width: 50px;
      }
      &__name {
       width: 69.6721311475%; 
      }
    }
  }
`;
