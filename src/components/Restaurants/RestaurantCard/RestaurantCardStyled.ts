import styled from 'styled-components';
import { COLORS } from '../../../constants';
import star from '../../../assets/img/star.svg';

export const RestaurantCardStyled = styled.div`
  width: 31.5315315315%;
  margin-right: 2.7027027%;
  margin-bottom: 30px;
  &:nth-child(3n) {
    margin-right: 0;
  }
  .restaurant {
    &-card {
      &__top {
        position: relative;
        height: 210px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      &__bottom {
        background: #FFFFFF;
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.065778);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        padding: 15px 20px 25px 20px;
      }
    }
  }

  .card {
    &-top {
      &__info {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 68px;
        padding-left: 20px;
        padding-right: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      &__item {
        height: 29px;
        display: inline-flex;
        align-items: center;
        padding-left: 11px;
        padding-right: 11px;
        background: rgba(0, 0, 0, 0.678021);
        border-radius: 5px;
        color: ${COLORS.YELLOW};
        font-size: 13px;
        letter-spacing: 0.236364px;
      }
      &__photo {
        position: relative;
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 68px;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, #000000 100%);
          mix-blend-mode: normal;
          opacity: 0.5;
        }
      }
    }
    &-bottom {
      &__name {
        font-size: 18px;
        color: ${COLORS.PRIMARY_BLUE};
        padding-bottom: 5px;
        display: block;
        margin-bottom: 10px;
        border-bottom: 1px solid rgba(27, 83, 162, 0.104267);
      }
      &__row {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      &__rating {
        height: 25px;
        display: inline-flex;
        align-items: center;
        padding-left: 20px;
        border-radius: 5px;
        background: ${COLORS.PRIMARY_BLUE};
        color: ${COLORS.WHITE};
        padding-right: 8px;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          left: 5px;
          width: 10px;
          height: 10px;
          background: url(${star}) no-repeat center/contain;
          top: 50%;
          margin-top: -5px;
        }
      }
      &__price {
        font-size: 16px;
        color: ${COLORS.GRAY_1};
      }
    }
  }
`;
