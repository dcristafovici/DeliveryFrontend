import React from 'react';
import { useDispatch } from 'react-redux';
import { closePopup } from '../../redux/actions/showAction';
import { useTypeSelector } from '../../redux/reduxHooks';
import { ShowControll } from './ShowControll/ShowControll';
import { ShowControllInterface } from './ShowControll/ShowControllInterface';
import { OverlayStyled, ShowStyled } from './ShowStyled';

const Show:React.FC = () => {
  const dispatch = useDispatch();
  const { isOpened, openedID } = useTypeSelector((state) => state.showReducer);
  const ShowComponent = ShowControll.find(
    (component:ShowControllInterface) => component.id === openedID,
  )?.component;
  return (
    <div className="show-wrapper">
      {isOpened && (
        <>
          <OverlayStyled onClick={() => dispatch(closePopup())} />
          <ShowStyled>
            <ShowComponent />
          </ShowStyled>
        </>
      )}
    </div>
  );
};

export default Show;
