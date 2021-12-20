import styled from 'styled-components';
import { COLORS, HELPERS } from '../../../constants';
import close from '../../../assets/img/close.svg';
import { device } from '../../../utils/breakpoints';

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
      &:hover {
        color: ${COLORS.PRIMARY_BLUE};
      }
      &:first-child {
        border-bottom: 1px solid transparent;
      }
      &:last-child {
        border-top: 1px solid transparent;
      }
      &.aside-controll__remove {
        font-size: 0;
        background: url(${close}) no-repeat center/7px;
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
        background: none;
      }
    }
  }

  @media only screen and (${device.xs}){
    .aside-controll__element {
      opacity: 1;
    }
    .aside-item__controll {
      background: #FFFFFF;
      box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.0979294), 0px 1px 3px rgba(0, 0, 0, 0.1);
      border-radius: 3px;
    }
  }
`;

export const AsideItemsStyled = styled.div`
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${COLORS.PRIMARY_BLUE};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${COLORS.PRIMARY_BLUE};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${COLORS.PRIMARY_BLUE};
    border-radius: 10px;
    border: 2px solid transparent;
    background-clip: content-box;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }
  .aside-items {
    max-height: calc(100vh - 360px);
  }

  @media only screen and (${device.xs}){
    .aside-items {
      max-height: calc(100vh - 300px)
    }
  }
`;
