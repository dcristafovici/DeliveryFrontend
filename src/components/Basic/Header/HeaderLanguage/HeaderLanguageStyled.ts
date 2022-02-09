import styled from 'styled-components';
import { COLORS, HELPERS } from '../../../../constants';

export const HeaderLanguageStyled = styled.div`
  ul {
    display: flex;
    justify-content: space-between;
  }
  li {
    padding-right: 10px;
    cursor: pointer;
    &:last-child {
      padding-right: 0;
      &::after {
        content: none;
      }
    }
    &::after {
      content: '/';
      font-size: 14px;
      color: ${COLORS.GRAY_1};
      position: relative;
      left: 5px;
    }
    span {
      font-size: 14px;
      line-height: 1.2
      text-transform: uppercase;
      color: ${COLORS.GRAY_1};
      transition: ${HELPERS.TRANSITION}
    }
    &.active {
      span {
        color: ${COLORS.PRIMARY_BLUE}
      }
    }
  }
`;
