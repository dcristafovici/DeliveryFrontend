import styled from 'styled-components';
import { COLORS, HELPERS } from '../../constants';

export const CategoriesStyled = styled.div`
  margin-bottom: 30px;
  position: relative;
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
        z-index: 6;
        width: 250px;
        right: -125px;
        background: ${COLORS.WHITE};
        border-radius: 5px;
        box-sizing: border-box;
        max-height: 500px;
        overflow-x: hidden;
        overflow-y: scroll;
        box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.0979294), 0px 1px 3px rgba(0, 0, 0, 0.1);
        .categories-point {
          width: 100%;
          box-shadow: none;
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
