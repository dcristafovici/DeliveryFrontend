import styled from 'styled-components';
import { COLORS } from '../../constants';
import { device } from '../../utils/breakpoints';

export const AuthenticationStyled = styled.div`
  max-width: 540px;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.0979294), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: ${COLORS.WHITE};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
  z-index: 30;
  background: #FFFFFF;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.0979294), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 33px 50px 60px 50px;
  .authentication-title {
    font-size: 28px;
    line-height: 1.2;
    letter-spacing: 0.6px;
    margin-bottom: 30px;
    font-weight: 700;
    text-align: center;
    color: ${COLORS.PRIMARY_DARK};
  }
  @media only screen and (${device.xs}){
    max-width: calc(100% - 30px);
    padding: 30px;
    .authentication {
      &-title {
        font-size: 25px;
        margin-bottom: 20px;
      }
    }
  }
`;
