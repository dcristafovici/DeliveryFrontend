import styled from 'styled-components';
import { COLORS } from '../../../constants';
import { device } from '../../../utils/breakpoints';

export const PopupStyled = styled.div`
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.0979294), 0px 1px 3px rgba(0, 0, 0, 0.1); 
  width: 100%;
  max-width: 540px;
  border-radius: 10px;
  padding: 30px;
  padding-bottom: 40px;
  z-index: 30;
  background: ${COLORS.WHITE};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  .popup {
    &-title {
      font-weight: 700;
      font-size: 30px;
      margin-bottom: 10px
    }
    &-text {
      font-size: 18px;
      margin-bottom: 20px;
    }
    &-button {
      button {
        width: 100%;
        max-width: 300px;
        box-sizing: border-box;
        height: 50px;
        span {
          font-size: 16px;
        }
      }
    }
  }
  @media only screen and (${device.xs}){
    max-width: calc(100% - 30px);
    .popup {
      &-title {
        font-size: 25px;
      }
      &-text {
        font-size: 14px;
      }
      &-button {
        button {
          height: 40px;
          width: auto;
          span {
            font-size: 14px;
          }
        }
      }
    }
  }
`;
