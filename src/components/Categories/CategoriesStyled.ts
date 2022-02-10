import styled from 'styled-components';
import { COLORS, HELPERS } from '../../constants';

export const CategoriesStyled = styled.div`
  position: sticky;
  top: -1px;
  z-index: 6;
  &.is-sticky {
    background: ${COLORS.WHITE};
    padding: 10px;
    border-bottom-left-radius: 5px;
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.0979294), 0px 1px 3px rgba(0, 0, 0, 0.1);
    border-bottom-right-radius: 5px;
  }
  .categories {
    &-points {
      display: flex;
    }
    &-more{
      flex: auto;
      display: flex;
      justify-content: center;
      &.active {
        .categories-more__title {
          color: ${COLORS.PRIMARY_BLUE};
          svg {
            fill: ${COLORS.PRIMARY_BLUE};
            transform: rotate(-180deg)
          }
        }
      }
      &__title {
        height: 35px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: ${COLORS.GRAY_6};
        width: 100%;
        cursor: pointer;
        transition: ${HELPERS.TRANSITION};
        &.not-default {
          color: ${COLORS.PRIMARY_BLUE};
          svg {
            fill: ${COLORS.PRIMARY_BLUE};
          }
        }
        &:hover {
          color: ${COLORS.BLUE_DARK};
          svg {
            fill: ${COLORS.BLUE_DARK}
          }
        }
        svg {
          width: 11px;
          height: 11px;
          margin-left: 8px;
          color: ${COLORS.GRAY_6};
          transition: ${HELPERS.TRANSITION};
        }
      }
      &__dropdown {
        position: absolute;
        top: calc(100% + 10px);
        z-index: -1;
        width: 250px;
        right: -125px;
        background: ${COLORS.WHITE};
        border-radius: 5px;
        box-sizing: border-box;
        max-height: 500px;
        overflow-x: hidden;
        overflow-y: scroll;
        box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.0979294), 0px 1px 3px rgba(0, 0, 0, 0.1);
        opacity: 0;
        transform: translateY(-20px);
        pointer-events: none;
        transition: ${HELPERS.TRANSITION};
        &.open {
          opacity: 1;
          transform: translateY(0);
          z-index: 6;
          pointer-events: all;
        }
        .categories-point a {
          width: 100%;
          box-shadow: none;
          border-radius: 0;
          padding-left: 20px;
          justify-content: flex-start;
          height: 40px;
          margin-right: 0;
          span {
            font-size: 15px;
          }
        }
      }
    }
  }
`;
