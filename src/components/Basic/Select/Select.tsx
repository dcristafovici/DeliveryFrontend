import React, { useState } from 'react';
import { SelectInterface, SelectValue } from './SelectInterface';
import { SelectStyled, SelectFieldStyled, SelectedListStyled } from './SelectStyled';

const Select:React.FC<SelectInterface> = ({ values }: SelectInterface) => {
  const [choosedTower, setChoosedTower] = useState('Choise tower');
  const [statusSelect, setStatusSelect] = useState(false);

  const SELECT_FIELD_STATUS = statusSelect ? 'select-open' : '';

  const toggleSelectHandler = (event:React.MouseEvent<HTMLDivElement>) => {
    setStatusSelect((prevStatus:boolean) => !prevStatus);
  };
  const onChooseHandler = (event:React.MouseEvent<HTMLLIElement>, name:string) => {
    event.preventDefault();
    setStatusSelect(false);
    setChoosedTower(name);
  };
  return (
    <SelectStyled>
      <SelectFieldStyled onClick={toggleSelectHandler} className={SELECT_FIELD_STATUS}>
        <span>{choosedTower}</span>
      </SelectFieldStyled>
      {statusSelect && (
        <SelectedListStyled>
          <ul>
            {values && values.map((value:SelectValue) => (
              <li
                onClick={(event) => onChooseHandler(event, value.name)}
                key={value.label}
              >
                {value.name}
              </li>
            ))}
          </ul>
        </SelectedListStyled>
      )}
    </SelectStyled>
  );
};

export default Select;
