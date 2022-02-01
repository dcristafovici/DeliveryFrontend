import React from 'react';
import { useLocation, useParams } from 'react-router';
import AccountBar from '../../components/Account/AccountBar';
import { CheckoutStyled } from '../../components/Aside/Checkout/CheckoutStyled';
import CheckoutSuccess from '../../components/Aside/Checkout/CheckoutSuccess';
import Container from '../../components/Basic/Container';
import { StyledFlex } from '../../components/Basic/Flex/StyledFlex';
import Section from '../../components/Basic/Section';
import Orders from '../../components/Orders';
import SidebarWrapper from '../../components/Sidebar/SidebarWrapper';
import { getValueFromParam } from '../../utils/getValueFromParam';
import { AccountStyled, MainAccountStyled } from './AccountStyled';

const Account:React.FC = () => {
  const successOrdered = getValueFromParam('successOrdered');
  return (
    <AccountStyled>
      <Section>
        <Container>
          <div className="account-title">Account</div>
          <StyledFlex justify="space-between">

            <SidebarWrapper />

            <MainAccountStyled>
              <Orders />
            </MainAccountStyled>
          </StyledFlex>
        </Container>
      </Section>
      {successOrdered && (
        <CheckoutSuccess orderID={successOrdered} />
      )}
    </AccountStyled>
  );
};

export default Account;
