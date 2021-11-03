import styled from 'styled-components';
import { COLORS, HELPERS } from '../../constants';
import { device } from '../../utils/breakpoints';

export const AccountStyled = styled.div`
  padding-top: 22px;
  padding-bottom: 50px;
  .account-title{
    font-size: 28px;
    font-weight: 700;
    color: ${COLORS.PRIMARY_DARK};
    margin-bottom: 30px;
  }
  @media only screen and (${device.xs}){
    .account-title {
      font-size: 20px;
      margin-bottom: 20px;
    }
  }
`;

export const SidebarWrapperStyled = styled.div`
  width: 350px;
  @media only screen and (${device.xs}){
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 0;
    transform: translateX(-100%);
    opacity: 0;
    z-index: -1;
    visibility: hidden;
    pointer-events: none;
    transition: ${HELPERS.TRANSITION};
    &.show-mobile {
      opacity: 1;
      z-index: 20;
      visibility: visible;
      pointer-events: all;
      transform: translateX(0);
    }
  }
`;

export const MainAccountStyled = styled.div`
  width: calc(100% - 380px);
  @media only screen and (${device.xs}){
    width: 100%;
  }
`;
