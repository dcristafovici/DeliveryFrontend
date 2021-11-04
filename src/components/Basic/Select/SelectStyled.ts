import styled from 'styled-components';
import { COLORS, HELPERS } from '../../../constants';
import down from '../../../assets/img/down.svg';
import { device } from '../../../utils/breakpoints';

export const SelectStyled = styled.div`
  position: relative;
`;

export const SelectFieldStyled = styled.div`
  width: 100%;
  background: ${COLORS.WHITE};
  border-radius: 3px;
  height: 45px;
  padding-left: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    right: 15px;
    width: 14px;
    height: 8px;
    transition: ${HELPERS.TRANSITION};
    background: url(${down}) no-repeat center/contain;
  }
  span {
    color: ${COLORS.GRAY_1};
    font-weight: 400;
    font-size: 16px;
  }
  &.select-open{
    &::after{
      transform: rotate(-180deg);
    }
  }
  &.select-dark {
    background: ${COLORS.GRAY_4};
  }
  @media only screen and (${device.xs}){
   height: 40px;
   span {
     font-size: 14px;
   } 
  }
`;

export const SelectedListStyled = styled.div`
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
  ul {
    max-height: 340px;
    overflow-y: scroll;
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

`;
