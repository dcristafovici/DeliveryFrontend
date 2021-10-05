import styled from 'styled-components';
import { COLORS } from '../../../constants';

export const AsideLineStyled = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  height: 75px;
  .aside-line {
    &__summs {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 6px;
      span {
        font-size: 12px;
        font-weight: 500;
        color: ${COLORS.GRAY_3};
      }
    }
    &__line {
      width: 100%;
      height: 3px;
      border-radius: 5px;
      background: ${COLORS.GRAY_2};
      position: relative;
      overflow: hidden;
      margin-bottom: 6px;
      i {
        position: absolute;
        left: 0;
        top: 0;
        width: 40%;
        height: 100%;
        background: ${COLORS.PRIMARY_BLUE};
      }
    }
    &__last span{
      font-size: 11px;
      color: ${COLORS.PRIMARY_BLUE};
      font-weight: 400;
      > span {
        margin-left: 5px;
      }
    }
  }
`;
