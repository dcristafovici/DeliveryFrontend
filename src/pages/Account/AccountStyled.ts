import styled from 'styled-components';
import { COLORS } from '../../constants';

export const AccountStyled = styled.div`
  padding-top: 22px;
  padding-bottom: 50px;
  .account-title{
    font-size: 28px;
    font-weight: 700;
    color: ${COLORS.PRIMARY_DARK};
    margin-bottom: 30px;
  }
`;

export const SidebarWrapperStyled = styled.div`
  width: 350px;
`;

export const MainAccountStyled = styled.div`
  width: calc(100% - 380px);
`;
