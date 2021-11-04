import styled from 'styled-components';
import { COLORS } from '../../../../constants';
import check from '../../../../assets/img/check.svg';
import edit from '../../../../assets/img/edit.svg';

export const FormikFieldStyled = styled.div`
  margin-bottom: 25px;
  position: relative;
  label {
    font-size: 12px;
    line-height: 1.3;
    color: ${COLORS.GRAY_3};
    display: block;
    margin-bottom: 7px;
  }
  .diSkkD {
    span {
      font-size: 14px;
      padding-right: 30px;
      color: ${COLORS.PRIMARY_DARK};
      box-sizing: border-box;
      font-weight: 500;
    }
  }
  .send-icon,
  .edit-field {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 40px;
    height: 40px;
    display: flex;
    cursor: pointer;
    font-size: 0;
    z-index: 5;
    justify-content: center;
    align-items: center;
    right: 5px;
    background: url(${check}) no-repeat center/25px;
  }
  .edit-field {
    background: url(${edit}) no-repeat center/17px;
  }
  &.editable {
    input {
      padding-right: 45px;
      opacity: 0.7;
      background: #ccc;
      pointer-events: none;
      box-sizing: border-box;
    }
  }
  .DayPickerInput {
    width: 100%;
    input{
      border: none;
      outline: none;
      width: 100%;
      box-sizing: border-box;
      height: 40px;
      padding-left: 15px;
      background: ${COLORS.GRAY_4};
      cursor: pointer;
      align-items: center;
      display: flex;
    }
  } 
`;
