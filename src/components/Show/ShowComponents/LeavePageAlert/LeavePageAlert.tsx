import React from 'react';
import { useDispatch } from 'react-redux';
import { closePopup } from '../../../../redux/actions/showAction';
import { useTypeSelector } from '../../../../redux/reduxHooks';
import Button from '../../../Basic/Button';
import { LeavePageAlertStyled } from './LeavePageAlertStyled';

const LeavePageAlert:React.FC = () => {
  const dispatch = useDispatch();
  const { date } = useTypeSelector((state) => state.showReducer);
  const { confirmationFunction } = date;
  return (
    <LeavePageAlertStyled>
      <div className="leave-page__title">Are you sure?</div>
      <div className="leave-page__paragraph">You are moving without saving data.</div>
      <div className="leave-page__buttons">
        <Button name="Cancel" onClickEvent={() => dispatch(closePopup())} />
        <Button name="Sure" onClickEvent={() => confirmationFunction()} />
      </div>
    </LeavePageAlertStyled>
  );
};
export default LeavePageAlert;
