import styled from 'styled-components';
import { COLORS, HELPERS } from '../../../constants';

export const ProductsItemStyled = styled.div`
  width: 30.9090909091%;
  margin-right: 3.63636365%;
  margin-bottom: 30px;
  background: ${COLORS.WHITE};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.065778);
  border: 1px solid transparent;
  transition: ${HELPERS.TRANSITION};
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    border: 1px solid rgba(104, 154, 227, 0.3);
    box-shadow: 0px 2px 10px 2px rgba(104, 154, 227, 0.3)
  }
  &:nth-child(3n) {
    margin-right: 0;
  }
  .products-item {
    &__photo {
      width: 100%;
      height: 210px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      overflow: hidden;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, #000000 100%);
        mix-blend-mode: normal;
        opacity: 0.5;
        width: 100%;
        height: 68px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__name {
      font-size: 16px;
      font-weight: 500;
      color: ${COLORS.BLUE_DARK};
      margin-bottom: 10px;
    }
    &__price {
      font-size: 18px;
      color: ${COLORS.PRIMARY_DARK};
      letter-spacing: 1px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    &__description {
      font-size: 12px;
      color: ${COLORS.GRAY_3};
      line-height: 1.3;
    }
    &__content {
      padding: 15px;
      box-sizing: border-box;

    }
  }
`;
