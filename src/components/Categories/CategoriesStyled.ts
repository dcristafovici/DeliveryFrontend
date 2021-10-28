import styled from 'styled-components';
import { COLORS, HELPERS } from '../../constants';

export const CategoriesStyled = styled.div`
  .categories-wrapper {
    display: flex;
    align-items: center;
    height: 40px;
    justify-content: space-between;
    > ul {
     display: flex;
      align-items: center;
      flex: auto;
      top: 0;
      z-index: 20;
      width: 1110px;
      li {
        flex: auto;
        display: inline-flex;
        align-items: center;
        height: 40px;
        border-radius: 5px;
        background: ${COLORS.WHITE};
        color: ${COLORS.GRAY_6};
        box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.0979294), 0px 1px 3px rgba(0, 0, 0, 0.1);
        justify-content: center;
        cursor: pointer;
        transition: ${HELPERS.TRANSITION};
        margin-right: 10px;
        &:hover {
          background: ${COLORS.PRIMARY_BLUE};
          color: ${COLORS.WHITE}
        }
        &:last-child {
          margin-right: 0;
        }
        &.category-active {
          background: ${COLORS.BLUE_DARK};
          color: ${COLORS.WHITE};
        }
      }
    }
    
  }
  
  .categories {
    &-placeholder{
      width: 100%;
      height: 40px;
      display: none;
    }
    &-others {
      margin-left: 20px;
      position: relative;
      &__name {
        height: 40px;
        display: inline-flex;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;
        cursor: pointer;
        box-sizing: border-box;
        border-radius: 5px;
        box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.0979294), 0px 1px 3px rgba(0, 0, 0, 0.1);
        transition: ${HELPERS.TRANSITION};
        background: ${COLORS.WHITE};
        justify-content: center;
        &:hover,
        &.show {
          background: ${COLORS.PRIMARY_BLUE};
          color: ${COLORS.WHITE}; 
          span {
            color: ${COLORS.WHITE}
          }
          svg {
            fill: ${COLORS.WHITE};
          }
        }
        &.show {
          background: ${COLORS.BLUE_DARK};
          svg {
            transform: rotate(180deg);
          }
        }
        &.is-category {
          background: ${COLORS.BLUE_DARK};
          span {
            color: ${COLORS.WHITE}
          }
          svg {
            fill: ${COLORS.WHITE}
          }
        }
        span {
          color: ${COLORS.GRAY_6};
          transition: ${HELPERS.TRANSITION};
        }
        svg {
          width: 12px;
          height: 12px;
          margin-left: 5px;
          transition: ${HELPERS.TRANSITION};
          fill: ${COLORS.PRIMARY_DARK};
          position: relative;
          right: -5px;
        }
      }
      &__list {
        position: absolute;
        top: calc(100% + 10px);
        background: ${COLORS.WHITE};
        box-shadow: ${HELPERS.BOX_SHADOW};
        right: 0;
        border-radius: 10px;
        display: inline-flex;
        align-items: center;
        box-sizing: border-box;
        width: 200px;
        transform: translateY(-30px);
        opacity: 0;
        z-index: -1;
        transition: ${HELPERS.TRANSITION};
        visibility: hidden;
        pointer-events: none;
        &.show {
          opacity: 1;
          z-index: 4;
          visibility: visible;
          pointer-events: all;
          transform: translateY(0);
        }
        ul {
          width: 100%;
        }
        li {
          cursor: pointer;
          height: 40px;
          display: flex;
          padding-left: 15px; 
          box-sizing: border-box;
          cursor: pointer;
          transition: ${HELPERS.TRANSITION};
          align-items: center;
          &.category-active {
            background: ${COLORS.PRIMARY_BLUE};
            color: ${COLORS.WHITE};
          }
          &:hover {
            background: ${COLORS.GRAY_7}
          }
        }
      }
    }
  }

  &.categories-fixed {
    .categories-placeholder{
      display: block;
    }
    .categories-wrapper__wp {
      position: fixed;
      left: 0;
      background: ${COLORS.WHITE};
      z-index: 10;
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      top: 0;
    }
    .categories-wrapper {
      max-width: 1110px;
      margin: 0 auto;
    }
  }
`;
