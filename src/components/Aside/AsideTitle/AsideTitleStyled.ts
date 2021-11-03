import styled from 'styled-components';
import { COLORS, HELPERS } from '../../../constants';
import { device } from '../../../utils/breakpoints';

export const AsideTitleStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 25px;
  .aside-title {
    &__name {
     font-size: 18px;
     font-weight: 700;
     color: ${COLORS.PRIMARY_DARK}; 
    }
    &__remove {
      font-size: 12px;
      color: ${COLORS.GRAY_3};
      text-decoration: underline;
      cursor: pointer;
      transition: ${HELPERS.TRANSITION};
      &:hover {
        color: ${COLORS.PRIMARY_BLUE};
      }
    }
  }

  .aside {
    &-back {
      display: none;
      align-items: center;
      svg {
        transform: rotate(-90deg);
        width: 14px;
        height: 14px;
        margin-right: 5px;
      }
    }
  }
  @media only screen and (${device.xs}){
    .aside-back {
      display: flex;
    }
  }
`;
