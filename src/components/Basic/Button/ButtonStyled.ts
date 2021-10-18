import styled, { css } from 'styled-components';
import { COLORS, HELPERS } from '../../../constants';
import { ButtonStyledInterface } from './ButtonInterface';

export const ButtonStyled = styled.button`
  height: 40px;
  padding: 0 25px;
  background: ${COLORS.PRIMARY_BLUE};
  display: inline-flex;
  align-items: center;
  height: 40px;
  border-radius: 3px;
  min-width: 160px;
  justify-content: center;
  transition: ${HELPERS.TRANSITION};
  &:hover{
    background: ${COLORS.BLUE_DARK};
  }
  span {
    color: ${COLORS.WHITE};
    font-weight: 500;
    font-size: 13px;
  }
  &.transparent {
    background: transparent;
    border: 1px solid ${COLORS.PRIMARY_BLUE};
    span {
      color: ${COLORS.PRIMARY_BLUE}
    }
    &:hover{
      background: ${COLORS.BLUE_DARK};
      border-color: ${COLORS.BLUE_DARK};
      span {
        color: ${COLORS.WHITE}
      }
    }
  }
  &.full {
    width: 100%;
  }
  ${(props:ButtonStyledInterface) => props.disabled && css`
    background ${COLORS.GRAY_5};
    color: ${COLORS.GRAY_1};
    pointer-events: none;
    opacity: 0.5;
  `}
`;
