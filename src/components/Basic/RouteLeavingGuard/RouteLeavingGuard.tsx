import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearAside } from '../../../redux/actions/asideAction';
import { closePopup, openPopup } from '../../../redux/actions/showAction';
import { useTypeSelector } from '../../../redux/reduxHooks';
import { usePrompt } from '../../../utils/LeavingGuardUtils';
import { ShowControllEnum } from '../../Show/ShowControll/ShowControllEnum';

const RouteLeavingGuard: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cart = [] } = useTypeSelector((state) => state.asideReducer);

  const [lastLocation, setLastLocation] = useState<Location | null>(null);
  const [confirmedNavigation, setConfirmedNavigation] = useState(false);

  const handleConfirmNavigationClick = ():void => {
    setConfirmedNavigation(true);
  };

  const handleBlockedNavigation = (nextLocation: Location): boolean => {
    if (!confirmedNavigation) {
      setLastLocation(nextLocation);
      dispatch(openPopup(ShowControllEnum.LEAVE_PAGE_ALERT, {
        confirmationFunction: handleConfirmNavigationClick,
      }));
      return false;
    }
    dispatch(clearAside());
    dispatch(closePopup());
    return true;
  };

  useEffect(() => {
    if (confirmedNavigation && lastLocation) {
      navigate(lastLocation.pathname);
    }
  }, [confirmedNavigation, lastLocation]);
  usePrompt(handleBlockedNavigation, cart.length > 0);
  return (
    // TO:DO Rewrite route leaving guard for v6.
    <h1>dssd</h1>
  );
};

export default RouteLeavingGuard;
