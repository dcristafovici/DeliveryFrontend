import React from 'react';
import Container from '../../components/Basic/Container';
import { StyledFlex } from '../../components/Basic/Flex/StyledFlex';
import Section from '../../components/Basic/Section';
import Orders from '../../components/Orders';
import Sidebar from '../../components/Sidebar';
import { AccountStyled, MainAccountStyled, SidebarWrapperStyled } from './AccountStyled';

const Account:React.FC = () => (
  <AccountStyled>
    <Section>
      <Container>
        <div className="account-title">Account</div>
        <StyledFlex justify="space-between">

          <SidebarWrapperStyled>
            <Sidebar />
          </SidebarWrapperStyled>

          <MainAccountStyled>
            <Orders />
          </MainAccountStyled>

        </StyledFlex>
      </Container>
    </Section>
  </AccountStyled>
);

export default Account;
