import styled from 'styled-components';
import { COLORS } from '../../../../constants';

export const FormikFieldStyled = styled.div`
  label {
    font-size: 12px;
    line-height: 1.3;
    color: ${COLORS.GRAY_3};
    display: block;
    margin-bottom: 7px;
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
