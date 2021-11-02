import styled from 'styled-components';
import { HELPERS } from '../../../constants';
import { device } from '../../../utils/breakpoints';

export const AsideWrapperStyled = styled.div`
  width: 22.972972973%;
  @media only screen and (${device.xs}){
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    transform: translateX(100%);
    opacity: 0;
    z-index: -1;
    visibility: hidden;
    pointer-events: none;
    transition: ${HELPERS.TRANSITION};
    &.aside-mobile__show {
      transform: translateX(0);
      opacity: 1;
      z-index: 16;
      visibility: visible;
      pointer-events: all;
      opacity: 1;
    }
  }
`;
