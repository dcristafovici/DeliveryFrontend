import styled from 'styled-components';
import { COLORS } from '../../../../constants';

export const TextareaStyled = styled.textarea`
  border: none;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  padding-left: 15px;
  background: ${COLORS.GRAY_4};
  padding-top: 10px;
  resize: none;
  height: 80px;
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.GRAY_1};
  }
`;
