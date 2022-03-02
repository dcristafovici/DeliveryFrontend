import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../../components/Basic/Container';
import { StyledFlex } from '../../components/Basic/Flex/StyledFlex';
import Section from '../../components/Basic/Section';
import Orders from '../../components/Orders';
import { ShowControllEnum } from '../../components/Show/ShowControll/ShowControllEnum';
import SidebarWrapper from '../../components/Sidebar/SidebarWrapper';
import { openPopup } from '../../redux/actions/showAction';
import { getValueFromParam } from '../../utils/getValueFromParam';
import { AccountStyled, MainAccountStyled } from './AccountStyled';

const Account:React.FC = () => {
  const successOrdered = getValueFromParam('successOrdered');

  const dispatch = useDispatch();
  useEffect(() => {
    if (successOrdered) {
      dispatch(openPopup(ShowControllEnum.CHECKOUT_SUCCESS, { orderID: successOrdered }));
    }
  }, []);
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
    </AccountStyled>
  );
};

export default Account;
