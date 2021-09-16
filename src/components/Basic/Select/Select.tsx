import React, { useState } from 'react';
import { SelectInterface, SelectValue } from './SelectInterface';
import { SelectStyled, SelectFieldStyled, SelectedListStyled } from './SelectStyled';

const Select:React.FC<SelectInterface> = (
  { values, className, onChangeEvent, initialValue }: SelectInterface,
) => {
  const [choosedItem, setChoosedItem] = useState(initialValue);
  const [statusSelect, setStatusSelect] = useState(false);

  const SELECT_FIELD_STATUS = statusSelect ? ' select-open' : '';

  const toggleSelectHandler = (event:React.MouseEvent<HTMLDivElement>) => {
    setStatusSelect((prevStatus:boolean) => !prevStatus);
  };
  const onChooseHandler = (event:React.MouseEvent<HTMLLIElement>, name:string) => {
    event.preventDefault();
    setStatusSelect(false);
    setChoosedItem(name);
    onChangeEvent(name);
  };
  return (
    <SelectStyled className={className}>
      <SelectFieldStyled onClick={toggleSelectHandler} className={className + SELECT_FIELD_STATUS}>
        <span>{choosedItem}</span>
      </SelectFieldStyled>
      {statusSelect && (
        <SelectedListStyled className={className}>
          <ul>
            {values && values.map((value:SelectValue) => (
              <li
                onClick={(event) => onChooseHandler(event, value.name)}
                key={value.label}
                className={value.name === choosedItem ? 'is-selected' : ''}
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
