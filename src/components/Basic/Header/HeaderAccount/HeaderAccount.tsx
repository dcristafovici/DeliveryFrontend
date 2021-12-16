import React, { useState } from 'react';
import { useTypeSelector } from '../../../../redux/reduxHooks';
import Popup from '../../../Popup';
import AuthPopup from '../../../Popup/AuthPopup';
import Overlay from '../../../Popup/Overlay';
import Button from '../../Button';
import { HeaderAccountStyled } from './HeaderAccountStyled';

const HeaderAccount:React.FC = () => {
  const [authentication, setAuthentication] = useState(false);
  const { id } = useTypeSelector((state) => state.userReducer);
  return (
    <HeaderAccountStyled>
      {id ? (
        <h1>user is authenticated</h1>
      ) : (
        <Button
          disabled={false}
          name="Sign In"
          className="transparent"
          onClickEvent={() => setAuthentication(true)}
        />
      )}
      {authentication && (
        <Popup>
          <Overlay onClickEvent={() => setAuthentication(false)} />
          <AuthPopup onClose={() => setAuthentication(false)} />
        </Popup>
      )}
    </HeaderAccountStyled>
  );
};

export default HeaderAccount;
