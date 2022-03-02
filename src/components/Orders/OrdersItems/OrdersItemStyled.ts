import styled from 'styled-components';
import { COLORS, HELPERS } from '../../../constants';
import food from '../../../assets/img/food.svg';
import star from '../../../assets/img/star.svg';
import { device } from '../../../utils/breakpoints';

export const OrdersItemsStyled = styled.div`
  background: ${COLORS.WHITE};
  box-sizing: border-box;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.0979294), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  .orders-item {
    &__top {
      display: flex;
      align-items: center;
      border-bottom: 1px solid ${COLORS.GRAY_2};
      height: 60px;
      padding-left: 20px;
      padding-right: 20px;
      box-sizing: border-box;
      cursor: pointer;
      justify-content: space-between;
    }
    &__bottom {
      padding: 20px;
      padding-bottom: 35px;
      box-sizing: border-box;
    }
  }
  .orders-top{
    &__left {
      display: flex;
      align-items: center;
    }
    &__number {
      font-size: 16px;
      font-weight: 500;
      color: ${COLORS.PRIMARY_BLUE};
      margin-right: 25px;
    }
    &__toggle {
      cursor: pointer;
      display: flex;
      align-items: center;
      svg {
        fill: ${COLORS.PRIMARY_BLUE};
        width: 10px;
        height: 10px;
        margin-left: 3px;
        transition: ${HELPERS.TRANSITION};
      }
      &.isOpen {
        svg {
          transform: rotate(180deg);
        }
      }
      &:hover {
        span {
          color: ${COLORS.BLUE_DARK}
        }
        svg {
          fill: ${COLORS.BLUE_DARK}
        }
      }
    }
    &__toggle span{
      font-size: 14px;
      font-weight: 400;
      color: ${COLORS.PRIMARY_BLUE};
      transition: ${HELPERS.TRANSITION};
    }
    &__status{
      display: flex;
      align-items: center;
      span {
        font-size: 14px;
        font-weight: 400;
        color: ${COLORS.PRIMARY_BLUE};
        &:nth-child(1) {
         color: ${COLORS.GRAY_3}; 
         margin-right: 5px;
        }
      }
    }
  }

  .orders {
    &-date {
      font-weight: 400;
      color: ${COLORS.PRIMARY_DARK};
    }
    &-general {
      display: flex;
      align-items: center;
      margin-bottom: 25px;
      &__restaurant {
        font-size: 16px;
        margin-right: 25px;
        font-weight: 400;
        color: ${COLORS.GRAY_1};
        position: relative;
        padding-left: 21px;
        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          width: 14px;
          height: 14px;
          margin-top: -7.5px;
          background: url(${food}) no-repeat center/contain;
        }
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
    }
    &-actions{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 25px;
    }
    &-total {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      span {
        display: block;
        &:first-child {
          margin-right: 15px;
          font-weight: 500;
          font-size: 14px;
          color: ${COLORS.GRAY_3};
        }
        &:last-child {
          font-size: 16px;
          font-weight: 500;
          color: ${COLORS.PRIMARY_DARK};
        }
      }
    }
  }

  @media only screen and (${device.xs}){
    .orders {
      &-repeat {
        button {
          height: 30px;
          min-width: auto;
          padding-left: 20px;
          padding-right: 20px;
          span {
            font-size: 12px;
          }
        }
      }
      &-total {
        span {
          &:first-child {
            margin-right: 5px;
            font-size: 12px;
          }
          &:nth-child(2) {
            font-size: 12px;
          }
        }
      }
      &-item {
        &__top {
          flex-wrap: wrap;
          padding: 10px;
          height: auto;
        }
        &__bottom {
          padding: 10px;
        }
      }
      &-top {
        &__left {
          flex-wrap: wrap;
          margin-bottom: 10px;
        }
        &__right {
          width: 100%;
        }
        &__toggle {
          width: 100%;
          span {
            font-size: 12px;
          }
        }
        &__number {
          font-size: 12px;
          margin-bottom: 5px;
          margin-right: 0;
        }
        &__status {
          span {
            font-size: 12px;
          }
        }
      }
      &-general {
        &__restaurant {
          font-size: 14px;
          padding-left: 15px;
          &::before {
            width: 10px;
            height: 10px;
            margin-top: -5px;
          }
        }
        &__rating {
          height: 20px;
          padding-left: 18px;
          font-size: 12px;
          &::before {
            width: 8px;
            height: 8px;
            margin-top: -4px;
          }
        }
      }
    }
  }
`;
