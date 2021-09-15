import styled from 'styled-components';
import { COLORS, HELPERS } from '../../../constants';

export const AsideItemStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  .aside-item {
    &__name {
      width: calc(100% - 90px);
      span {
        display: block;
        font-size: 12px;
        font-weight: 500;
        color: ${COLORS.PRIMARY_DARK};
        &:nth-child(2) {
          color: ${COLORS.GRAY_3};
          font-size: 12px;
          font-weight: 400;
          margin-top: 5px;
        }
      }
    }
    &__price span{
      font-size: 13px;
      font-weight: 500;
    }
    &__controll {
      width: 25px;
      height: 75px;
      transition: ${HELPERS.TRANSITION};
      &:hover {
        background: #FFFFFF;
        box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.0979294), 0px 1px 3px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        .aside-controll__element{
          border-color: ${COLORS.GRAY_2};
          opacity: 1;
        }
      }
    }
    &__price {
      width: 50px;
    }
  }

  .aside-controll {
    &__element { 
      width: 100%;
      text-align: center;
      opacity: 0;
      cursor: pointer;
      height: 25px;
      color: ${COLORS.GRAY_3};
      transition: ${HELPERS.TRANSITION};
      &:hover {
        color: ${COLORS.PRIMARY_BLUE};
      }
      &:first-child {
        border-bottom: 1px solid transparent;
      }
      &:last-child {
        border-top: 1px solid transparent;
      }
    }
    &__input {
      input {
        width: 100%;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        font-weight: 500; 
        text-align: center;
        font-size: 13px;
        color: ${COLORS.PRIMARY_BLUE};
      }
    }
  }
`;
