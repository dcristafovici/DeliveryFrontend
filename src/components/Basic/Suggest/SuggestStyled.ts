import styled from 'styled-components';
import { COLORS, HELPERS } from '../../../constants';

export const SuggestStyled = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 500px;
  &.form-element {
    input {
      background: ${COLORS.GRAY_4} ;
    }
  }
  input {
    height: 50px;
    padding-right: 30px;
    box-sizing: border-box;
    background: ${COLORS.WHITE};
  }
  .suggested {
    &-results {
      position: absolute;
      top: calc(100% - 2px);
      left: 0;
      background: ${COLORS.WHITE};
      box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.0979294), 0px 1px 3px rgba(0, 0, 0, 0.1);
      border-bottom-right-radius: 3px;
      border-bottom-left-radius: 3px;
      width: 100%;
      z-index: 5;
      padding-top: 5px;
      border-top: 1px solid ${COLORS.GRAY_2};
      ul,
      li {
        width: 100%;
      }
      li {
        height: auto;
        min-height: 30px;
        padding-top: 5px;
        padding-bottom: 5px;
        display: flex;
        align-items: center;
        transition: ${HELPERS.TRANSITION_FAST};
        cursor: pointer;
        padding-left: 15px;
        font-weight: 16px;
        width: 100%;
        font-weight: 400;
        background: none;
        color: ${COLORS.GRAY_1};
        transition: ${HELPERS.TRANSITION_FAST};
        &:hover,
        &.is-selected {
          background: ${COLORS.PRIMARY_BLUE};
          color: ${COLORS.WHITE}
        }
        &.is-selected {
          pointer-events: none;
          background: ${COLORS.BLUE_DARK};
        }
      }
    }
  }
  &.user-seted {
    input {
      pointer-events: none;
      color: ${COLORS.PRIMARY_BLUE}
    }
  }
  .address-reset {
    position: absolute;
    right: 5px;
    cursor: pointer;
    top: 50%;
    font-size: 20px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    &:hover {
      svg {
        fill: ${COLORS.RED_DARK};
      }
    }
    svg {
      fill: ${COLORS.RED};
      width: 70%;
      height: auto;
      transition: ${HELPERS.TRANSITION};
    }
  }

  &.dark {
    input {
      background: ${COLORS.GRAY_4}
    }
  }
`;
