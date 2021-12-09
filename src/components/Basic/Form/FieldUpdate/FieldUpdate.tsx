import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { UPDATE_USER } from '../../../../GraphQL/Mutations';
import { useTypeSelector } from '../../../../redux/useTypeSelector';
import { CheckIcon, EditIcon } from '../../Icons';
import { fieldStateEnum, FieldUpdateInterface } from './FieldUpdateInterface';
import { FieldUpdateStyled } from './FieldUpdateStyled';

const FieldUpdate:React.FC<FieldUpdateInterface> = (
  { type = 'text', name, placeholder = '', defaultValue = '', label }: FieldUpdateInterface,
) => {
  const [initialValue, setInitialValue] = useState<string>(defaultValue);
  const [inputValue, setInputValue] = useState<string>(defaultValue);
  const [fieldState, setFieldState] = useState(fieldStateEnum.EDIT);

  const dispatch = useDispatch();

  const [error, setError] = useState('');
  useEffect(() => {
    setInitialValue(defaultValue);
    if (defaultValue) {
      setFieldState(fieldStateEnum.NO_EDIT);
    }
  }, [defaultValue]);

  const onChangeHandler = (e:React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
    if (inputValue) {
      setFieldState(fieldStateEnum.WAITING_SEND);
    } else {
      setFieldState(fieldStateEnum.EDIT);
    }
  };

  // const onUpdateHandler = () => {
  //   updateUser({ variables: { data: { id: user.id, field: name, value: inputValue } } })
  //     .then(() => {
  //       setFieldState(fieldStateEnum.NO_EDIT);
  //       setError('');
  //       dispatch(updateUserValues(name, inputValue));
  //     })
  //     .catch((e) => setError(e.message));
  // };

  return (
    <FieldUpdateStyled className={`field-update ${fieldState}`}>
      {label && <label>{label}</label>}
      <div className="field-update__input">

        <div className="field-update__actions">
          {fieldState === fieldStateEnum.NO_EDIT && (
            <div
              className="field-update__edit"
              onClick={() => setFieldState(fieldStateEnum.EDIT)}
              role="button"
              tabIndex={0}
            >
              <EditIcon />
            </div>
          )}
          {fieldState === fieldStateEnum.WAITING_SEND && (
            <div
              className="field-update__send"
              role="button"
              tabIndex={0}
            >
              <CheckIcon />
            </div>
          )}
        </div>

        <input
          type={type}
          onChange={onChangeHandler}
          name={name}
          placeholder={placeholder}
          defaultValue={initialValue}
        />
      </div>
      {error && (
        <div className="field-update__error">
          <span>{error}</span>
        </div>
      )}
    </FieldUpdateStyled>
  );
};

export default FieldUpdate;
