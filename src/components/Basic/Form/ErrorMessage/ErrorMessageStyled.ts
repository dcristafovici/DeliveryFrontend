import styled from 'styled-components';
import { COLORS } from '../../../../constants';

export const ErrorMessageStyled = styled.div`
  margin-top: 10px;
  width: 100%;
  span {
    color: ${COLORS.RED}
  }
`;
