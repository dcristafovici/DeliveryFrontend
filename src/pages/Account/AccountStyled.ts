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

export const MainAccountStyled = styled.div`
  width: calc(100% - 380px);
  @media only screen and (${device.xs}){
    width: 100%;
  }
`;
